<template>
  <div class="top-carousel">
    <div class="circle1" />
    <div class="circle2" />
    <b-carousel
      id="carousel-fade"
      fade
      :interval="4000"
      img-width="380"
      class="carousel-top">
      <div v-for="image,index in images1" :key="index">
        <b-carousel-slide :img-src="image" rounded background="white">
        </b-carousel-slide>
      </div>
    </b-carousel>
    <b-carousel
      id="carousel-fade"
      fade
      :interval="5500"
      img-width="380"
      class="carousel-center">
      <div v-for="image, index in images1" :key="index">
        <b-carousel-slide :img-src="image" rounded>
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
  
</template>
<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false,
      circleHeight: '300px',
      color: ['#5ba19b', '#fceaea', '#f5d9d9', '#fbead1'],
      images1: ['/img/weekend_citron.jpg', '/img/ねこクッキー3.jpg', '/img/クッキー缶.jpg', '/img/抹茶クッキー.jpg'],
      images2: []
             
    }
  },
  created() {
    let client_h = window.innerHeight
    let calcHeight = client_h * 0.35
    this.circleHeight = calcHeight.toString() + 'px'
    console.log(this.circleHeight)
  },
}

</script>

<style>
.top-carousel {
  width: 100%;
  height: 80vh;
}

.carousel-top {
  position: absolute;
  width: 21vw;
  height: 35vh;
  top: 16vh;
  left: 8.8vw;
  rotate: -10deg;
}

.carousel-center {
  position: absolute;
  width: 36vw;
  height: 55vh;
  top: 33vh;
  right: 18.8vw;
  rotate: 5deg;
}

.circle1 {
  width: 22.5vw;
  height: 38.5vh;
  background: white;
  rotate: -10deg;
  position: absolute;
  top: 14vh;
  left: 8vw;
}

.circle2 {
  width: 24.5vw;
  height: 38.5vh;
  background: #A7727D;
  rotate: 24deg;
  position: absolute;
  top: 21vh;
  right: 9vw;
  opacity: 0.8;
}

</style>
