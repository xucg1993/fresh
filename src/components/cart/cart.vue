<template>
  <div style="margin-top: 60px">
    <group title="购物车">
      <x-table :cell-bordered="false" style="background-color:#fff;">
        <thead>
        <tr>
          <th>名称</th>
          <th>价格</th>
          <th style="width: 50%">数量/重量</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr  v-for="cart in cartlist" >
          <td>{{cart.foodname}}</td>
          <td>${{ (cart.foodprice * cart.weightnumber).toFixed(2) }}</td>
          <td>
            <x-number v-model="cart.weightnumber" button-style="round" step="0.1" :min="0.5" :max="100"  @on-change="addCar(cart.goodsid,cart.foodprice,cart.weightnumber)"></x-number>
          </td>
          <td>删除</td>
        </tr>
        </tbody>
      </x-table>
    </group>
  </div>
</template>

<script scoped>
  import {Group, XNumber, XSwitch, XTable} from 'vux'
  var getCartListURL = 'http://192.168.199.117:8081/cart/getCartList.action';
  var insertCartURL = 'http://192.168.199.117:8081/cart/editCartList.action';
  export default {
    components: {
      XNumber,
      Group,
      XSwitch,
      XTable
    },
    data () {
      return {
        roundValue: 1,
        cartlist : []
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
      addCar: function (foodid,foodprice,weightnumber) {
//        var foodid = this.$route.query.foodid;
//        var roundValue = this.roundValue;
//        var cleanfoodprice = this.cleanfoodprice;
        var that = this;
        this.$http.post(insertCartURL + '?goodsid=' + foodid + '&weightnumber=' + weightnumber + '&price=' + (foodprice * weightnumber).toFixed(2)).then(function (res) {
          if (res.data.errorCode == 0){
//            that.$vux.toast.show({
              console.log(res.data.message);
//              text: res.data.message
//            })
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
