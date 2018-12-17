<template>
    <div class="login">
        <div class="fillH"></div>
        <div class="RDtitle">
            <span class="loginText">登录</span>
            <span class="cut-offRule"></span>
            <span class="regText" @click="regYM()">注册</span>
        </div>
        <div class="loginMold">
            <div class="loginBox">
                <div class="phone"><input type="text" placeholder="输入手机号/昵称" v-model="uname"></div>
                <div class="pwd"><input type="password" placeholder="请输入密码（至少6位数字和字母组合）" v-model="upwd"></div>
                <div class="submit"><button class="enter" @click="login()" >登录</button></div>  
                <div class="loginWay">
                    <div><span>使用验证码登录</span></div>
                    <div><a href="#">忘记密码?</a></div>    
                </div>
                <div class="liner">
                    <span class="line"></span>
                    <div class="lineText"><span>使用第三方登录</span></div>
                    <span class="line"></span>  
                </div>
                <div class="icon">
                    <div><img src="../../assets/img/loginANDreg/sina.png"></div>
                    <div><img src="../../assets/img/loginANDreg/weixin.png"></div>
                </div>          
            </div>   
        </div>
 
    </div>
    
</template>
<script>
// import messageBox from "../element/MessageBox.vue" 
export default {
    data(){
        return {
            uname:"",
            upwd:"",
            msg:"",
            ok:0,
            list:[],
        }
    },
    methods:{
        regYM(){
            this.$router.push("/registerYM")
        },
        login(){
            var uname=this.uname;
            var upwd=this.upwd;
            console.log(uname,upwd)
            if(uname.trim()!="" && upwd.trim()!=""){
                var url="glogin/login"
                this.axios.post(url,({
                    uname:uname,
                    upwd:upwd,
                })).then(res=>{
                    this.msg=res.data;
                    console.log(res.data.uname)
                    window.sessionStorage;
                    sessionStorage.setItem("uname",res.data.uname)
                    if(res.data.code==1){
                        this.$message({
                            message:this.msg.msg,
                            type:"success"
                            })                        
                    }else if(res.data.code==-1){
                        this.$message.error({message:this.msg.msg})                        
                    }

                    if(res.data.code==1){
                        this.$router.push("/")
                    }else if(res.data.code==-1){
                        return
                    }
                    this.$router.push("/")
                    this.axios.get("glogin/islogin").then(res=>{
                        this.list=res.data;
                        this.ok=res.data.ok;
                        this.$store.commit("getok",this.ok)
                        this.$store.commit("getname",res.data.uname)
                        console.log(res.data,this.ok)                        
                    })
                })               
            }else{
                this.$message.error({message:"账号或密码不能为空"})
                return
            }
        },
    },
}
</script>
<style scoped>
    @import "../../css/geely-login.css";
</style>
