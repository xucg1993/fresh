<template>
  <div style="margin-top: 60px">
  <group title="购物车">

    <x-number title="黄瓜" v-model="roundValue" button-style="round" :min="0" :max="100"></x-number>
    <x-number title="西蓝花" v-model="roundValue1" button-style="round" :min="0" :max="100"></x-number>
    <x-number title="白菜" v-model="roundValue2" button-style="round" :min="0" :max="100"></x-number>
    <x-number title="西瓜" v-model="roundValue3" button-style="round" :min="0" :max="100"></x-number>
  </group>
  </div>
</template>

<script>
  import { Group, XNumber, XSwitch } from 'vux'

  export default {
    components: {
      XNumber,
      Group,
      XSwitch
    },
    data () {
      return {
        roundValue: 0,
        roundValue1: 0,
        roundValue2: 0,
        roundValue3: 0,
      }
    },
    methods: {
      change (val) {
        console.log('change', val)
      }
    }
  }
</script>
