import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  msg:''
}
const actions = {
  saveName({commit},msg){
    commit('saveMsg',msg)
  }
}
const mutations = {
  saveMsg(state,msg){
    state.msg = msg;
  }
}
const getter = {
  showState(state){
    console.log(state.msg)
  }
}
export default new Vuex.Store({
  state,
  getter,
  mutations,
  actions
})
