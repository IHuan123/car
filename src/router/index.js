import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeCarStore from "../components/CarStore/HomeCarStore.vue"
import Gregister from "../components/sub/Gregister.vue"
import Glogin from "../components/sub/Glogin.vue"
import carDetails from "../components/carDetails/carDetails.vue"
import personal from "../components/sub/personal.vue"
import orderCenter from '../components/childComponent/orderCenter.vue'
import reservation from '../components/childComponent/reservation.vue'
import CardVolume from '../components/childComponent/CardVolume.vue'
import confirmAnOrder from '../components/sub/confirmAnOrder.vue'
import carSearch from "../components/CarStore/carsearch.vue"
import checkAnOrder from "../components/sub/checkAnOrder.vue"
import gundone from "../components/undone/gundone.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomeCarStore',
      component: HomeCarStore
    },
    {path:"/buy",name:'confirmAnOrder',component:confirmAnOrder},
    {path:"/registerYM",name:'Gregister',component:Gregister},
    {path:"/loginYM",name:'Glogin',component:Glogin},
    {path:"/cardetails",name:'carDetails',component:carDetails},
    {
      path:"/personal",name:'personal',component:personal,
      children:[
        {path:'/order',name:'orderCenter',component:orderCenter},
        {path:'/reservation',name:'reservation',component:reservation},
        {path:'/volume',name:'CardVolume',component:CardVolume},
      ]
    },
    {name:"/search",path:"/search",component:carSearch},
    {name:"/checkorder",path:"/checkorder",component:checkAnOrder},
    {path:"/not",name:'gundone',component:gundone},
  ]
})
