<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="top-page">
      <header-tab id="show-header"/>
      <top-carousel />
    </div>
    <br>
    <div class="center">
      <image-card />
    </div>
    <div class="center">
      <topic />
    </div>
  </div>
</template>
<script>


// import CarouselFadeIn from './CarouselFadeIn.vue';
import ImageCard from './ImageCard.vue';
import HeaderTab from './HeaderTab.vue';
import TopCarousel from './TopCarousel.vue';
import Topic from './Topic.vue';
// import ImagePic from './ImagePic.vue';



export default {
  components: { ImageCard, HeaderTab, TopCarousel, Topic },     
  data () {
    return {
      isActive: true,
      hasError: false,
      color: ['#5ba19b', '#fceaea', '#f5d9d9', '#fbead1']
    }
  },
  mounted() {
    const fh = document.getElementById('show-header')
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 100) {
        fh.classList.add('is-show')
      } else {
        fh.classList.remove('is-show')
      }
    })
  },
}

</script>

<style>

.top-content {
  position: relative;
  display: flex;
  width: 100vw;
}

.top-page {
  width: 100%;
}

#show-header {
  position: fixed;
  top: -70px;  
  width: 100%;
  text-align: center;
  transition: .5s;
}

#show-header.is-show {
  z-index: 19;
  top: 0;
}

.sub-title {
  width: 100%;
  height: 500px;
  font-family: "Zen Maru Gothic", "Hiragino Kaku Gothic ProN", "ヒラギノ角ゴ ProN W3", ヒラギノ角ゴシック, "Hiragino Sans", メイリオ, Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.center{
  width: 100vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.yokoretsu{
  display: flex;
  justify-content: center;
  margin: 0 -15px;
  width: calc(100% + 30px);
}

.full {
  margin: 0 -15px;
  width: calc(100% + 30px);
}

.photo-img {
  margin: 0 auto;
  width: 100%;
}

</style>
