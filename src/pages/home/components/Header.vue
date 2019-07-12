<template>
    <div class='header'>
        <div class='header-left'>
            <span class='iconfont'>&#xe60e;</span>
        </div>
        <div class='header-input'>
            <span class='iconfont'>&#xe600;</span>
            输入城市/景点/游玩主题
        </div>
        <div class='header-right'>
            {{this.city}}
            <span class='iconfont'>&#xe6aa;</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeHeader',
    props:{
        city:String
    }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
    width: 100%
    line-height:.88rem
    background: $bgColor
    color: #fff
    font-size: .36rem
    display: flex
    .header-left
        width: .4rem
        padding: 0 .2rem
        text-align: center
        float: left
        font-weight: bold
    .header-input
        flex: 1
        background: #fff
        height: .6rem
        margin: .14rem 0
        border-radius: .1rem
        color: #e4e7ea
        line-height: .6rem
        font-size: .28rem
        padding-left: .2rem
        padding-top: .02rem
    .header-right
        width: 1.24rem
        padding: 0 .2rem
        float: right  
        text-align: center    
</style>