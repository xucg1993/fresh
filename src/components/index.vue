<template>
  <div>
    <div class="index">

      <swiper loop auto :list="demo06_list"></swiper>

      <group-title>分类</group-title>
      <grid>
        <grid-item link="/" >
          <img slot="icon" src="../assets/grid/日用百货.png">
          <span slot="label">{{ '日用' }}</span>
        </grid-item>
        <grid-item :link="{ path: '/classification/food'}">
          <img slot="icon" src="../assets/grid/蔬菜.png">
          <span slot="label">{{ '蔬菜' }}</span>
        </grid-item>
        <grid-item link="/">
          <img slot="icon" src="../assets/grid/蔬菜水果.png">
          <span slot="label">{{ '瓜果' }}</span>
        </grid-item>
        <grid-item link="/" >
          <img slot="icon" src="../assets/grid/生鲜.png">
          <span slot="label">{{ '海鲜' }}</span>
        </grid-item>
        <grid-item :link="{ path: '/'}">
          <img slot="icon" src="../assets/grid/红酒.png">
          <span slot="label">{{ '酒类' }}</span>
        </grid-item>
        <grid-item link="/">
          <img slot="icon" src="../assets/grid/薯条.png">
          <span slot="label">{{ '零食' }}</span>
        </grid-item>
      </grid>

      <divider>精选</divider>
    <div style="margin: 10px;overflow: hidden;" v-for="item in list">
      <masker style="border-radius: 2px;">
        <div class="m-img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="m-title">
          {{item.title}}
          <br/>
          <span class="m-time">2016-03-18</span>
        </div>
      </masker>
    </div>
    <!--<div style="margin: 10px;overflow: hidden;">-->
      <!--<masker style="border-radius: 2px;" color="F9C90C" :opacity="0.8">-->
        <!--<div class="m-img" style="background-image:url(https://cdn.xiaotaojiang.com/uploads/56/4b3601364b86fdfd234ef11d8712ad/_.jpg)"></div>-->
        <!--<div slot="content" class="m-title">-->
          <!--VUX-->
          <!--<br/>-->
          <!--<span class="m-time">2016-03-18</span>-->
        <!--</div>-->
      <!--</masker>-->
    <!--</div>-->
  <!---->
    </div>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group,Masker } from 'vux'
  import { Swiper, GroupTitle, SwiperItem, XButton, Divider } from 'vux'
  import { Grid, GridItem } from 'vux'
  const baseList = [{
    url: 'javascript:',
    img: 'https://static.vux.li/demo/1.jpg',
    title: '送你一朵'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/3.jpg',
    title: '送你一次旅行'
  }]

  const imgList = [
    'http://placeholder.qiniudn.com/800x300/FF3B3B/ffffff',
    'http://placeholder.qiniudn.com/800x300/FFEF7D/ffffff',
    'http://placeholder.qiniudn.com/800x300/8AEEB1/ffffff'
  ]

  const urlList = baseList.map((item, index) => ({
    url: 'http://m.baidu.com',
    img: item.img,
    title: `${item.title}`
  }))

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Masker,
      Swiper, GroupTitle, SwiperItem, XButton, Divider,Grid, GridItem
    },methods: {
//      onItemClick () {
//        console.log('on item click')
//      }
    },
    data () {
      return {
        demo06_list: urlList,
        list: [{
          title: '洗颜新潮流！人气洁面皂排行榜',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497289196243&di=23f991c8a8492180f0ad6348dec5a800&imgtype=0&src=http%3A%2F%2Fimg.mp.itc.cn%2Fupload%2F20161021%2Fc3bd79c81c3048559c66736202c1beb2_th.jpg'
        }, {
          title: '美容用品 & 日用品（上）',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497288915241&di=4c57a589b6ac89dbb4550e5a5b7af37c&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Ffcfaaf51f3deb48f14c464f0fa1f3a292df5786b.jpg'
        }, {
          title: '远离车内毒气，日本车载空气净化器精选',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497288930932&di=c2bfcbca747eb9d6e85f7d4ffef5cdd1&imgtype=0&src=http%3A%2F%2Fpic.qbaobei.com%2Fthumb%2FUploads%2FPicture%2F2016-10-24%2F580dbb9e71c8b_20-13_0_crop.jpg'
        }]
      }
    }
  }
</script>
<style lang="less" scoped>
  .index {
    margin-top: 46px;
    margin-bottom: 64px
    /*margin-bottom: 100px;*/
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

  .grid-center {
    display: block;
    text-align: center;
    color: #666;
  }
</style>
