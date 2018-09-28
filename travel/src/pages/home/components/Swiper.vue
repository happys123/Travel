<template>
    <div class="wrapper">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="item of list" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" />
            </van-swipe-item>
            <div class="swiper-pagination"  slot="pagination"></div>
        </van-swipe>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
      list: Array
  },
  data: function() {
      return {
          swiperList: [{
              id: '0001',
              imgUrl: 'https://img1.qunarzz.com/vc/06/34/b1/de6b421a416effd38e1c94973e.jpg'
          },{
              id: '0002',
              imgUrl: 'https://img1.qunarzz.com/vc/f3/ea/ae/095dd61c09f2797ba9147bd03f.jpg'
          }]
      }
  }
}
</script>

<style lang="stylus" scoped>
/*>>>使样式能够不受scoped命令影响，在swiper组件内也起作用*/
.wrapper >>> .van-swipe__indicator--active
    background: #fff
.wrapper
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 30.47%
    background: #eee
    .swiper-img
        width: 100%
</style>
