<template>
  <div class="image-card">     
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    

  <div class="modal-block">
    <div class="title-block">
      Topic
      <div class="line" />
    </div>
    <div class="topic-slide">
      <swiper
        :options="swiperOptions">
    <swiper-slide class="slide">
      <b-img width="600px" src="/img/weekend_citron.jpg" alt="citon" ></b-img>
    </swiper-slide>
    <swiper-slide class="slide"><b-img width="600px" src="/img/ねこクッキー.jpg" alt="citon" ></b-img></swiper-slide>
    <swiper-slide class="slide"><b-img width="600px" src="/img/weekend_citron.jpg" alt="citon" ></b-img></swiper-slide>
  </swiper>
</div>
  </div>


  </div>
  
</template>
<script>
// import { Swiper, SwiperSlide } from 'swiper/vue'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)
export default {
  name: 'Topic',
  // components: {
  //   Swiper,
  //   SwiperSlide,
  // },
  data () {
    return {
      imgPath: '',
      recipInfo: [],    
      id: '',
      title: '',
      points: '',
      swiperOptions: {
        centeredSlides: true,
        // speed: 1000,
        // spaceBetween: 30,
        // loop: false,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // }
      }
    }
  },
  methods:{
    goTopic(path) {
    // this.recipInfo = {
    //   img: path,
    //   title: 'パウンドケーキ',
    //   ingredients: '材料',
    //   energy: '栄養素'
    // }
    // this.$store.commit('recip/setRecipInfo', this.recipInfo)
      this.$router.push('/topic')
    },
    onSwiperRedied (swiper) {
      console.log('Swiper redied!', swiper)
    },
    onSwiperSlideChangeTransitionStart () {
      console.log('SwiperSlideChangeTransitionStart!')
    },
    onSwiperClickSlide (index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    }
  }
}

</script>
<style>
.image-card {
  width: 100%;
  height: 1100px;
}


.modal-block {
  width: 100%;
  height: 1108px;
  background-image: url('/img/kumo6.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}



.title-block {
  width: 20rem;
  text-align: center;
  margin-top: 172px;
  font-size: 45px;
  color: brown;
  font-weight: bold;
  font-family: 'Segoe Print',sans-serif;
}

.line {
  background-image: url('/img/line2.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: 22rem;
  height: 85px;
  margin-top: -59px;
}

.image-block {
  margin-top: 310px;
  position: absolute;
  width: 80%;
  display: flex;
  justify-content: center;
}

.sweets-pic {
  width: 230px;
  margin: 20px 10px;
  transition: .4s;
}

.swiper {
  width: 100%;
  height: 400px;
}

.topic-slide {
  width: 70%;
  height: 400px;
  margin-top: 0;
}



</style>
