<template>
  <div id="app">
    <keep-alive>      <!-- 标签用于缓存加载的数据，如再有相同请求则不发送请求直接显示缓存数据 -->
      <router-view/>  <!-- 显示的是当前路由地址所对应的内容 -->
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
