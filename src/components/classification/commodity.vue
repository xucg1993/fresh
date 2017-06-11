<template>
  <div style="margin-top: 46px;margin-bottom: 64px">
    <x-img :src="foodpath" class="ximg-demo" error-class="ximg-error" :offset="-100"
           container="#vux_view_box_body"></x-img>
    <load-more tip="以上均为实物拍摄" :show-loading="false" background-color="#fbf9fe"></load-more>
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr>
        <th>菜名</th>
        <th>价格</th>
        <th style="width: 50%">重量（/斤）</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>{{foodname}}</td>
        <td>${{ (cleanfoodprice * roundValue).toFixed(2)}}</td>
        <td>
          <x-number v-model="roundValue" button-style="round" step="0.1" :min="0.5" :max="100"></x-number>
        </td>
      </tr>
      </tbody>
    </x-table>
    <box gap="10px 10px">
      <flexbox>
        <flexbox-item>
          <x-button type="warn" @click.native="addCar()">加入购物车</x-button>
        </flexbox-item>
      </flexbox>
    </box>
  </div>
</template>
<script>
  import {XNumber, XImg, XTable, LoadMore, Group, Box, Flexbox, FlexboxItem, XButton, Toast} from 'vux'
  import Vue from 'vue'
  var getFoodByIdURL = 'http://192.168.199.117:8081/food/getFoodByFoodId.action';
  var insertCartURL = 'http://192.168.199.117:8081/cart/insertCart.action';
  export default{
    components: {
      XNumber,
      XImg,
      XTable,
      LoadMore,
      Group,
      Box,
      Flexbox,
      FlexboxItem,
      XButton,
      Toast
    },
    data(){
      return {
        roundValue: 1,
        foodname: '',
        cleanfoodprice: 0,
        foodid: '',
        foodpath: '',
        weight: '',
        stock: ''
      }
    },
    created (){
      var that = this;
      var foodid = this.$route.query.foodid;
      this.$http.post(getFoodByIdURL + '?foodid=' + foodid).then(function (res) {
        that.foodname = res.data.data.foodname;
        that.cleanfoodprice = res.data.data.cleanfoodprice;
        that.foodpath = res.data.data.foodpath;
        console.log(res.data.data.foodpath);
      })
        .catch(function (err) {
          console.log(err);
        })
    },
    methods: {
      addCar: function () {
        var foodid = this.$route.query.foodid;
        var roundValue = this.roundValue;
        var cleanfoodprice = this.cleanfoodprice;
        var that = this;
        this.$http.post(insertCartURL + '?goodsid=' + foodid + '&weightnumber=' + roundValue + '&price=' + (cleanfoodprice * roundValue).toFixed(2)).then(function (res) {
          if (res.data.errorCode == 0){
            that.$vux.toast.show({
              text: res.data.message
            })
          }
          console.log(res.data.errorCode);
          console.log(res.data);
        })
          .catch(function (err) {
            console.log(err);
          })
      }
    }
  }
</script>
<style scoped lang="less">
  .ximg-demo {
    width: 100%;
    height: 350px;
  }

  .ximg-error {
    background-color: yellow;
  }

  .ximg-error:after {
    content: '加载失败';
    color: red;
  }

  .weui-cell {
    padding: 10px 25px;
  }

  .custom-primary-red {
    border-radius: 99px !important;
    border-color: #CE3C39 !important;
    color: #CE3C39 !important;
    &:active {
      border-color: rgba(206, 60, 57, 0.6) !important;
      color: rgba(206, 60, 57, 0.6) !important;
      background-color: transparent;
    }
  }
</style>
