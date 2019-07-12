<template>
    <div class='header-swiper'>
        <swiper :options="swiperOption" v-if="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item in list" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </swiper-slide>

            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    name:'HomeSwiper',
    props:{
        list:Array
    },
    data() {
        return {
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
    computed: {
        showSwiper(){
            return this.list.length
        }
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