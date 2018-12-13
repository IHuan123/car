<template>
    <div class="corder">
        <div class="fill"></div>
        <div class="checkBox">
            <div class="oheader">
                <div class="itemBlcok">
                    <p>订单编号： 18335110000005</p>
                    <p>下单时间： 2018-12-01 12:52:15</p>
                </div>
                <div class="obody">
                    <div class="otitle"><p>订单概况</p></div>
                    <div class="orderlist">
                        <div><span>订单编号： 18335110000005</span><span>订单状态： 超时关闭</span></div>
                        <div><span>联系电话： {{olist.phone}}</span><span>收货人：{{olist.real_name}}</span></div>
                        <div><span>订单类型： 整车订单</span></div>
                    </div>
                </div>
            </div>                    
            <table class="caroder">
                <thead>
                    <th>商品</th>
                    <th>订金金额</th>
                    <th>数量</th>
                    <th>商品规格</th>
                    <th>支付金额</th>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="cardeta">
                               <img :src="olist.carimg" alt=""> 
                               <p>{{olist.carName}}</p>
                               <span>颜色：{{olist.carColor}},排量：{{olist.pl}},型号：{{olist.car_xh}},内饰：{{olist.car_ns}}</span>
                            </div>
                        </td>
                        <td>500</td>
                        <td></td>
                        <td>1</td>
                        <td>
                            <p>500</p> 
                            <div class="gbuybtn" @click="not()"><span>立即支付</span></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            eid:0,
            olist:{},
        }
    },
    methods:{
        getorder(){
            window.sessionStorage;
            this.eid=this.$route.params.eid;
            this.oid=sessionStorage.getItem("oid")
            // window.sessionStorage
            // sessionStorage.setItem("")
            console.log(this.eid,this.oid)
            this.axios.get("order/orderD",{
                params:{
                    oid:this.oid
                }
            }).then(res=>{
                this.olist=res.data[0];
                console.log(this.olist)
            })
        },
        not(){
            this.$router.push("/not")
        }

    },
    mounted(){
        this.getorder()
    }

}
</script>
<style scoped>

    @import "../../css/check-order.css"
</style>
