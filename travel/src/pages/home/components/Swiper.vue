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
