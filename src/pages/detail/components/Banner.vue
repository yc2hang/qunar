<template>
    <div>
        <div>
            <div class="banner" @click='handleBannerClick'>
                <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1602/68/68aa05adb5315f9990.water.jpg_600x330_0dcecae1.jpg"/>
                <div class="banner-info">
                    <div class="banner-tittle">
                    北京海洋馆(AAAA景区)
                    </div>
                    <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe626;</span>
                    39
                    </div>
                </div>
            </div>
        </div>
        <CommonGallary 
            :imgs='imgs' 
            v-show="showGallary"
            @close='handleGallaryClose'
        ></CommonGallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data() {
      return {
          imgs:['http://img1.qunarzz.com/sight/p0/1904/e3/e35b59d03096ee9ba3.img.jpg_350x240_917364f3.jpg','http://img1.qunarzz.com/sight/p0/1801/9e/9e548d6b63dc98c1a3.img.jpg_350x240_a90a3f38.jpg'],
          showGallary:false
      }
  },
  methods: {
      handleBannerClick(){
          this.showGallary=true
      },
      handleGallaryClose(){
          this.showGallary=false
      }
  },
  components:{
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      display: flex
      position: absolute
      left: 0
      right: 0
      bottom: 0
      line-height: .6rem
      color: #fff
      background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-tittle
        flex: 1
        font-size: .32rem
        padding: 0 .2rem
      .banner-number
        height: .32rem
        line-height: .32rem
        margin-top: .14rem
        padding: 0 .4rem
        border-radius: .2rem
        background: rgba(0, 0, 0, .8)
        font-size: .24rem
        .banner-icon
          font-size: .24rem
</style>
