<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            <input class="search-input" type="text" placeholder="输入城市/景点/游玩主题" />
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe615;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
      city: String
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    /*在样式内引用样式import前需要加@符号*/
    /*'~styles/varibles.styl'等同于'../../../assets/styles/varibles.styl'*/
    .header
        display: flex
        line-height: $headerHeight
        background: $bgColor
        color: #fff
        .header-left
            width: .64rem
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #fff
            border-radius: .1rem
            color #ccc
            .search-input
                margin-bottom: .08rem
                width: 90%
                height: .6rem
                line-height: .6rem
                color #666
        .header-right
            width: 1.24rem
            text-align: center
            color: #fff
            .arrow-icon
                margin-left: -.04rem
                font-size: .24rem
</style>
