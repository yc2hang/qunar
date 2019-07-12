<template>
    <div class='header'>
        城市选择
        <router-link to='/'>
            <div><span class='iconfont header-back'>&#xe60e;</span></div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'CityHeader'
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        position:relative
        overflow:hidden
        line-height: $headerHeight
        text-align:center
        color:#fff
        background:$bgColor
        height:$headerHeight
        font-size:.32rem
        .header-back
            position:absolute
            width:.64rem
            top:.0
            left:.08rem
            text-align:center
            font-size:.32rem
            color:#fff
            font-weight: bold
</style>
