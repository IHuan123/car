<template>

    <div class="personal">
        <div class="fill"></div>
        <div class="perBox">
            <div class="percontent">

                <!-- 个人资料左边部分 -->
                <div class="perleft">

                    <!-- 头像部分 -->
                    <div class="head-portrait">
                        <div class="photo">
                            <span><img src="../../assets/img/BuydetailsImg/perImg/photo.png"></span>
                            <span><img src="../../assets/img/BuydetailsImg/perImg/setimg.png"></span>
                        </div>
                        <p class="nickname">{{uname}}</p>
                        <div class="gcollect-spoor">
                            <div>
                                <p>0</p>
                                <p>收藏</p>
                            </div>
                            <span></span>
                            <div>
                                <p>11</p>
                                <p>足迹</p>
                            </div>
                        </div>
                    </div>


                    <!-- 积分认证部分 -->
                    <div class="jfrz">
                        <!-- 积分部分 -->
                        <div class="gintegral">
                            <div class="gintop">
                                <span></span>
                                <p>积分</p>
                                <span></span>
                            </div>
                            <div class="ginmiddle">
                                <div class="glogosm"><span><img src="../../assets/img/BuydetailsImg/perImg/glogosm.png"></span><span>0</span></div>
                            </div>
                        </div>
                        <!-- 车主认证 -->
                        <div class="gintegral">
                            <div class="gintop">
                                <span></span>
                                <p>车主认证</p>
                                <span></span>
                            </div>
                            <div class="ginmiddle">
                                <div class="glogosm"><span><img src="../../assets/img/BuydetailsImg/perImg/rlogo.png"></span></div>
                            </div>
                            <p>未认证</p>
                            <div class="carbg">
                                <img src="../../assets/img/BuydetailsImg/perImg/bgcar.png">
                            </div>
                        </div>                        
                    </div>



                </div>

            <!-- 右边部分 -->
                <div class="perright">
                    <!-- 右边导航栏部分 -->
                    <div>
                        <ul class="listBtn row">
                            <li class="col-md-2 col-sm-4 col-4">
                                <div @click="order()">
                                    <img src="../../assets/img/BuydetailsImg/perImg/ddzx.png">
                                    <span>订单中心</span>
                                </div>
                            </li>
                            <li class="col-md-2 col-sm-4 col-4">
                                <div @click="reservation()">
                                    <img src="../../assets/img/BuydetailsImg/perImg/wdyy.png">
                                    <span>我的收藏</span>
                                </div>
                            </li>
                            <li class="col-md-2 col-sm-4 col-4">
                                <div @click="volume()">
                                    <img src="../../assets/img/BuydetailsImg/perImg/wdkj.png">
                                    <span>我的卡卷</span>
                                </div>
                            </li>
                            <li class="col-md-2 col-sm-4 col-4">
                                <div>
                                    <img src="../../assets/img/BuydetailsImg/perImg/wdpj.png">
                                    <span>我的评价</span>
                                    <div class="wwc">
                                        <span>敬请期待</span>
                                    </div>
                                </div>

                            </li>
                            <li class="col-md-2 col-sm-4 col-4">
                                <div>
                                    <img src="../../assets/img/BuydetailsImg/perImg/wdby.png">
                                    <span>我的保养</span>
                                    <div class="wwc">
                                        <span>敬请期待</span>
                                    </div>
                                </div>

                            </li>
                            <li class="col-md-2 col-sm-4 col-4">
                                <div>    
                                    <p>吉行天下</p>
                                    <span>>></span>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <!-- 内容切换区域 -->
                    <div class="ucontent">
                        <!-- <order-center></order-center> -->
                        <router-view></router-view>
                    </div>


                </div>
            </div>
        </div>
    </div>
</template>
<script>
    // import orderCenter from '../childComponent/orderCenter.vue'
    export default {
        data(){
            return {
                uname:"",
            }
        },
        methods:{
            order(){
                this.$router.push("/order")
            },
            reservation(){
                this.$router.push("/reservation")
            },
            volume(){
                this.$router.push("/volume")
            },
            getuname(){
                window.sessionStorage
                this.uname=sessionStorage.getItem("uname")
            }
        },
        mounted(){
            this.order()
            this.getuname()
        }
        
        // components:{
        //     "order-center":orderCenter
        // }
    }
</script>
<style scoped>
    @import "../../css/geely-personal.css";
</style>
