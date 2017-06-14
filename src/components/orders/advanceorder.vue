<template>
    <div style="margin-top: 46px;margin-bottom: 64px">
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

      <div class="weui-cell"><div class="weui-cell__hd"></div>
        <div class="vux-cell-bd vux-cell-primary">
          <p><label class="vux-label">实付款</label> </p>
          <span class="vux-label-desc"></span></div>
        <div class="weui-cell__ft"> ￥{{total}}</div>
      </div>
    </div>
</template>



<script>
  import { CellFormPreview, Group, Cell } from 'vux'
  export default {
    components: {
      CellFormPreview,
      Group,
      Cell
    },
    data () {
      return {
        cartlist:[]
      }
    },
    created(){
        if (sessionStorage.cartList != null ) {
          this.cartlist = JSON.parse(sessionStorage.cartList);
        }
      console.log(this.cartlist)
    },
    methods:{
     del:function () {
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
