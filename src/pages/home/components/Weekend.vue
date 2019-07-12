<template>
    <div>
        <div class='recommend-title'>周末去哪儿</div>
        <ul>
            <li class='item border-bottom' v-for="item in list" :key="item.id">
                <div class='item-img-wrapper'>
                 <img :src="item.imgUrl" alt="" class="item-img">
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
    name:'HomeWeekend',
    props:{
        list:Array
    },
    data() {
        return {
            // recommendList:[
                
            //     {
            //         id:'002',
            //         imgUrl:require('@/assets/imgs/recommend002.jpg'),
            //         title:'浙江出发一日游',
            //         desc:'【去哪儿精选】VIP航空座椅八达岭+十三陵定陵+鸟巢一日游'
            //     },
            //     {
            //         id:'003',
            //         imgUrl:require('@/assets/imgs/recommend003.jpg'),
            //         title:'浙江出发一日游',
            //         desc:'【中高考生专享】北京杜莎夫人蜡像馆中高考生票'
            //     },
            //     {
            //         id:'004',
            //         imgUrl:require('@/assets/imgs/recommend004.jpg'),
            //         title:'浙江出发一日游',
            //         desc:'【中高考生专享】太平洋海底世界考生专享票'
            //     },
            //     {
            //         id:'005',
            //         imgUrl:require('@/assets/imgs/recommend005.jpg'),
            //         title:'浙江出发一日游',
            //         desc:'【去哪儿精选】八达岭长城+颐和园+清华北大+鸟巢水立方一日游'
            //     },
            //     {
            //         id:'006',
            //         imgUrl:require('@/assets/imgs/recommend006.jpg'),
            //         title:'浙江出发一日游',
            //         desc:'【活动票】金海湖成人票'
            //     },
            // ]
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
    .item-img-wrapper
        overflow:hidden
        height:0
        padding-bottom:38%
    .item-img
        width:100%
    
    .item-info
        padding:.1rem
        .item-title
            line-height:.54rem
            font-size:.32rem
            ellipsis()
        .item-desc
            line-height:.4rem
            color:#ccc
            ellipsis()
</style>
