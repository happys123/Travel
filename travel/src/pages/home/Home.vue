<template>  <!-- 模板下面对外暴露的只能有一个元素，所以加div标签加包裹 -->
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper,
    HomeIcons
  }
}
</script>

<style>

</style>
