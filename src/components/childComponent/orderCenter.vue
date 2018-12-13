<template>
    <div class="order-center">
        <div class="order-nav">
            <ul>
                <li :class="{focus:idx==i}" v-for="(item,i) in navlist" :key="item.id" @click="show(item.id)">
                    <div>
                        <span>{{item.title}}</span>
                    </div>
                </li>
            </ul>
        </div>
        <div class="division"><span>我的订单</span></div>
        <!-- 订单列表 -->
        <div class="orderList">
            <ul>
                <li v-for="item in orderlist" :key="item.oid">
                    <div class="orderD">
                        <div><img :src="item.carimg" alt=""></div>
                        <div>
                            <p>{{item.carName}}</p>
                            <p>颜色：{{item.carColor}}</p>
                            <p>排量：{{item.pl}}</p>
                        </div>
                        <div>
                            <p>订单编号:</p>
                            <p>18333110000010</p>
                        </div>
                        <div>
                            <p>下单时间:</p>
                            <p>2018-11-29 22:26</p>
                        </div>
                        <div>
                            <p>金额：</p>
                            <p>￥：500</p>
                            <p>订金</p>
                        </div>
                        <div>
                            <p>交易状态:</p>
                            <p>待付款</p>
                        </div>
                        <span></span>
                        <div class="orderBtn">
                            <p @click="conorder(item.oid,item.eid)">查看订单</p>
                            <p @click="deleteorder(item.oid,item.uname)">取消订单</p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            navlist:[{id:1,title:'全部订单'},{id:2,title:'未支付订单'},{id:3,title:'已支付订单'},{id:4,title:'已完成订单'}],
            idx:0,
            orderlist:[]
        }
    },
    methods:{
        show(id){
            this.idx=id-1
            this.getorderlist()
        },
        getorderlist(){
            this.axios.get("order/oList").then((res)=>{
                this.orderlist=res.data;
                console.log(res.data)
            })            
        },
        conorder(oid,eid){//订单详情
        console.log(oid,eid)
            this.$router.push({name:"/checkorder",params:{oid:oid,eid:eid}})
            window.sessionStorage.setItem("oid",oid)
        },
        deleteorder(oid,uname){//取消订单
            this.axios.get("order/deleteorder",{
                params:{
                    oid,
                    uname
                }
            }).then(res=>{
                if(res.data.code==1){
                    this.$message({
                        message:res.data.msg,
                        type:"success"
                    })
                    this.getorderlist()
                }
            })
        }
    },
    created(){
        this.getorderlist()
    },
    mounted(){
        
    }
}
</script>
<style scoped>
    @import '../../css/order-center.css'
</style>
