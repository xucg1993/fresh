// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
// import Login from './components/login'
// import Index from './components/index'
import {LoadingPlugin} from 'vux'
import PageTransition from '@/components/PageTransition'
import { AjaxPlugin } from 'vux'

Vue.use(AjaxPlugin)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(LoadingPlugin)
// const index = Index
const routes = [
  {
    path: '/',
    name: 'PageTransition',
    component: PageTransition,
    children: [
      // {path: '', component: login},
      // {path: '', component: index},
      {path: '', component: function (resolve) { require(['./components/index'], resolve)}},
      {path: '/cart', component: function (resolve) { require(['./components/cart'], resolve)}},
      {path: '/me', component: function (resolve) { require(['./components/me'], resolve)}},
      {path: '/food', component: function (resolve) { require(['./components/food'], resolve)}}
    ]
  }
 ]

const router = new VueRouter({
  routes
})
// const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
