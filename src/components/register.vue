<template>
  <div class="register">
  <box gap="10px 10px">
    <x-input title="手机号" ></x-input>
    <x-input title="密&emsp;码" type="password" ></x-input>
      <flexbox-item>
        <x-button @click.native="goRegister" type="primary">注册</x-button>
      </flexbox-item>
  </box>
  </div>
</template>
<script>
  import {
    Group,
    XInput,
    Datetime,
    XNumber,
    XButton,
    Box,
    FlexboxItem,
    XSwitch
  } from 'vux'
  export default {
    components: {
      Group,
      XInput,
      Datetime,
      XNumber,
      XButton,
      Box,
      FlexboxItem,
      XSwitch
    }
  }
</script>
<style scoped>
  .register {
    margin-top: 60px;
  }
</style>
