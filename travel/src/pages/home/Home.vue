<template>  <!-- 模板下面对外暴露的只能有一个元素，所以加div标签加包裹 -->
    <div>
        <home-header></home-header>
    </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader: HomeHeader
  }
}
</script>

<style>

</style>
