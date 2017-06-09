<template>
<div>
  <group-title>rows = 2</group-title>
  <grid :rows="2">
    <grid-item link="/component/cell"  v-for="i in 29" :key="i">
      <img  slot="icon" src="http://pic.58pic.com/58pic/13/85/85/73T58PIC9aj_1024.jpg">
      <span slot="label">日用品</span>
    </grid-item>
  </grid>
</div>
</template>
<script>
  import { Grid, GridItem, GroupTitle } from 'vux'

  export default {
    components: {
      Grid,
      GridItem,
      GroupTitle
    },
    methods: {
      onItemClick () {
        console.log('on item click')
      }
    }
  }
</script>
<style scoped>
  .weui-grid__icon {
    width: 100px;
    height: auto;
    margin: 0 auto;
  }
</style>
