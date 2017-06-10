<template>
  <div>
 <span></span>
  </div>
</template>
<script>
  export default{
    created (){
        let userInfo = this.$route.query;
        console.log(userInfo)
    }
  }
</script>
<style scoped>
</style>
