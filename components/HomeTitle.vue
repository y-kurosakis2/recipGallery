<template>
  <div class="title-animation">
      <div class="title1">W</div>
      <div class="title2">e</div>
      <div class="title3">l</div>
      <div class="title4">c</div>
      <div class="title5">o</div>
      <div class="title6">m</div>
      <div class="title7">e</div>
      <div class="title8"></div>
      <div class="title9">t</div>
      <div class="title10">o</div>
      <div class="title11"></div>
      <div class="title11">W</div>
      <div class="title12">W</div>
      <div class="title13">W</div>
      <!-- <div v-for="(char, index) in apple" :key="index">
        <div :class="title[index]">
          {{ char }}
        </div>
      </div> -->
  </div>
  
</template>
<script>
export default {
    head(){
        return{
            script:[
            { src: 'https://photoshopvip.net/wp-content/themes/15zine_ver_2-child/js/animocons.min.js'},
            { src: "animocons.min.js"}
            ],
            link:[
            { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css'},
            { rel: 'stylesheet', href: 'animocons.min.css'}
            ]
        }
    }
}
</script>

<style>
.title-animation {
  position: absolute;
  top: 150px;
  left: 37%;
  display: flex;
  flex-direction: row;
  font-family: 'Homemade Apple', cursive;
  font-size: 50px;
}

.title1 {
  opacity: 0;
  animation: linkbox 4.6s ease-in-out .2s;
  animation-fill-mode: forwards;
}

.title2 {
  opacity: 0;
  animation: linkbox 4.4s ease-in-out .4s;
  animation-fill-mode: forwards;
}

.title3 {
  opacity: 0;
  animation: linkbox 4.2s ease-in-out .6s;
  animation-fill-mode: forwards;
}

.title4 {
  opacity: 0;
  animation: linkbox 4s ease-in-out .8s;
  animation-fill-mode: forwards;
}

.title5 {
  opacity: 0;
  animation: linkbox 3.8s ease-in-out 1s;
  animation-fill-mode: forwards;
}

.title6 {
  opacity: 0;
  animation: linkbox 3.6s ease-in-out 1.2s;
  animation-fill-mode: forwards;
}

.title7 {
  opacity: 0;
  animation: linkbox 3.4s ease-in-out 1.4s;
  animation-fill-mode: forwards;
}

.title8 {
  opacity: 0;
  animation: linkbox 3.2s ease-in-out 1.6s;
  animation-fill-mode: forwards;
}

.title9 {
  opacity: 0;
  animation: linkbox 3s ease-in-out 1.8s;
  animation-fill-mode: forwards;
}

.title10 {
  opacity: 0;
  animation: linkbox 2.8s ease-in-out 2s;
  animation-fill-mode: forwards;
}

.title11 {
  opacity: 0;
  animation: linkbox 2.6s ease-in-out 2.2s;
  animation-fill-mode: forwards;
}

.title12 {
  opacity: 0;
  animation: linkbox 2.4s ease-in-out 2.4s;
  animation-fill-mode: forwards;
}

.title13 {
  opacity: 0;
  animation: linkbox 2.2s ease-in-out 2.6s;
  animation-fill-mode: forwards;
}

.title14 {
  animation: linkbox 2.2s ease-in-out 2.8s;
  animation-fill-mode: forwards;
}


@keyframes linkbox {
  0%{
    opacity: 0;
  }
  50%{
    opacity: 1;
  }
  80%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>
