<template>
  <transition>
  <div class="home">
    <home-title />
    <div class="topAnimation">
      <top />
    </div>
    <!-- <b-button variant="secondary" class="skip" @click="skip">skip</b-button> -->
  </div>
</transition>
  
</template>
<script>
// import HomeTitle from './HomeTitle.vue'
import Top from './Top.vue'
import gsap from 'gsap'
export default {
  components: {
    // HomeTitle,
    Top,
    gsap,
  },
  data() {
    return {
      // title: ['W','e','l','c','o','m','e','   ','t','o',' ','s','w','e',],
      // apple: ['apple', 'banana', 'pain']
 
    }
  },
  method: {
    // skip() {
    //   const tl = gsap.timeline()
    //   tl.seek(10)
    // }
  }
}
</script>

<style>
.home {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.topAnimation {
  opacity: 0;
  width: 100%;
  background-image: url('/img/dot.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fceaea;
  background-attachment: fixed;
  animation: fadeIn 3s ease-in-out;
  animation-delay: 5s;
  animation-fill-mode: forwards;
}

.skip {
  width: 300px;
  height: 100px;
}

body {
  background-attachment: fixed;
}

@keyframes fadeIn {
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}


</style>
