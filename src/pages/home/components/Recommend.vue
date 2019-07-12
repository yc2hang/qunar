<template>
    <div>
        <div class='recommend-title'>热销推荐</div>
        <ul>
            <li class='item border-bottom' v-for="item in list" :key="item.id">
                 <img :src="item.imgUrl" alt="" class="item-img">
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
    name:'HomeRecommend',
    props:{
        list:Array
    },
    data() {
        return {
            
        }
    },
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .recommend-title
        line-height:.8rem
        background:#eee
        text-indent:.2rem
        margin-top:.2rem
    .item
        display:flex
        overflow:hidden
        height:2.1rem
        .item-img
            width:3rem
            height:1.6rem
            padding:.1rem
        .item-info
            flex:1
            padding:.1rem
            min-width:0
            .item-title
                line-height:.54rem
                font-size:.32rem
                ellipsis()
            .item-desc
                line-height:.4rem
                color:#ccc
                ellipsis()
            .item-button
                background:#ff9300
                padding:0 .1rem
                border-radius:.06rem
                margin-top:.16rem
                color:#fff
                line-height:.44rem

</style>