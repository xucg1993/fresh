<template>
<div class="commodity" style="margin-top: 46px;margin-bottom: 64px">
  <group-title>{{ food }}</group-title>
  <grid :rows="2">
    <grid-item class="gridim" :link="{path: '/commodity?page='+food.foodid}"  v-for="food in foodLists" v-bind:id="food.foodid">
      <div style="margin-top: 0px;">
        <masker style="border-radius: 2px;" :opacity="0">
          <div class="m-img" v-bind:style="{ backgroundImage: 'url(' + food.foodpath + ')'}"></div>
          <div slot="content" class="m-title">
            {{ food.foodname }}
            <span class="m-time">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;￥{{ food.cleanfoodprice }}/斤</span>
          </div>
        </masker>
      </div>
    </grid-item>
  </grid>
</div>
</template>
<script>
  import { Grid, GridItem, GroupTitle,Masker } from 'vux'
  import Vue from 'vue'
  var getFoodListURL = 'http://192.168.199.117:8081/food/getFoodList.action';
  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle,
      Masker
    },
    data(){
      return{
        food:'蔬菜',
        foodLists:[]
        }
    },
    created(){
      var that = this;
      this.$http.post(getFoodListURL).then(function (res) {
        that.foodLists = res.data.data;
        console.log(res);
      })
        .catch(function (err) {
          console.log(err);
        })
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
    /*border-top: 1px solid #f0f0f0;*/
    display: inline-block;
    margin-top: 5px;
  }
</style>
