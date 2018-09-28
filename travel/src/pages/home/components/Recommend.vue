<template>
<div>
  <div class="title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
      <img class="item-img" :src="item.imgUrl" />
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0002',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0003',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0004',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0005',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0006',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0007',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0008',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
          title: '杭州三日游',
          desc: '主城区接>杭州西湖游船—灵隐寺—飞来峰—千岛湖—桐庐瑶琳仙境三日游'
        },{
          id: '0009',
          imgUrl: 'https://imgs.qunarzz.com/p/tts5/1605/ec/ab66ab8c5d6d52f7.jpg_304x201_20551507.jpg',
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
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      height: 1.7rem
      padding: .1rem
    .item-info
      flex: 1
      padding: .1rem
      min-width: 0
      .item-title
        line-height: .54rem
        font-size: .32rem
        ellipsis()
      .item-desc
        line-height: .4rem
        color: #ccc
        ellipsis()
      .item-button
        line-height: .44rem
        margin-top: .16rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
