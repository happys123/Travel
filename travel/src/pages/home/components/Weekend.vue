<template>
  <div>
    <div class="title">周末去哪</div>
      <ul>
        <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
          <div class="item-img-wrapper">
            <img class="item-img" :src="item.imgUrl" />
          </div>
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/p/tts3/1808/98/5a0c479260258802.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/p/tts3/1808/98/5a0c479260258802.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/p/tts3/1808/98/5a0c479260258802.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 26.28%
    .item-img
      width: 100%
  .item-info
    padding: .1rem
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()
</style>
