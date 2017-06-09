<template>
  <div>
    <router-view></router-view>
    <app-header></app-header>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  import AppFooter from './components/footer'
  import AppHeader from './components/header'
  export default {
    components: {
      Tabbar,
      TabbarItem,
      AppFooter,
      AppHeader
    }
  }
</script>
<style>
  body {
    margin: 0;
  }
</style>
