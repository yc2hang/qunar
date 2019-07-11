<template>
    <div class='header-swiper'>
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item, index) in swiperList" :key="index">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data() {
        return {
            swiperList:[
                {
                    id:'01',
                    imgUrl:require("@/assets/imgs/swiper1.jpg")
                },
                {
                    id:'02',
                    imgUrl:require("@/assets/imgs/swiper2.jpg")
                },
                {
                    id:'03',
                    imgUrl:require("@/assets/imgs/swiper3.jpg")
                }
            ],
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination'
                },
                loop:true
            }
        }
    },
    methods: {
        
    },
}
</script>
<style lang="stylus" scoped>
    .header-swiper{
        background:#ccc;
        height:0;
        padding-bottom:26.67%;
    }
    .header-swiper img{
        width:100%;
        height:100%;
    }
    .header-swiper >>> .swiper-pagination-bullet-active{
        background:#00bcd4
    }
</style>