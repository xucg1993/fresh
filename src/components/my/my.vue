<template>
  <div style="margin-top: 46px;margin-bottom: 64px">
    <blur :blur-amount=3 :url="url">
      <p class="center"><img :src="url"></p>
    </blur>
    <div style="margin-top: 0px">
    <card :header="{title:'我的钱包'}">
      <div slot="content" class="card-demo-flex card-demo-content01">
        <div class="vux-1px-l vux-1px-r">
          <span>1</span>
          <br/>
          待付款
        </div>
        <div class="vux-1px-r">
          <span>3</span>
          <br/>
          待发货
        </div>
        <div class="vux-1px-r">
          <span>1</span>
          <br/>
          待收货
        </div>
        <div>
          <span>88</span>
          <br/>
          全部订单
        </div>
      </div>
    </card></div>
    <group style="margin-top:-22px">
      <cell title="收货地址" value="" is-link></cell>
      <cell title="cell" value="hello" is-link></cell>
      <cell title="cell" value="hello" is-link></cell>
      <cell title="cell" value="hello" is-link></cell>
    </group>
  </div>
</template>
<script>
  import { Flexbox, FlexboxItem, Blur,Divider, Card,Group, Cell, CellBox } from 'vux'

  export default {
    components: {
      Blur,
      Flexbox,
      FlexboxItem,
      Divider,
      Card,
      Group,
      Cell,
      CellBox
    },
    data () {
      return {
        url: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'
      }
    }
  }
</script>

<style scoped>
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }
  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
  }
</style>
<style scoped lang="less">
  @import '~vux/src/styles/1px.less';

  .card-demo-flex {
    display: flex;
  }
  .card-demo-content01 {
    padding: 10px 0;
  }
  .card-padding {
    padding: 15px;
  }
  .card-demo-flex > div {
    flex: 1;
    text-align: center;
    font-size: 12px;
  }
  .card-demo-flex span {
    color: #f74c31;
  }
</style>
