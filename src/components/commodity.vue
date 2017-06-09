<template>
<div style="margin-top: 46px;margin-bottom: 64px">
  <group-title>商品</group-title>
  <grid :rows="2">
    <grid-item class="gridim" link="/"  v-for="i in 29" :key="i">
      <div style="margin-top: 0px;">
        <masker style="border-radius: 2px;" :opacity="0">
          <div class="m-img" style="background-image:url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)"></div>
          <div slot="content" class="m-title">
            VUX
            <!--<br/>-->
            <!--<span class="m-time">2016-03-18</span>-->
          </div>
        </masker>
      </div>
    </grid-item>
  </grid>
</div>
</template>
<script>
  import { Grid, GridItem, GroupTitle,Masker } from 'vux'

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Masker
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>
<style scoped>
  .gridim{
    padding: 35px 10px!important;
  }
  .m-img {
    margin-top: -23px;
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
    height: 180px;
  }

  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    color: #000000;
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 140px;
  }

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }
</style>
