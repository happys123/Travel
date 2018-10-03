<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="" />
      <div class="banner-info">
        <p class="banner-tittle">大连</p>
        <p class="banner-number">
          <span class="iconfont banner-icon">&#xe796;</span>
          39
        </p>
      </div>
    </div>
    <common-gallary 
    :imgs="imgs" 
    v-show="showGallary"
    @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['https://y.gtimg.cn/mediastyle/yqq/img/bg_profile.jpg?max_age=2592000&v=3f6c7d8d08cdab52c2b134f5792fe738', 
          'https://y.gtimg.cn/mediastyle/yqq/img/bg_profile.jpg?max_age=2592000&v=3f6c7d8d08cdab52c2b134f5792fe738']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>