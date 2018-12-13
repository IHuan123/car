import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
      eid:0,
      ok:0,
      uname:"",
      oeid:0,
      carLgurl:'',
      colorn:"",
      plcontent:"",
      pitchOn:"",
      carns:"",
      carname:""
  },//存放数据 车辆的eid

  mutations: {
    geteid(state,c){//参数就是共享的数据
      state.eid=c;
    },
    getok(state,n){
      state.ok=n
    },
    getname(state,uname){
      state.uname=uname
    },
    getcarLgurl(state,url){
      state.carLgurl=url
    },
    getcolorn(state,color){
      state.colorn=color
    },
    getplcontent(state,a){
      state.plcontent=a
    },
    getpitchOn(state,b){
      state.pitchOn=b
    },
    getcarns(state,c){
      state.carns=c
    },
    getcarname(state,n){
      state.carname=n
    },
    getoeid(state,n){
      state.oeid=n;
    }
  },


  getters: {
    cardesc:function(state){
      return state.eid
    },
    status:function(state){
      return state.ok
    },
    uname:function(state){
      return state.uname
    },
    incarLgurl:function(state){
      return state.carLgurl
    },    
    incolorn:function(state){
      return state.colorn
    },
    inplcontent:function(state){
      return state.plcontent
    },
    inpitchOn:function(state){
      return state.pitchOn
    },
    incarns:function(state){
      return state.carns
    },
    incarname:function(state){
      return state.carname
    },
    inoeid:function(state){
      return state.oeid
    }
  }

  
})
