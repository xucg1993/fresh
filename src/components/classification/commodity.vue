<template>
  <div>
    <span class="m-time">{{ fo }}</span>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        fo : ''
        }
    },
    created (){
      var that = this;
      let userInfo = this.$route.query;
      that.fo = userInfo.page
      console.log(userInfo.page)
    }
  }
</script>
<style scoped>
</style>
