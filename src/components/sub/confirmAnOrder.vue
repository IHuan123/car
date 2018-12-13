<template>
    <div class="confirm-an-order">
        <div class="fill"></div>
        <div class="buyBox">


            <div class="buyleft">
                
                <h2>在线订购</h2>
                <p>尊敬的客户，*为必填项，您的信息我们会完全保密，请放心填写。</p>
                <div class="buyOption">
                    <div class="buytitle"><span> 姓名</span></div>
                    <div class="buyBtn"><input type="text" v-model="realname"></div>
                </div>
                <div class="buyOption">
                    <div class="buytitle"><span> 性别</span></div>
                    <div class="buyBtn radioBtn">
                        <input type="radio" id="man" name="agx"><label for="man"><span>男</span></label>
                        <input type="radio" id="woman" name="agx"><label for="woman"><span>女</span></label>
                    </div>
                </div>

                <div class="buyOption">
                    <div class="buytitle"><span>联系电话</span></div>
                    <div class="buyBtn"><input type="text" v-model="phone"></div>
                </div>

                <div class="buyOption">
                    <div class="buytitle"><span>选择经销商</span></div>
                    <div class="buyBtn">
                        <div class="cascader"><cascader-box></cascader-box></div>
                        <div class="cascader"><select-box></select-box></div>
                    </div>
                </div>

                <div class="buyOption">
                    <div class="buytitle"><span>备注</span></div>
                    <div class="buyBtn buyText"><textarea name="" id="" cols="30" rows="10" style="resize: none"></textarea></div>
                </div>

                <div class="buyOption">
                    <div class="buytitle"><span>需要延保服务</span></div>
                    <div class="buyBtn buyCheckbox"><input type="checkbox"></div>
                </div>

                <div class="buyOption">
                    <div class="buytitle"><span>需要置换服务</span></div>
                    <div class="buyBtn buyCheckbox"><input type="checkbox"></div>
                </div>

            </div>
            <div class="zone"></div>
            <div class="buyright">
                <h2>确认订单</h2>
                <p>尊敬的客户，您的订单付款有效期为下单后24小时，如您未支付将被自动取消，请您及时完成支付。</p>
                <div class="Orderdetail">
                    <table>
                        <thead cellspacing=0>
                            <th class="carImg">商品</th>
                            <th class="orderT">付款方式</th>
                            <th class="orderT">单价</th>
                            <th class="orderT">数量</th>
                            <th class="orderT">小计</th>
                        </thead>
                        <tbody>
                            <td class="carImg">
                                <div><img :src="carLgurl" alt=""></div>
                                <div class="carD">
                                    <p>{{carName}}</p>
                                    <div><span>颜色：{{colorn}}</span><span>排量：{{plcontent}}</span></div>
                                    <div><span>型号：{{pitchOn}}</span><span>内饰：{{carns}}</span></div>
                                </div>
                            </td>
                            <td class="orderT"><span>订金</span></td>
                            <td class="orderT"><span>500元</span></td>
                            <td class="orderT"><span>1</span></td>
                            <td class="orderT"><span>500元</span></td>
                        </tbody>
                    </table>
                    <div class="tfoot">
                        <div>
                            <div><span>商品总计：</span><span>￥500</span></div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
        <div class="enterBtn">
            <div>
                <div class="btn" @click="go()"><span><返回</span></div>
                <div class="btn" @click="order()"><span>确认订单</span></div>                
            </div>

        </div>
    </div>
</template>
<script>
import selectBox from "../element/select.vue"
import CascaderBox from '../element/Cascader.vue'
export default {
    data(){
        return {
            eid:null,
            uname:"",
            carLgurl:null,
            colorn:null,
            plcontent:null,
            pitchOn:null,
            carns:null,
            carName:null,
            realname:"",
            phone:"",
        }
    },
    methods:{
        getorderparmas(){
            this.eid=this.$store.getters.inoeid
            this.carLgurl=this.$store.getters.incarLgurl
            this.colorn=this.$store.getters.incolorn
            this.plcontent=this.$store.getters.inplcontent
            this.pitchOn=this.$store.getters.inpitchOn
            this.carns=this.$store.getters.incarns
            this.carName=this.$store.getters.incarname
            window.sessionStorage
            this.uname=sessionStorage.getItem("uname")          
        },
        order(){//订单确认
        var username = /^[\u4E00-\u9FA5A-Za-z]+$/;
        var userphone=/^1[34578]\d{9}$/;
            if(this.realname.trim()=="" && this.phone.trim()==""){
                this.$message.error("姓名和联系电话不能为空")
                return
            }else if(!(username.test(this.realname))){
                this.$message.error("姓名格式不正确")
            }else if(!(userphone.test(this.phone))){
                this.$message.error("联系电话格式不正确")
                return
            }else{
                this.axios.get("order/orderstatus",{
                    params:{
                        eid:this.eid,
                        uname:this.uname,
                        name:this.realname,
                        phone:this.phone,
                        carName:this.carName,
                        carColor:this.colorn,
                        pl:this.plcontent,
                        xh:this.pitchOn,
                        car_ns:this.carns,
                        carimg:this.carLgurl,
                    }
                }).then(res=>{
                    this.$message({message:res.data.msg,type:"success"})
                    this.$router.push("personal")
                })
            }
        },
        go(){//返回功能
            this.$router.go(-1)
        }
    },
    computed:{
        geteid(){
            return this.$store.getters.cardesc
        }
    },
    watch:{
        geteid(){
            this.getorderparmas()
        }
    },
    components:{
        "select-box":selectBox,
        "cascader-box":CascaderBox
    },
    mounted(){
        this.getorderparmas()
    }
}
</script>
<style scoped>
@import "../../css/confirm-an-order.css";
</style>
