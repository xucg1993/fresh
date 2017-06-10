<template>
  <!--<div>-->
    <tabbar class="footer">
      <tabbar-item selected link="/">
        <img slot="icon" src="../../assets/xiaocai.png">
        <!--<span slot="label">Wechat</span>-->
      </tabbar-item>
      <tabbar-item show-dot link="/cart">
        <img slot="icon" src="../../assets/car.png">
        <!--<span slot="label">订单</span>-->
      </tabbar-item>
      <!--<tabbar-item show-dot link="/register">-->
        <!--<img slot="icon" src="../assets/dingdan.png">-->
        <!--&lt;!&ndash;<span slot="label">订单</span>&ndash;&gt;-->
      <!--</tabbar-item>-->
      <tabbar-item  link="/my"><!--badge="99+"-->
        <img slot="icon" src="../../assets/my.png">
        <!--<span slot="label">News</span>-->
      </tabbar-item>
    </tabbar>
  <!--</div>-->
</template>
<style scoped>
  .footer{
    height:50px;
    background-color: rgb(235, 233, 233) !important;
    position: fixed!important;
    bottom: 0!important;
    padding: 14px 0 0;
  }
</style>
<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>
