<template>
  <div style="margin-top: 46px;margin-bottom: 64px">
    <group title="确认订单"></group>
    <divider>收货地址</divider>
    <div class="weui-media-box weui-media-box_appmsg">
      <div class="weui-media-box__bd">
        <h4 class="weui-media-box__title font">徐晨光 &emsp;&emsp;&emsp;&emsp;15082985491</h4>
        <p class="weui-media-box__desc font">地址：北京市海淀区中关村孵化器</p>
      </div>
    </div>
    <divider>商品清单</divider>
    <div class="weui-cells vux-no-group-title">
      <div class="weui-cell vux-cell-form-preview">
        <div class="weui-form-preview__bd">
          <div class="weui-form-preview__item" v-for="cart in cartlist">
            <label class="weui-form-preview__label">{{cart.goodsname}}</label>
            <span class="weui-form-preview__value">{{cart.unitprice * cart.number}}</span>
          </div>
        </div>
      </div>
    </div>
    <divider>收货时间</divider>

    <!--<div class="weui-cell"><div class="weui-cell__hd"></div>-->
    <!--<div class="vux-cell-bd vux-cell-primary">-->
    <!--<p><label class="vux-label">实付款</label> </p>-->
    <!--<span class="vux-label-desc"></span></div>-->
    <!--<div class="weui-cell__ft"> ￥{{total}}</div>-->
    <!--</div>-->
    <flexbox class="adfooter">
      <flexbox-item>
        <div class="flex-demo">实付款:￥{{ total }}</div>
      </flexbox-item>
      <flexbox-item>
        <x-button v-if="cartlist.length > 0" type="warn" @click.native="goAdvanceorder">立即下单</x-button>
        <x-button class="butt" v-if="cartlist.length <= 0" type="warn">立即下单</x-button>
      </flexbox-item>
    </flexbox>
  </div>
</template>


<script>
  import {CellFormPreview, Group, Cell, Flexbox, FlexboxItem, Divider, XButton, PopupRadio, Panel} from 'vux'
  export default {
    components: {
      CellFormPreview,
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      Divider,
      XButton,
      PopupRadio,
      Panel
    },
    data () {
      return {
        cartlist: [],
        options3: ['A', 'B', 'C'],
        option5: 'B'
      }
    },
    created(){
      if (sessionStorage.cartList != null) {
        this.cartlist = JSON.parse(sessionStorage.cartList);
      }
      console.log(this.cartlist)
    },
    methods: {
      del: function () {
        sessionStorage.removeItem("cartList");
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
<style scoped>
  .flex-demo {
    text-align: center;
    margin-left: 10px;
    color: #e51d1d;
    /*background-color: #20b907;*/
    border-radius: 4px;
    background-clip: padding-box;
  }

  .adfooter {
    height: 45px;
    background-color: rgb(235, 233, 233);
    position: fixed;
    bottom: 63px;
  }

  .demo3-slot {
    text-align: center;
    padding: 8px 0;
    color: #888;
  }
  .weui-media-box:before{
    content: normal;
  }
  .font{
    font-size: 16px;
  }
</style>
