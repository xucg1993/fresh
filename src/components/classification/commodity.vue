<template>
  <div>
 <span>123</span>
  </div>
</template>
<script>
  export default{
    mounted() {
      //直接打印不到
      this.setUserInfo();

      //加一定的延时就可以打印出来
      let _this = this;
      setTimeout(function() {
        _this.setUserInfo();
      }, 100)
    },
    methods :{
      setUserInfo: function() {
        let userInfo = this.$route.query;
        console.log('进来')
        console.log(userInfo)
      }
    }
  }
</script>
<style scoped>
</style>
