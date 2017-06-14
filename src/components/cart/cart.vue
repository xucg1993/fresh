<template>
  <div style="margin-top: 46px;margin-bottom: 64px">
    <!--<group title="购物车">-->
      <!--<x-table class="tab" :cell-bordered="false" style="background-color:#fff;">-->
        <!--<thead v-if="cartlist.length > 0">-->
        <!--<tr>-->
          <!--<th>名称</th>-->
          <!--<th>价格</th>-->
          <!--<th style="width: 44%">数量</th>-->
          <!--<th>操作</th>-->
        <!--</tr>-->
        <!--</thead>-->
        <!--<tbody>-->
        <!--<tr v-if="cartlist.length <= 0">-->
          <!--<td colspan="4" height="400px"><span class="kong">空空如也，快去选购吧</span></td>-->
        <!--</tr>-->
        <!--<tr v-for="cart in cartlist">-->
          <!--<td class="cc">{{cart.goodsname}}111111</td>-->
          <!--<td>{{(cart.unitprice * cart.number).toFixed(2)}}</td>-->
          <!--<td>-->
            <!--<x-number v-model="cart.number" button-style="round" :step="1" :min="1" :max="100" fillable-->
                      <!--@on-change="editCar(cart.goodsid,cart.unitprice,cart.number)"></x-number>-->
          <!--</td>-->
          <!--<td><span @click="deleteGoods(cart.goodsid)">删除</span></td>-->
        <!--</tr>-->
        <!--</tbody>-->
      <!--</x-table>-->
    <!--</group>-->
<div v-for="cart in cartlist" >
    <div class="weui-media-box weui-media-box_appmsg">
      <div style="width: 100px;height: 100px" class="weui-media-box__hd">
        <img :link="{path: '/commodity?goodsid='+cart.goodsid}" :src="cart.goodsphoto" alt="" class="weui-media-box__thumb">
      </div>
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title">{{cart.goodsname}}</h4>
        <p class="weui-media-box__desc">￥{{cart.unitprice}}</p>
      </div>
      <div class="weui-media-box__desc">
      <x-number v-model="cart.number" button-style="round" :step="1" :min="1" :max="100" fillable
                @on-change="editCar(cart.goodsid,cart.unitprice,cart.number)"></x-number>
      </div>
    </div>
  <flexbox>
    <flexbox-item></flexbox-item>
    <flexbox-item class="flex-demo"><span @click="deleteGoods(cart.goodsid)">删除</span></flexbox-item>
  </flexbox>

</div>
    <divider>总价</divider>
    <flexbox orient="vertical">
      <flexbox-item><div class="flex-demo">￥{{ total }}</div></flexbox-item>
    </flexbox>
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
    TransferDomDirective as TransferDom,
    Panel,
    Divider
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
      XTable, Box, Flexbox, FlexboxItem, XButton, Confirm, Panel,Divider
    },
    data () {
      return {
        cartlist: [],
      }
    },
    created(){
          var that = this;
          this.$http.post(getCartListURL).then(function (res) {
            that.cartlist = res.data.data;
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
      editCar: function (foodid, unitprice, number) {
        var that = this;
        this.$http.post(editCartURL + '?goodsid=' + foodid + '&number=' + number + '&totalprice=' + (unitprice * number).toFixed(2)).then(function (res) {
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
                that.$http.post(getCartListURL).then(function (res) {
                  that.cartlist = res.data.data;
                  console.log(res.data.data);
                })
//                window.location.reload(1000);

              }
            })
          }
        })
      }
    },
    computed: {
      total: function () {
        var total = 0;
        this.cartlist.forEach(function (good) {
          total += good.unitprice * good.number;
        })
        return total;
      }
    }
  }
</script>
<style lang="less">
  .kong {
    color: #a9a8a6;
    font-size: 12px;
  }

  @import '~vux/src/styles/1px.less';

  .flex-demo {
    text-align: center;
    margin-left: 10px;
    color: #e51d1d;
    /*background-color: #20b907;*/
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>
