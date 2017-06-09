<template>
  <div class="login">
    <group label-width="4.5em" label-margin-right="2em" label-align="right">

      <div style="margin: 10px;overflow: hidden;" v-for="item in list">
        <masker style="border-radius: 2px;">
          <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="m-title">
            {{item.title}}
            <br/>
            <span class="m-time">xucg</span>
          </div>
        </masker>
      </div>
      <box gap="10px 10px">
      <x-input title="手机号" v-model="value1" placeholder="请输入手机号" ></x-input>
      <x-input title="密&emsp;码" v-model="value4" type="password" placeholder="请输入密码" ></x-input>
      <flexbox>
        <flexbox-item>
          <x-button @click.native="showLoading" type="primary">登录</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button @click.native="goRegister" type="default">注册</x-button>
        </flexbox-item>
      </flexbox>
      </box>
    </group>
  </div>
</template>
<i18n>
loading:
  en: loading
  zh-CN: 加载中
</i18n>

<script>
  import {
    Group,
    Cell,
    XInput,
    Selector,
    XButton,
    Flexbox,
    Box,
    FlexboxItem,
    Divider,
    Masker,
    TransferDomDirective as TransferDom,
    Loading,
    XSwitch
  } from 'vux'

  export default {
    directives: {
      TransferDom
    },
    components: {
      Group,
      Cell,
      XInput,
      Selector,
      XButton,
      Flexbox,
      Box,
      FlexboxItem,
      Divider,
      Masker,
      Loading,
      XSwitch
    },
    data () {
      return {
        value1: '张三',
        value4: '8888888888',
        list: [{
          title: '生鲜果蔬',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1496772352259&di=70ef111df0fb3515d6a405b3a3318624&imgtype=0&src=http%3A%2F%2Fwww.xinhuanet.com%2Ffood%2Ftitlepic%2F111781%2F1117816654_1453164757064_title0h.jpg'
        }]
      }
    },
    methods: {
      showLoading () {
        this.$vux.loading.show({
          text: '正在登录...'
        })
        setTimeout(() => {
          this.$vux.loading.hide()
          this.$router.push({ path :'/index' })
        }, 500)
      },
    goRegister () {
        this.$router.push({ path :'/register' })
      }
    }
  }
</script>

<style scoped lang="less">
  .login {
    margin-top: 60px;
  }
  .custom-primary-red {
    border-radius: 99px!important;
    border-color: #CE3C39!important;
    color: #CE3C39!important;
    &:active {
      border-color: rgba(206, 60, 57, 0.6)!important;
      color: rgba(206, 60, 57, 0.6)!important;
      background-color: transparent;
    }
  }
  .weui-label{
    width: 4em !important;
  }

  .m-img {
    padding-bottom: 33%;
    display: block;
    position: relative;
    max-width: 100%;
    background-size: cover;
    background-position: center center;
    cursor: pointer;
    border-radius: 2px;
    height: 100px;
  }

  .m-title {
    color: #fff;
    text-align: center;
    text-shadow: 0 0 2px rgba(0, 0, 0, .5);
    font-weight: 500;
    font-size: 16px;
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
  }

  .m-time {
    font-size: 12px;
    padding-top: 4px;
    border-top: 1px solid #f0f0f0;
    display: inline-block;
    margin-top: 5px;
  }

</style>
