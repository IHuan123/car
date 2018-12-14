import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import HomeCarStore from "../components/CarStore/HomeCarStore.vue"
// import Gregister from "../components/sub/Gregister.vue"
// import Glogin from "../components/sub/Glogin.vue"
// import carDetails from "../components/carDetails/carDetails.vue"
// import personal from "../components/sub/personal.vue"
// import orderCenter from '../components/childComponent/orderCenter.vue'
// import reservation from '../components/childComponent/reservation.vue'
// import CardVolume from '../components/childComponent/CardVolume.vue'
// import confirmAnOrder from '../components/sub/confirmAnOrder.vue'
// import carSearch from "../components/CarStore/carsearch.vue"
// import checkAnOrder from "../components/sub/checkAnOrder.vue"
// import gundone from "../components/undone/gundone.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeCarStore',
      component:resolve=>require(["../components/CarStore/HomeCarStore.vue"],resolve)
    },
    {path:"/buy",name:'confirmAnOrder',component:resolve=>require(['../components/sub/confirmAnOrder.vue'],resolve)},
    {path:"/registerYM",name:'Gregister',component:resolve=>require(["../components/sub/Gregister.vue"],resolve)},
    {path:"/loginYM",name:'Glogin',component:resolve=>require(["../components/sub/Glogin.vue"],resolve)},
    {path:"/cardetails",name:'carDetails',component:resolve=>require(["../components/carDetails/carDetails.vue"],resolve)},
    {
      path:"/personal",name:'personal',component:resolve=>require(["../components/sub/personal.vue"],resolve),
      children:[
        {path:'/order',name:'orderCenter',component:resolve=>require(["../components/childComponent/orderCenter.vue"],resolve)},
        {path:'/reservation',name:'reservation',component:resolve=>require(["../components/childComponent/reservation.vue"],resolve)},
        {path:'/volume',name:'CardVolume',component:resolve=>require(["../components/childComponent/CardVolume.vue"],resolve)},
      ]
    },
    {name:"/search",path:"/search",component:resolve=>require(["../components/CarStore/carsearch.vue"],resolve)},
    {name:"/checkorder",path:"/checkorder",component:resolve=>require(["../components/sub/checkAnOrder.vue"],resolve)},
    {path:"/not",name:'gundone',component:resolve=>require(["../components/undone/gundone.vue"],resolve)},
  ]
})
