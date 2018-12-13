<template>
    <div class="carsearch">
        <div class="fill"></div>
        <div class="carlist">
            <div>
                <ul>
                    <li v-for="item in carsearchlist" :key="item.eid">
                        <div class="searchD">
                            <div class="carg">
                                <div><img :src="item.pandecturl" alt=""></div>
                                <div class="carname">
                                    <p>{{item.carActivity1}}</p>
                                    <p>{{item.carActivity2}}</p>
                                </div>                                
                            </div>

                            <div class="carbuyBtn">
                                <p>￥{{item.carPrice}}</p>
                                <div class="sbtn" @click="getEid(item.eid)"><span>立即购买</span></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            carname:"",
            carsearchlist:[],
            eid:101,
        }
    },
    methods:{
        getcarname(){
            this.carname=this.$route.params.carname;
            window.sessionStorage;
            console.log(sessionStorage.getItem("carname"))
            console.log(this.carname)
            this.axios.get("storeindex/search",{
                    params:{
                        carname:sessionStorage.getItem("carname")
                    }
                }).then(res=>{
                    console.log(res.data)
                    this.carsearchlist=res.data;
                })
        },
        getEid(id){//获得当前车辆eid并跳转
            this.eid=id;
            this.$router.push("/cardetails?eid="+id)
        },        
    },
    mounted(){
        this.getcarname()
    }
}
</script>
<style scoped>
@import "../../css/geely-search.css"
</style>
