<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">

    <div class="page">
      <header-tab id="show-header"/>
      <!-- <navbar></navbar> -->
      <!-- <div class="photo-img"> -->
      
         <!-- <carousel-fade-in /> -->
         <top-carousel />

         <!-- <div class="sub-title" >
          <top-carousel>
          なにを作りましょう？
        </top-carousel>
         </div> -->
         
      </div>
      <br>
      <div class="center">
        <image-card></image-card>
      </div>
      
      <!-- <br>
      <div>
        <image-pic></image-pic>
      </div>
      <br> -->
     

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
.page {
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

.circles{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.circles li{
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 200, 21, 0.301);
    animation: animate 25s linear infinite;
    bottom: -150px;
    
}

.circles li:nth-child(1){
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}


.circles li:nth-child(2){
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3){
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4){
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5){
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6){
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7){
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8){
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 15s;
    animation-duration: 45s;
}

.circles li:nth-child(9){
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 35s;
}

.circles li:nth-child(10){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(11){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(12){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(13){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(14){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(15){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(16){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(17){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}
.circles li:nth-child(18){
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 11s;
}

@keyframes animate {

    0%{
        transform: translateY(-10px) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100%{
        transform: translateY(-2000px) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }
  }

</style>
