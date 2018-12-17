<template>
  <div id="app">
  <!--导航栏-->
    <div class="header" :style="hnavStyle">
        <!--nav-->
        <div>
            <header>
                <div class="glogo">
                    <router-link to="/">
                        <img src="./assets/img/logo.png">
                    </router-link>
                </div>
                <nav>
                    <ul class="nav-opt">
                        <li>
                            <span>车型总览<i class="iconfont icon-xuanzeqizhankai"></i></span>
                        </li>
                        <li>
                            <span>品牌天地<i class="iconfont icon-xuanzeqizhankai"></i></span>
                        </li>
                        <li>
                            <span>购车支持<i class="iconfont icon-xuanzeqizhankai"></i></span>
                        </li>
                        <li>
                            <span @click="stroe()">官方商城</span>
                        </li>
                        <li>
                            <span>商务合作<i class="iconfont icon-xuanzeqizhankai"></i></span>
                        </li>
                        <li>
                            <span>吉行天下<i class="iconfont icon-xuanzeqizhankai"></i></span>
                        </li>
                    </ul>
                </nav>

                <div class="nav-search">
                    <ul>
                        <li class="glogin">
                            <router-link to="/loginYM" v-if="lstatu">登录</router-link>
                            <router-link to="/personal" v-else class="islogin">{{uname}}</router-link>
                            </li>
                        <li>|</li>
                        <li class="gregister">
                            <router-link to="/registerYM" v-if="lstatu">注册</router-link>
                            <span class="islogin" v-else @click="exit()">退出</span>
                        </li>

                    </ul>
                </div>
            </header>
        </div>

        <!--车型分类-->
        <div class="vehicle_mode">
            <div class="nav-close"><span>X</span></div>
            <div>
                <h2>探索车型</h2>
                <ul>
                    <li class="cPrice">
                        <div>
                            价格
                            <input type="range" max="100000" min="1000" value="1000">
                        </div>
                    </li>

                    <li class="cConstruction">
                        <ul class="construction-btn">
                            <li>结构:</li>
                            <li><input class="chbq" type="checkbox" id="d1"><label for="d1">全部</label></li>
                            <li><input class="chb" type="checkbox" id="d2"><label for="d2">SUV</label></li>
                            <li><input class="chb" type="checkbox" id="d3"><label for="d3">MPV</label></li>
                            <li><input class="chb" type="checkbox" id="d4"><label for="d4">新能源</label></li>
                            <li><input class="chb" type="checkbox" id="d5"><label for="d5">两厢</label></li>
                            <li><input class="chb" type="checkbox" id="d6"><label for="d6">三厢</label></li>
                        </ul>
                    </li>
                    <li class="car-series">
                        <ul class="series-btn">
                            <li>车系：</li>
                            <li><input class="chbq" type="checkbox" id="c1"><label for="c1">全部</label></li>
                            <li><input class="chb" type="checkbox" id="c2"><label for="c2">缤瑞</label></li>
                            <li><input class="chb" type="checkbox" id="c3"><label for="c3">博瑞</label></li>
                            <li><input class="chb" type="checkbox" id="c4"><label for="c4">博越</label></li>
                            <li><input class="chb" type="checkbox" id="c5"><label for="c5">帝豪</label></li>
                            <li><input class="chb" type="checkbox" id="c6"><label for="c6">金刚</label></li>
                            <li><input class="chb" type="checkbox" id="c7"><label for="c7">远景</label></li>
                        </ul>
                    </li>



                    <li  class="car-list">
                        <ul class="car-img">
                            <li v-for="(cars,i) in pandect" :key="cars.id" >
                                <div class="md-car" @click="getcardesc(cars.eid)">
                                    <h5>{{cars.carName}}</h5>
                                    <p>官方指导价：￥{{cars.carPrice}}.00起</p>
                                    <div><img :src="cars.pandecturl"></div>
                                </div>
                                <div class="lg-car"  @click="getcardesc(cars.eid)">
                                    <div>
                                        <ul>
                                            <li>
                                                <b>{{cars.carName}}</b>
                                            </li>
                                            <li>
                                                官方指导价：￥{{cars.carPrice}} 起
                                            </li>
                                            <li><span><img :src="cars.pandecturl"></span></li>
                                        </ul>
                                        <ul>
                                            <li><span>外形尺寸</span> {{cars.appearance}}</li>
                                            <li><span>发动机</span>{{cars.engine}}</li>
                                            <li><span>轴距</span>{{cars.wheel_base}}</li>
                                            <li><span>变速箱</span>{{cars.gearbox}}</li>
                                            <li><span>百公里耗油</span>{{cars.oil_wear}}</li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li class="shijia">
                        <ul>
                            <li><h2>预约试驾</h2></li>
                            <li>姓名<input type="text"></li>
                            <li>手机<input type="text"></li>
                            <li><a href=""><span></span>快速预约</a></li>
                        </ul>

                    </li>
                </ul>
            </div>
        </div>
        <!--品牌天地-->
        <div class="brand">
            <div class="nav-close"><span>X</span></div>
            <div class="brand-m">
                <div>
                    <b>品牌天地</b>
                    <p>进入品牌天地</p>
                </div>
                <ul class="brand-img">
                    <li class="parting"></li>
                    <li>
                        <div>
                            <a href=""><img src="./assets/img/car/jtgs.jpg"/></a>
                        </div>
                        <span><a href="">集团概述</a></span>
                        <div>
                            <a href="">吉利大事记</a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href=""><img src="./assets/img/car/xwzx.jpg"/></a>
                        </div>
                        <span class=""><a href="">新闻资讯</a></span>
                        <span class="arrows"></span>
                        <div>
                            <ul>
                                <li>
                                    <a href="">新闻资讯</a>
                                </li>
                                <li>
                                    <a href="">视频集锦</a>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href=""><img src="./assets/img/car/jspp.jpg"/></a>
                        </div>
                        <span><a href="">技术品牌</a></span>
                        <span class="arrows"></span>
                        <div>
                            <ul>
                                <li><a href="">高效动力技术</a></li>
                                <li><a href="">人本安全技术</a></li>
                                <li><a href="">智慧互联车行技术</a></li>
                                <li><a href="">健康生态技术</a></li>
                                <li><a href="">智能驾驶技术</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href=""><img src="./assets/img/car/pptd.png"/></a></div>
                        <span><a href="">品牌天地</a></span>
                        <span class="arrows"></span>
                        <div>
                            <ul>
                                <li><a href="#">企业文化</a></li>
                                <li><a href="#">吉利教育</a></li>
                                <li><a href="#">社会责任</a></li>
                            </ul>
                            <a href=""></a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!--购车支持-->
        <div class="Car-support">
            <div class="nav-close"><span>X</span></div>
            <div class="Car-cen">
                <div class="cartit">
                    <p>购车支持</p>
                    <p>让您的购车体验更舒适</p>
                </div>
                <span></span>
                <div class="service">
                    <ul>
                        <li><a href="#"><img src="./assets/img/car/yysj.jpg" alt=""><p>预约试驾</p></a></li>
                        <li><a href="#"><img src="./assets/img/car/jxxcx.jpg" alt=""><p>经销商查询</p></a></li>
                        <li><a href="#"><img src="./assets/img/car/schd.jpg" alt=""><p>市场活动</p></a></li>
                        <li><a href="#"><img src="./assets/img/car/tmqjd.jpg" alt=""><p>天猫旗舰店</p></a></li>
                        <li><a href="#"><img src="./assets/img/car/czfw.jpg" alt=""><p>车主服务</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!--商务合作-->
        <div class="Car-bc">
            <div class="nav-close"><span>X</span></div>
            <div class="bc-cen">
                <div class="bctit">
                    <p>商务合作</p>
                    <p>进入商务合作</p>
                </div>
                <span></span>
                <div class="bcservice">
                    <ul>
                        <li><a href=""><img src="./assets/img/car/jlyf.jpg" alt=""><p>吉利研发中心预约</p></a></li>
                        <li><a href=""><img src="./assets/img/car/jlqczs.jpg" alt=""><p>吉利汽车招商加盟</p></a></li>
                        <li><a href=""><img src="./assets/img/car/jlxnyjm.jpg" alt=""><p>吉利新能源汽车招商加盟</p></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <!--吉行天下-->
        <div class="Car-GXTX">
            <div class="nav-close"><span>X</span></div>
                <div class="G-cen">
                    <div class="Gtit">
                        <p>吉行天下</p>
                        <p>让我们长久相伴</p>
                    </div>
                    <span></span>
                    <div class="Gservice">
                        <ul>
                            <li><a href=""><img src="./assets/img/car/club_home.jpg" alt=""><p>吉行天下首页</p></a></li>
                            <li><a href=""><img src="./assets/img/car/club_quanzi.jpg" alt=""><p>圈子</p></a></li>
                            <li><a href=""><img src="./assets/img/car/club_activity.jpg" alt=""><p>活动</p></a></li>
                            <li><a href=""><img src="./assets/img/car/club_youjuhui.jpg" alt=""><p>友聚惠</p></a></li>
                            <li><a href=""><img src="./assets/img/car/club_jishe.jpg" alt=""><p>吉行驿站</p></a></li>
                            <li><a href=""><img src="./assets/img/car/club_mall.jpg" alt=""><p>吉币商城</p></a></li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>  
    <router-view></router-view>
        <!-- 底部 -->
      <footer>
        <div class="footer">
            <div class="classify">
                <ul>
                    <li>
                        <div class="footer-up">品牌天地</div>
                        <ul class="footer-option">
                            <li><a href="">新闻资讯</a></li>
                            <li><a href="">技术品牌</a></li>
                            <li><a href="">企业文化</a></li>
                            <li><a href="">吉利教育</a></li>
                            <li><a href="">社会责任</a></li>
                            <li class="footer-cosle">X关闭</li>
                        </ul>
                    </li>
                    <li>
                        <div class="footer-up">热门车型</div>
                        <ul class="footer-option">
                            <li><a href="">博瑞</a></li>
                            <li><a href="">博越</a></li>
                            <li><a href="">帝豪GL</a></li>
                            <li><a href="">帝豪GS</a></li>
                            <li><a href="">全新帝豪</a></li>
                            <li><a href="">全新远景</a></li>
                            <li class="footer-cosle">X关闭</li>
                        </ul>
                    </li>
                    <li>
                        <div class="footer-up">购车支持</div>
                        <ul class="footer-option">
                            <li><a href="">预约试驾</a></li>
                            <li><a href="">经销商查询</a></li>
                            <li><a href="">市场活动</a></li>
                            <li><a href="">天猫旗舰店</a></li>
                            <li class="footer-cosle">X关闭</li>
                        </ul>
                    </li>
                    <li>
                        <div class="footer-up">车主服务</div>
                        <ul class="footer-option">
                            <li><a href="">服务活动</a></li>
                            <li><a href="">关爱课堂</a></li>
                            <li><a href="">服务介绍</a></li>
                            <li><a href="">服务站查询</a></li>
                            <li><a href="">精品与零件</a></li>
                            <li><a href="">G-LINK服务</a></li>
                            <li class="footer-cosle">X关闭</li>
                        </ul>
                    </li>
                    <li>
                        <div class="footer-up">商务合作</div>
                        <ul class="footer-option">
                            <li><a href="">吉利研发中心预约</a></li>
                            <li><a href="">吉利汽车招商加盟</a></li>
                            <li><a href="">吉利新能源招商加盟</a></li>
                            <li><a href="">吉利招标采购平台</a></li>
                            <li class="footer-cosle">X关闭</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="copyright">
                <ul>
                    <li>
                        <p><a href="">&copy; 2013 浙江吉利控股集团 浙ICP备11045738号-8</a></p>
                        <p><a href=""> 中国互联网诚信示范单位</a></p>
                    </li>
                    <li>
                        <div style="color:white"><i></i>400-886-9888</div>
                        <ul>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
    data(){
        return{
            top:1,
            hnavStyle:{top:"0px"},
            id:this.$route.query.eid,
            pandect:[],
            activeIdx:0,
            cuts:0,
            eid:0,
            navh:{height:""},
            lstatu:true,
            // nolstate:false,
            ok:this.$store.getters.status,
            logins:[],
            uname:'',
        }
    },
    methods:{   
        handleScroll () {//控制导航栏隐藏显示
            if(this.id==undefined){
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                if(scrollTop > 50){
                this.hnavStyle.top = "-50px";
                }else{
                this.hnavStyle.top="0px";
                }           
            }
        },
        getpandect(){
            this.axios.get("storeindex/extendlist").then(res=>{
                this.pandect=res.data;
                console.log(this.pandect)                
            })
        },
        getcardesc(id){//获得当前车辆eid并跳转
            this.eid=id;
            this.$router.push("/cardetails?eid="+id);
            this.$store.commit("geteid",id);
        },
        stroe(){
            this.$router.push("/")
        },
        loggingStatus(){
                this.axios.get("glogin/islogin").then(res=>{
                    this.ok=res.data.ok;
                    this.uname=res.data.uname;
                    console.log(this.ok)
                    if(this.ok == -1){
                        this.lstatu=true
                    }else if(this.ok == 1){
                        this.lstatu=false
                    }                        
                })
        },
        exit(){
            this.axios.get("glogin/signout").then(res=>{
                this.lstatu=true;
                this.$router.push("/")
                this.axios.get("glogin/islogin").then(res=>{
                    this.ok=res.data.ok
                    this.$store.commit("getok",res.data.ok)
                })
            })
        }
    },
    computed:{
        isL(){
            return this.$store.getters.status;
        }
    },
    watch:{
        isL(){
            window.addEventListener("scroll",this.handleScroll);
            window.addEventListener("eid",this.stroe)
            this.getpandect()
            this.loggingStatus()
        }
    },
    created(){
        this.loggingStatus()
    },
    mounted(){
        window.addEventListener("scroll",this.handleScroll);
        window.addEventListener("eid",this.stroe)
        this.getpandect()
        },
}
</script>

<style>
 @import "./css/geely-header.css";
 @import "./css/geely-footer.css";
</style>
