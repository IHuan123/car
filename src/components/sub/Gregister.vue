<template>
    <div class="g-register">
        <div class="fill-spaces"></div>
        <div class="RDtitle">
            <span class="login" @click="loginYM()">登录</span>
            <span class="cut-offRule"></span>
            <span class="reg">注册</span>
        </div>
        <div class="regMold">
            <div class="regBox">
                <div class="phone"><input type="text" placeholder="输入手机号" v-model="phone"></div>
                <div class="verification-code">
                    <input type="text" placeholder="输入验证码" v-model="Icode">
                    <div class="YZtp" @click="yzcode()">
                        <canvas width=140 height=40 id="can"></canvas>
                        <span>刷新验证码</span>
                        </div>
                    </div>
                <div class="Pverification-code">
                    <div class="srYZ"><input type="text" placeholder="输入验证码" disabled></div>
                    <div class="getYZ"><input type="button" value="获取验证码" class="YZbtn" disabled></div>
                </div>
                <div class="pwd"><input type="password" placeholder="请输入密码（6~16位数字或者字母组合）" v-model="upwd"></div>
                <div class="Vpwd"><input type="password" placeholder="请再次输入密码" v-model="Iupwd"></div>
                <div class="agreement"><label><input type="checkbox" :checked="checked" v-model="checked"><span>同意注册协议</span></label></div>
                <div class="submit"><button class="enter" @click="register()">注册</button></div>            
            </div>   
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            phone:"",
            code:"",
            Icode:"",
            upwd:"",
            Iupwd:"",
            cupwd:"",
            checked:false,
        }
    },
    methods:{
        yzcode(){
            var can=document.getElementById("can");
            var ctx=can.getContext("2d");
            can.style.background=rc(0,255)
            function rn(min,max){
                var n =Math.random()*(max-min)+min
                return n;
            }
            function rc(min,max){
                var r=rn(min,max)
                var g=rn(min,max)
                var b=rn(min,max)
                var rgb=`rgb(${r},${g},${b})`
                return rgb
            }
            // this.$http.get("greg/yzcode").then(res=>{
            //     var str=res.body.str;
            //     this.code=res.body.str;
            //     ctx.clearRect(0,0,140,40)
            //     for(var i=0;i<str.length;i++){
            //         ctx.font="30px sans-serif";
            //         ctx.textBaseline="top";
            //         ctx.fillStyle=rc(30,180)
            //         ctx.fillText(str[i],i*25+10,3)
            //     }
            //     //创建干扰点
            //     for(var n=0;n<20;n++){
            //         ctx.fillStyle=rc(0,255);
            //         ctx.beginPath();
            //         ctx.arc(rn(0,140),rn(0,40),1,0,360*Math.PI/180);
            //         ctx.fill()
            //     }
            //     for(var j=0;j<4;j++){
            //         ctx.beginPath();
            //          ctx.moveTo(rn(0,140),rn(0,40))
            //         ctx.lineTo(rn(0,140),rn(0,40))
            //         ctx.stroke()
            //     }
            // }),
            this.axios.get("greg/yzcode").then(res=>{
                var str=res.data.str;
                this.code=res.data.str;
                ctx.clearRect(0,0,140,40)
                for(var i=0;i<str.length;i++){
                    ctx.font="30px sans-serif";
                    ctx.textBaseline="top";
                    ctx.fillStyle=rc(30,180)
                    ctx.fillText(str[i],i*25+10,3)
                }
                //创建干扰点
                for(var n=0;n<20;n++){
                    ctx.fillStyle=rc(0,255);
                    ctx.beginPath();
                    ctx.arc(rn(0,140),rn(0,40),1,0,360*Math.PI/180);
                    ctx.fill()
                }
                for(var j=0;j<4;j++){
                    ctx.beginPath();
                     ctx.moveTo(rn(0,140),rn(0,40))
                    ctx.lineTo(rn(0,140),rn(0,40))
                    ctx.stroke()
                }                
            })
        },
        loginYM(){
            this.$router.push("/loginYM")
        },
        register(){
            var code=this.code;
            var reg=/^1[3|4|5|8]\d{9}$/;
            var regPwd=/^[\w-_+.!@#$%^&*? ]{6,16}$/
            if(this.phone==""){
                this.$message.error("手机号不能为空")
                return;
            }else{
                if(!reg.test(this.phone)){
                    this.$message.error("手机号格式错误")
                    return;
                }               
            }
            if(this.Icode!=code){
                this.$message.error("验证码错误")
                this.yzcode();
                return;
            }
            if(this.upwd==""){
                this.$message.error("密码不能为空")
                return;
            }else{
                if(!regPwd.test(this.upwd)){
                    this.$message.error("密码格式错误")
                    return;
                }                
            }
            if(this.Iupwd!=this.upwd){
                this.$message.error("密码必须相同")
                return;
            }
            if(this.checked==false){
                this.message({message:"请先阅读注册协议！",type:"warning"})
                return;
            }
            var url="http://localhost:3000/greg/register"
            // this.$http.post(url,{phone:this.phone,upwd:this.upwd}).then(res=>{
            //     alert(res.body.msg)
            // })
            this.axios.post(url,({
                phone:this.phone,
                upwd:this.upwd
            })).then(res=>{
                alert(res.data.msg)
                this.message({message:res.data.msg,type:"success"})
            })
            // this.$router.push("/loginYM")
        }
    },
    mounted(){
     this.yzcode();
    }
}
</script>
<style>
    @import "../../css/geely-register.css"
</style>
