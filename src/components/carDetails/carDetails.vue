<template>
    <div class="car">
        <div class="detailsfill"></div>
        <div class="carDetails">
            <!-- 左边大图 -->
            <div class="Detailsleft">
                <div class="cartitle"><p>{{carName}}</p></div>
                <div class="carLgimg"><img :src="carlgurl"></div>
            </div>


        <!-- 右边选项 -->
            <div class="Detailsright">

                    <!-- 切换按钮 -->
                    <div class="carBtn">
                        <ul class="btngroup">
                            <li class="btnItem" :class="{active:changeActive==i}" @click="cutBtn(i)" v-for="(item,i) in icons" :key="item.id" ><i :class="item.c"></i></li>
                            <li class="btnItem" :class="shoucang" @click="scBtn()"><i class="iconfont icon-xiai"></i></li>                            
                        </ul>
                    </div>

                <div class="carCut">

                    <!-- 规格选择 -->
                    <div class="optionC" v-if="changeActive==0">
                        <!-- car颜色 -->
                        <div class="carstyle">
                            <div class="caroption"><p>颜色选择</p></div>
                            <ul>
                                <li v-for="(item,i) in carLgImg" :key="item.id" @click="getcarcolor(i)">
                                    <div class="carcolor">
                                        <img :src="item.colorblock_url" class="color">
                                        <img src="../../assets/img/carDetailsimg/tjh.png"  class="imgHidden" :class="{imgShow:cidx==i}">
                                    </div>
                                    <p>{{item.color}}</p>
                                </li>
                            </ul>
                        </div>

                        <!-- 选择排量 -->
                        <div class="carcon">
                            <div class="displacement"><p>请选择排量</p></div>
                            <div class="carConbtn" :class="{carActive:PLidx==i}" v-for="(item,i) in carPLs" :key="item.id" @click="getcarpl(i)">
                                <span>{{item.car_pl}}</span>
                            </div>                     
                        </div>
                    </div>

                        <!-- 选择车型 -->
                    <div class="carSelect" v-else-if="changeActive==1">

                        <div class="carOption">
                            <p class="Ititle">请选择型号</p>
                            <div class="Caritem" :class="{pitchOn:xidx==i}" v-for="(item,i) in carxh" :key="item.id" @click="showXH(i)"><p>{{item.car_xh}}</p></div>

                        </div>
                    </div>


                    <!-- 车辆内饰 -->
                    <div class="trim" v-else-if="changeActive==2">
                        <div class="trimOption">
                            <div class="trimTitle"><p>请选择内饰</p></div>

                            <div class="trimColor">
                                <div class="trimImg">
                                    <img :src="gtrim.nsblock">
                                    <img src="../../assets/img/carDetailsimg/tjh.png">
                                </div>
                                <div class="trimDesc"><span>{{gtrim.car_NS}}</span></div>
                            </div>

                            <div class="trimLgImg">
                                <div class="trimLgBox">
                                    <img :src="gtrim.nsimage">
                                    <div class="trimLgDesc">
                                        <p>{{gtrim.nstitle}}</p>
                                        <p>{{gtrim.nsdesc}}</p>
                                    </div>   
                                </div>
                            </div>
                        </div>
                    </div>


                    <!-- 金融方案 -->
                    <div class="financial" v-else>
                        <div class="financialTitle"><p>是否需要金融方案</p></div>
                        <div class="finOption">
                            <div class="financialBtn"><p class="selected">需要</p></div>
                            <div class="financialBtn"><p>不需要</p></div>
                        </div>
                    </div>
                </div>  

                        <!-- 价格  购买 -->
                    <div class="configurationBox">
                        <div class="configuration-information">
                            <ul>
                                <li><span>颜色：</span><img :src="colorblock"></li>
                                <li><span>排量：</span><span>{{plcontent}}</span></li>
                                <li><span>型号：</span><span>{{pitchOn}}</span></li>
                                <li><span>内饰：</span><span>{{carns}}</span></li>
                            </ul>
                        </div>
                        <div class="marketing-information">
                            <div class="sales">
                                <ul>
                                    <li><i>销量：</i><i>28946</i></li>
                                    <li><span>库存：</span><span>0</span></li>
                                </ul>
                            </div>
                            <div class="carPrice">
                                <span>指导价：</span><span>￥{{carPrice}}</span>
                            </div>
                        </div>
                        <div class="buy">
                            <div class="earnest">
                                <p>实际预付订金</p>
                                <p>￥<span>500</span></p>
                            </div>
                            <div class="order"  @click="next()" :style="oshow">
                                <span>订制下一项</span>
                            </div>
                            <div class="now-buy"   @click="buy()" :style="nshow">
                                <span>立即订购</span>
                            </div>
                        </div>
                    </div>

                    
            </div>

        </div>

        <!-- 车型详情图 -->
        <div class="detailsImg">
            <figure v-for="img in carpz" :key="img.pz_id">
                <img :src="img.car_pz_img_url">
            </figure>
        </div>

        <!-- 咨询 -->
        <div class="consult" :style="hide">
            <div class="zx">
               <img src="../../assets/img/buydetailsImg/zx.png">
            </div>
            <div class="goon" @click="top()">
                <img src="../../assets/img/buydetailsImg/goon.png">
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return {
            icons:[
                {id:1,c:"iconfont icon-dianbiao"},
                {id:2,c:"iconfont icon-caidan"},
                {id:3,c:"iconfont icon-che_o"},
                {id:4,c:"iconfont icon-jisuanqi"}
                ],
            changeActive:0,
            shoucang:{shoucang:false},
            cidx:0,
            carColors:[],
            carPLs:[],
            PLidx:0,
            eid:this.$route.query.eid,//参数1 eid
            cardesc:[],
            carName:"",//车名
            carLgImg:[],
            carlgurl:"",//参数2 carimg
            xid:0,
            xarxh:[],
            xidx:0,
            carPrice:0,
            hide:{opacity:0,bottom:"-80px"},
            colorblock:"",
            colorn:"",//参数6 颜色
            plcontent:"",//参数3 排量
            pitchOn:"",//参数4 型号
            carns:'',//参数5 内饰
            carpz:[],
            oshow:{width:"50%"},
            nshow:{width:"0"},
            gtrim:[],
            a:this.$store.getters.cardesc,
            ok:0,
            uname:"",
            code:0,
        }
    },
    props:["id"],
    methods:{
        cutBtn(i){
            this.changeActive=i;
            if(i<3){
                this.oshow.width="50%";
                this.nshow.width="0";                
            }else if(i=3){
                this.oshow.width="0";
                this.nshow.width="50%";
            }
        },
        scBtn(){
            if(this.shoucang.shoucang==false){
                this.shoucang.shoucang=true;     
  
            }else if(this.shoucang.shoucang==true){
                this.shoucang.shoucang=false;

            }
        },
        imgShow(i){
           
        },
        //获取底部配置图片
        getcarPz(){
            // this.$http.get("cardesc/carpz?eid="+this.eid).then(res=>{
            //     this.carpz=res.body;
            // })
            this.axios.get("cardesc/carpz",{
                params:{
                    eid:this.eid
                }
            }).then((res)=>{
                this.carpz=res.data
            })  
            // this.colorn=this.carLgImg[0].color       
        },
        getcardesc(){//获取car_extend表中的数据
            this.eid=this.$route.query.eid;
            document.body.scrollTop=0
            document.documentElement.scrollTop=0
            // this.$http.get("cardesc/cardescYM?eid="+this.eid).then(res=>{
            //     this.cardesc=res.body;
            //     this.carName=res.body[0].carName;
                
            // })
            this.axios.get("cardesc/cardescYM",{
                params:{
                    eid:this.eid
                }
                }).then(res=>{
                    this.cardesc=res.data;
                    console.log(res.data[0])
                    this.carName=res.data[0].carName;
                })
        },
        getCarLgImg(){//获取车大图
            // this.$http.get("cardesc/getcarcolor?eid="+this.eid).then(res=>{
            //     this.carLgImg=res.body;
            //     this.carlgurl=res.body[0].colorcar_url;
            //     this.colorblock=this.carLgImg[0].colorblock_url;

            // })
            this.axios.get("cardesc/getcarcolor",{
                params:{
                    eid:this.eid
                }
            }).then(res=>{
                this.carLgImg=res.data;
                this.carlgurl=res.data[0].colorcar_url;
                this.colorblock=this.carLgImg[0].colorblock_url; 
                this.getcarcolor(0)                  
                })
        },
        getcarcolor(i){//在点击时显示大图
            console.log(i)
            if(i==undefined){
                i=0
            }
            this.cidx=i;
            this.carlgurl=this.carLgImg[i].colorcar_url;
            this.colorblock=this.carLgImg[i].colorblock_url;
            this.colorn=this.carLgImg[i].color;
            console.log(this.colorn)
        },
        getcarpl(i){//获取车排量
            console.log(i)
            if(i!==undefined){
                this.PLidx=i;                 
            }else{
                this.PLidx=0;
            }
            // this.$http.get("cardesc/carpl?eid="+this.eid).then(res=>{
            //     this.carPLs=res.body;
            //     console.log(res.body)
            //     this.xid=res.body[this.PLidx].xid;
            //     console.log(this.xid)
            //     this.plcontent=this.carPLs[this.PLidx].car_pl;
            //     this.getcarxh();   
            //     this.gtrim=res.body[this.PLidx];            
            // })
            this.axios.get("cardesc/carpl",{
                params:{
                    eid:this.eid
                }
            }).then(res=>{
                this.carPLs=res.data;
                console.log(res.data)
                this.xid=res.data[this.PLidx].xid;
                console.log(this.xid)
                this.plcontent=this.carPLs[this.PLidx].car_pl;
                this.getcarxh();   
                this.gtrim=res.data[this.PLidx];        
                this.carns=this.gtrim.car_NS;              
                })
        },
        getcarxh(){//获取车型号
            // this.$http.get("cardesc/carxh?xid="+this.xid).then(res=>{
            //     this.carxh=res.body;
            //     this.showXH()
            // })
            this.axios.get("cardesc/carxh",{
                params:{
                    xid:this.xid
                }
            }).then(res=>{
                this.carxh=res.data;
                this.showXH()
                })
        },
        showXH(i){//获取车型号.价格
            if(i==undefined){
                this.xidx=0;
            }else{
                this.xidx=i;
            }
            this.carPrice=this.carxh[this.xidx].sPrice;
            console.log(this.carPrice)
            this.pitchOn=this.carxh[this.xidx].car_xh;
            // this.carns=this.carxh[this.xidx].car_NS
        },
        handleScroll () {//控制导航栏上下移动
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(scrollTop > 500){
                this.hide.opacity=1;
                this.hide.bottom="0px"
            }else{
                this.hide.opacity=0;
                this.hide.bottom="-80px"
            } 
        },    
        next(){
                if(this.changeActive<2){
                    this.changeActive++;  
                    this.oshow.width="50%";
                    this.nshow.width="0";
                }else if(this.changeActive=2){
                    this.changeActive=3
                    this.oshow.width="0";
                    this.nshow.width="50%";
                }
            },
        top(){
                document.documentElement.scrollTop=0;
        },
        buy(){
            this.ok=this.$store.getters.status
            if(this.ok==1){
                this.$router.push("/buy")
                this.$store.commit("getcarLgurl",this.carlgurl) 
                this.$store.commit("getcolorn",this.colorn) 
                this.$store.commit("getplcontent",this.plcontent) 
                this.$store.commit("getpitchOn",this.pitchOn) 
                this.$store.commit("getcarns",this.carns)             
                this.$store.commit("getcarname",this.carName)
                this.$store.commit("getoeid",this.eid)              
            }else{
                this.$message({message:"请先登陆",type:"error"})
            }

        },
    },
    computed:{
        update(){//当eid变化是重新获取
            return this.$store.getters.cardesc;
        },
    },
    watch:{//监听eid的变化
        update(){
        this.getcardesc();
        this.getCarLgImg();
        this.getcarpl();
        this.getcarPz();
        this.cutBtn(0);
        console.log(this.$store.getters.cardesc)
        },
    },
    created(){
        
    },
    mounted(){
        this.getcardesc();
        this.getCarLgImg();
        this.getcarpl();
        this.getcarPz();
        this.cutBtn(0);
        window.addEventListener("scroll",this.handleScroll);//监听滚动事件
        console.log(this.eid)
    },

}
</script>
<style scoped>
    @import "../../css/geely-carDetails.css"
</style>
