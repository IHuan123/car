<template>
    <div class="homeStore">
        <!-- 商店导航栏 -->
        <div class="entity">
            <div class="store-nav row"  :style="snavStyle">
                <div class="col-lg-4 col-md-12 g-logo">
                    <a href="#">
                        <img src="../../assets/img/geely_store/ds-logo.png">
                    </a>
                </div>
                <div class="g-s-search col-lg-4 col-md-12">
                    <div class="gcenter">
                        <div class="s-search-box">
                            <input type="text" placeholder="请输入车型" v-model="carname" @input="search()">
                            <div class="searchBox">
                                <ul>
                                    <li v-for="item in carsearchlist" :key="item.eid" @click="skip(item.carName)">
                                        {{item.carName}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="s-search-car">
                            <button @click="searchHidden()">选择车型<i class="iconfont  icon-xuanzeqizhankai"></i></button>
                            <div class="search-extend" :style="searchStyle">
                                <div class="search-trigon"></div>
                                <ul>
                                    <li>
                                        <a href="#">全部</a>
                                    </li>
                                    <li>
                                        <a href="#">整车</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="s-search-enter">
                            <button @click="searchList()">
                                <i class="iconfont icon-sousuo_o"></i>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="g-phone col-lg-4 col-md-12">
                    <img src="../../assets/img/geely_store/geely-phone.png">
                </div>
            </div>
        </div>


        <!-- 商店主体内容 -->

        <section>
            <!-- 商店轮播 -->
            <div class="s-carousel">
                <div class="s-imglist">
                    <el-carousel>
                        <el-carousel-item v-for="item in imgs" :key="item.id">
                            <h3>
                                <span>
                                    <img :src="item.imgurl" alt=""  @click="getEid(item.eid)">
                                </span>
                            </h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <!-- 轮播下车型扩展 -->
                <div class="car-model-list" v-show="cut">
                    <div class="g-car-extend">
                        <div class="extend-nav">
                            <div class="re-mai">
                                <span>
                                    <img src="../../assets/img/motorcycle-type/hot.png" alt="" @click="getAllList()">
                                    <span>热卖车型</span>
                                </span>
                            </div>
                            <div class="car-classify">
                                <div>
                                    <ul>
                                        <li>
                                            <img src="../../assets/img/motorcycle-type/bingrui.png" @click="getExtend(dataClass[0].dc1)">
                                        </li>
                                        <li>
                                            <img src="../../assets/img/motorcycle-type/borui.png" @click="getExtend(dataClass[0].dc2)">
                                        </li>
                                        <li>
                                            <img src="../../assets/img/motorcycle-type/boyue.png" @click="getExtend(dataClass[0].dc3)">
                                        </li>
                                        <li>
                                            <img src="../../assets/img/motorcycle-type/dihao.png" @click="getExtend(dataClass[0].dc4)">
                                        </li>
                                        <li>
                                            <img src="../../assets/img/motorcycle-type/yuanjing.png" @click="getExtend(dataClass[0].dc5)">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div class="car-roll-list">
                            <div class="mold-cut">
                                <div class="prevP" @click="zyCut(1)">
                                    <i class="iconfont icon-xiangzuo"></i>
                                </div>
                                <div class="car-mold-list">
                                    <ul :style="cutStyle">
                                        <li v-for="item in elist" :key="item.eid" @click="carDetails(item.eid)">
                                            <p>{{item.carName}}</p>
                                            <div>
                                                <img :src="item.imgurl">
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div class="nextP" @click="zyCut(-1)">
                                    <i class="iconfont icon-xuanzeqixiayige"></i>
                                </div>
                            </div>
                            <div class="car-details">
                                <div class="huod">
                                    <h5>{{cutDetails.carTitle}}</h5>
                                    <p>{{cutDetails.carActivity1}}</p>
                                    <p>{{cutDetails.carActivity2}}</p>
                                    <p>{{cutDetails.carActivity3}}</p>
                                    <p class="car-price">￥{{cutDetails.carPrice}}
                                        <span> 起</span>
                                    </p>
                                    <div class="car-btnlist">
                                        <div class="car-btn car-btn-bg1">
                                            <span>预约试驾</span>
                                        </div>
                                        <div class="car-btn car-btn-bg2">
                                            <span @click="getEid(cutDetails.eid)">立即购买</span>
                                        </div>
                                        <div class="shoucang">
                                            <span>
                                                <i class="iconfont icon-xiai"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="car-lgImage">
                                    <img :src="cutDetails.imgurl">
                                </div>
                            </div>
                        </div>



                    </div>

                </div>
                <div class="car-list-switch">
                    <i></i>
                </div>
                <div class="car-btn-cut" @click="carCut()" :class="car_rotate">
                    <span>+</span>
                </div>
            </div>

            <!-- 汽车列表 -->
            <div class="recommendList row">

                <div class="carItem col-sm-4" v-for="item in carList" :key="item.cid">
                    <div class="itemImage">
                        <span @click="getEid(item.eid)">
                            <img :src="item.carImgUrl">
                        </span>
                    </div>
                    <div class="item-referral">
                        <div class="item-price">
                            <p>{{item.carName}}</p>
                            <p class="itemfirst-price">￥{{item.cPrice}}
                                <span>起</span>
                            </p>
                        </div>

                        <div class="item-text">{{item.carActivity1}}</div>

                        <div class="item-btn">
                            <div>
                                <i class="iconfont icon-xiai"></i>
                            </div>
                            <div>
                                <span @click="getEid(item.eid)">立即购买</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
            <hr>


            <!-- 热卖车型 -->
            <div class="remaiCar">
                <p>热卖车型</p>
            </div>


            <!-- 活动车型 -->
            <div class="GDiscountsCar">
                <div class="lgCarImg"  @click="getEid(rmcarlistLg.eid)">
                    <div class="carImage">
                        <img :src="rmcarlistLg.carimgurl">
                        <div class="rmName">
                            <p>博瑞GE</p>
                            <div class="rmPrice">
                                <p>￥136,800
                                    <span>起</span>
                                </p>
                                <p>已订购：5040台</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="SmCarImg">

                    <div class="sCarImg"  v-for="item in rmcarlistsm" :key="item.rid" @click="getEid(item.eid)">
                        <div class="carImage carsmimg">
                            <img :src="item.carimgurl">
                            <div class="rmName">
                                <p>{{item.carName}}</p>
                                <div class="rmPrice">
                                    <p>￥{{item.cPrice}}
                                        <span>起</span>
                                    </p>
                                    <p>已订购：5040台</p>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>


            <!-- 底部长图片 -->
            <div class="bottomBanner">
                <span @click="getEid(advertising.eid)">
                    <img :src="advertising.img">
                </span>
            </div>
            <!-- 购车服务介绍 -->
            <div class="A-car-service">
                <ul>
                    <li>
                        <div class="serviceImage">
                            <img src="../../assets/img/JGTM.png">
                        </div>
                        <div class="serviceJS">
                            <p class="GCtitle">价格透明</p>
                            <p>全国统一价，公开透明，
                                <br> 您可以放心无忧，底价购车</p>
                        </div>
                    </li>
                    <li>
                        <div class="serviceImage">
                            <img src="../../assets/img/PPBZ.png">
                        </div>
                        <div class="serviceJS">
                            <p class="GCtitle">品牌保证</p>
                            <p>吉利直营官方商城，
                                <br> 赋予您100%的购车保障</p>
                        </div>
                    </li>
                    <li>
                        <div class="serviceImage">
                            <img src="../../assets/img/QGLB.png">
                        </div>
                        <div class="serviceJS">
                            <p class="GCtitle">全国联保</p>
                            <p>全国授权网点为您提供尊崇的售
                                <br> 后服务以及国家规定的“三包服务</p>
                        </div>
                    </li>
                    <li>
                        <div class="serviceImage">
                            <img src="../../assets/img/ZRJD.png">
                        </div>
                        <div class="serviceJS">
                            <p class="GCtitle">专人接待</p>
                            <p>线上线下1对1专人导购服务，
                                <br> 尊享网购VIP礼遇</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                imgs: [],
                elist: [],
                mold: '',
                cut: false,
                car_rotate: {"disabled": false},
                dataClass: [{dc1: 200,dc2: 201,dc3: 202,dc4: 203,dc5: 204}],
                id: 101,
                cutStyle: {left: "0rem"},
                topStyle:{top:"50px"},
                cutDetails: [],
                carlength: 0,
                carList: [],
                rmcarlistLg:[],
                rmcarlistsm:[],
                searchStyle:{height:"0px"},
                snavStyle:{top:"50px"},
                eid:0,
                advertising:"",
                carname:"",
                carsearchlist:[],
                // lunbo:{height:""},
            }
        },
        methods: {
            getImage() {//获取轮播图片
                // this.$http.get("storeindex/imagelist").then(res => {
                //     this.imgs = res.body;
                // })
                this.axios.get("storeindex/imagelist").then(res=>{
                    this.imgs=res.data
                })
            },
            getExtend(c) {//获取轮播中的扩展
                // this.$http.get("storeindex/extendlist?carClass=" + c).then(res => {
                //     this.elist = res.body
                // })
                // this.axios.get("storeindex/extendlist",{
                //     params:{
                //         carClass:c
                //     }.then(res=>{
                //         this.elist = res.data
                //     })
                // })
                this.axios.get("storeindex/extendlist",{
                    params:{
                        carClass:c
                    }
                }).then((res)=>{
                        this.elist = res.data
                    })           
            },
            getAllList() {//轮播中扩展的详情
                // this.$http.get("storeindex/extendlist").then(res => {
                //     this.elist = res.body
                // })
                this.axios.get("storeindex/extendlist").then(res=>{
                    this.elist=res.data
                })
            },
            carDetails(id) {//轮播中每个车的点击
                // this.$http.get("storeindex/cardetails?eid=" + id).then(res => {
                //     this.cutDetails = res.body[0];
                //     this.id = id;
                // })
                this.axios.get("storeindex/cardetails",{
                    params:{
                        eid:id
                    }
                }).then(res=>{
                    this.cutDetails = res.data[0];
                    this.id = id;                     
                })
            },
            zyCut(i) {//轮播中左右滚动
                this.carlength = this.elist.length;
                if (this.carlength > 7) {
                    if (i == 1) {
                        var left = parseInt(this.cutStyle.left)
                        if (left < 0) {
                            left += 9.8;
                            this.cutStyle.left = left + "rem";
                        }
                    } else if (i == -1) {
                        var left = parseInt(this.cutStyle.left)
                        if (left > -40) {
                            left -= 9.8;
                            this.cutStyle.left = left + "rem"
                        }

                    }
                }

            },
            carCut() {//+号按钮切换
                if (this.cut == false) {
                    this.cut = true
                    this.car_rotate.disabled = true;
                } else {
                    this.cut = false
                    this.car_rotate.disabled = false
                }
            },
            getcarList() {//获取活动汽车列表数据
                // this.$http.get("storeindex/carList").then(res => {
                //     this.carList = res.body;
                // })
                this.axios.get("storeindex/carList").then(res=>{
                    this.carList = res.data;
                })
            },
            getrmCarlist(){//获取热卖车型数据
                // this.$http.get("storeindex/rmcarlist").then(res=>{
                //     this.rmcarlistLg=res.body[0];
                //     this.rmcarlistsm=res.body.slice(1)
                //     console.log(this.rmcarlistLg,this.rmcarlistsm)
                // })
                this.axios.get("storeindex/rmcarlist").then(res=>{
                    this.rmcarlistLg=res.data[0];
                    this.rmcarlistsm=res.data.slice(1)
                })
            },
            searchHidden(){//控制搜索框分类隐藏显示
                var height=parseInt(this.searchStyle.height)
                if(height==0){
                    height=150;
                    this.searchStyle.height=height+"px"
                   
                }else if(height==150){
                    height=0;
                    this.searchStyle.height=height+"px"
                }

            },
            handleScroll () {//控制导航栏上下移动
                    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                    if(scrollTop > 50){
                    this.snavStyle.top="0"
                    }else{
                    this.snavStyle.top="50px"
                } 
            },
            getEid(id){//获得当前车辆eid并跳转
                this.eid=id;
                console.log(id)
                this.$router.push("/cardetails?eid="+id)
                // document.boy.scrollTop="0"
                // window.pageYOffset="0"
                // document.documentElement.scrollTop="0"
            },
            getAdvertising(){
                this.axios.get("storeindex/getgug").then(res=>{
                    this.advertising=res.data[0];
                })
            },
            search(){
                this.axios.get("storeindex/search",{
                    params:{
                        carname:this.carname.trim()
                    }
                }).then(res=>{
                    this.carsearchlist=res.data;
                })
            },
            searchList(){
                 if(this.carsearchlist.length!=0&&this.carname.trim()!=""){
                    window.sessionStorage;
                    sessionStorage.setItem('carname',this.carname)
                    this.$router.push({name:"/search",params:{carname:this.carname}})  
                    }
            },
            skip(n){
                window.sessionStorage;
                sessionStorage.setItem('carname',n)
                this.$router.push({name:"/search",params:{carname:n}})  
            },
            // lunbos(){
            //     var winWidth=window.innerWidth;  //获取窗口宽度
            //     console.log(winWidth)
            //     // this.lunbo.blockSize=winWidth*0.33+'px';//设置轮播响应式尺寸变化
            //     this.lunbo.height=winWidth*0.33+'px';
            // }         
        },
        
        mounted(){
            // window.addEventListener(this.scrollTop,"navHidden")
            window.addEventListener("scroll",this.handleScroll);//监听滚动事件
        },
        created() {
            this.getImage();
            this.getAllList();
            this.carDetails(this.id);
            this.getcarList();
            this.getrmCarlist();
            this.handleScroll();
            this.getAdvertising();
            // this.lunbos()
        }
        
    };
</script>
<style scoped>
    @import "../../css/geely-store.css";
</style>