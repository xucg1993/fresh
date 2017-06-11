<template>
  <div style="margin-top: 60px">
  <group title="购物车">
    <x-table :cell-bordered="false" style="background-color:#fff;">
      <thead>
      <tr>
        <th>名称</th>
        <th>价格</th>
        <th style="width: 50%">数量/重量</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>你猜</td>
        <td>$jiaqian</td>
        <td>
          <x-number v-model="roundValue" button-style="round" step="0.1" :min="0.5" :max="100"></x-number>
        </td>
      </tr>
      </tbody>
    </x-table>
  </group>
  </div>
</template>

<script scoped>
  import { Group, XNumber, XSwitch,XTable } from 'vux'

  export default {
    components: {
      XNumber,
      Group,
      XSwitch,
      XTable
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
