<template>
<div class='icons'>
    <swiper>
        <swiper-slide v-for="(page, index) in pages" :key="index">
            <div class='icon' v-for="item in page" :key="item.id">
                <div class='icon-img'>
                    <img class='icon-img-content' :src="item.imgUrl" alt="">
                    <p class='icon-desc'>{{item.desc}}</p>
                </div>  
            </div>
        </swiper-slide>
    </swiper>  
</div>
</template>
<script>
export default {
    name:'HomeIcons',
    props:{
        list:Array
    },
    data() {
        return {
            // iconsList:[
            //     {
            //         id:'01',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/group.png',
            //         desc:'特惠酒店'
            //     },
            //     {
            //         id:'02',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/bargainflight.png',
            //         desc:'低价机票 '
            //     },
            //     {
            //         id:'03',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/inn.png',
            //         desc:'客栈 '
            //     },
            //     {
            //         id:'04',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/haiwai.png',
            //         desc:'海外酒店 '
            //     },
            //     {
            //         id:'05',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/bus.png',
            //         desc:'汽车票船票 '
            //     },
            //     {
            //         id:'06',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/tuan.png',
            //         desc:'旅游团购 '
            //     },
            //     {
            //         id:'07',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/freeTravel.png',
            //         desc:'自由行 '
            //     },
            //     {
            //         id:'08',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/car.png',
            //         desc:'专车自驾 '
            //     },
            //     {
            //         id:'09',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/aroundtravel.png',
            //         desc:'周边短途 '
            //     },
            //     {
            //         id:'10',
            //         imgUrl:'//s.qunarzz.com/homenode/images/touchheader/jr.png',
            //         desc:'金融理财 '
            //     }
            // ]
        }
    },
    computed: {
        pages (){
            const pages = [];
            this.list.forEach((item,index) => {
                const page = Math.floor(index / 8)
                if(!pages[page]){
                    pages[page] = [];
                }
                pages[page].push(item);
            })
            return pages
        }
    },
    
}
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height: 0
    padding-bottom: 50%
  .icons
    margin-top: .1rem
    .icon
      position: relative
      overflow: hidden
      float: left
      width: 25%
      height: 0
      padding-bottom: 25%
      .icon-img
        position: absolute
        top: .3rem
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        padding: .1rem
        .icon-img-content
          display: block
          margin: 0 auto
          height: 100%
      .icon-desc
        position: absolute
        top:1.2rem
        left: 0
        right: 0
        bottom: 0
        height: .44rem
        line-height: .44rem
        text-align: center
        color: $darkTextColor
        ellipsis()
</style>
