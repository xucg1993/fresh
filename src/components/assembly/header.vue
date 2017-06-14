<template>
    <!--<br>-->
    <x-header class="heade">商城</x-header>
    <!--<br>-->
</template>
<style>
  .heade{
    /*background-color: rgba(235, 233, 233, 0.95) !important;*/
    /*height:50px;*/
    /*top: 0;*/
    width: 100%;
    position: fixed!important;
  }
</style>
<script scoped>
  import { XHeader, Actionsheet, TransferDom } from 'vux'


  export default {
    directives: {
      TransferDom
    },
    components: {
      XHeader,
      Actionsheet
    },
//    data () {
//      return {
//        menus: {
//          menu1: 'Take Photo',
//          menu2: 'Choose from photos'
//        },
//        showMenus: false
//      }
//    }
  }
</script>
