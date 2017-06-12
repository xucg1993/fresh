<template>
  <div style="margin-top: 46px;margin-bottom: 64px">
    <group title="购物车">
      <x-table :cell-bordered="false" style="background-color:#fff;">
        <thead v-if="cartlist.length > 0">
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th style="width: 50%">数量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="cartlist.length <= 0">
          <td colspan="4" height="400px"><span class="kong">空空如也，快去选购吧</span></td>
        </tr>
        <tr v-for="cart in cartlist">
          <td>{{cart.foodname}}</td>
          <td>￥{{(cart.foodprice * cart.weightnumber).toFixed(2)}}</td>
          <td>
            <x-number v-model="cart.weightnumber" button-style="round" :step="1" :min="1" :max="100" fillable
                      @on-change="editCar(cart.goodsid,cart.foodprice,cart.weightnumber)"></x-number>
          </td>
          <td><span @click="deleteGoods(cart.goodsid)">删除</span></td>
        </tr>
        <td colspan="4">总价：￥{{ total }}</td>
        </tbody>
      </x-table>
    </group>
    <box gap="10px 10px">
      <flexbox>
        <flexbox-item>
          <x-button v-if="cartlist.length > 0" type="warn" @click.native="">提交订单</x-button>
        </flexbox-item>
      </flexbox>
    </box>
  </div>
</template>

<script scoped>
  import {
    Group,
    XNumber,
    XSwitch,
    XTable,
    Box,
    Flexbox,
    FlexboxItem,
    XButton,
    Confirm,
    TransferDomDirective as TransferDom
  } from 'vux'
  var getCartListURL = 'http://192.168.199.117:8081/cart/getCartList.action';//购物车列表接口
  var editCartURL = 'http://192.168.199.117:8081/cart/editCartList.action';//修改购物车物品接口
  var deleteGoodsURL = 'http://192.168.199.117:8081/cart/deleteGoods.action';//删除物品接口
  export default {
    directives: {
      TransferDom
    },
    components: {
      XNumber,
      Group,
      XSwitch,
      XTable, Box, Flexbox, FlexboxItem, XButton, Confirm
    },
    data () {
      return {
        cartlist: []
      }
    },
    created(){
      var that = this;
      this.$http.post(getCartListURL).then(function (res) {
        that.cartlist = res.data.data;
        var cartlists = that.cartlist
        console.log(res.data.data);
      })
        .catch(function (err) {
          console.log(err);
        })
    },
    methods: {
      change (val) {
        console.log('change', val)
      },
      editCar: function (foodid, foodprice, weightnumber) {
        var that = this;
        this.$http.post(editCartURL + '?goodsid=' + foodid + '&weightnumber=' + weightnumber + '&price=' + (foodprice * weightnumber).toFixed(2)).then(function (res) {
          if (res.data.errorCode == 0) {
            console.log(res.data.message);
          }
        })
          .catch(function (err) {
            console.log(err);
          })
      },
      deleteGoods: function (foodid) {
        var that = this;
        this.$vux.confirm.show({
          title: '提示',
          content: '确定删除该物品吗？',
          onShow () {
            console.log('开始')
          },
          onHide () {
            console.log('结束')
          },
          onCancel () {
            console.log('取消')
          },
          onConfirm () {
            console.log('确定')
            that.$http.post(deleteGoodsURL + '?goodsid=' + foodid).then(function (res) {
              if (res.data.errorCode == 0) {
                that.$vux.toast.show({
                  text: res.data.message
                })
                window.location.reload(1000);
              }
            })
          }
        })
      }
    },
    computed:{
      total:function () {
        var total = 0;
        this.cartlist.forEach(function (good) {
          total += good.foodprice * good.weightnumber;
        })
        return total;
      }
    }
  }
</script>
<style>
  .kong {
    color: #a9a8a6;
    font-size: 12px;
  }
</style>
