<template>
  <div class="side-bar">
    <b-sidebar id="slide-bar-id" right>
      <div class="px-3 py-2">
      <p>特集</p>
    </div>
      
    </b-sidebar>
      
  </div>
  
</template>
<script>


</script>

<style>
.side-bar {
  width: 25%;
  overflow: hidden;
  background-image: url('/img/308-2.png');
  background-repeat: repeat-y;
}

.page {
  width: 100%;
}

.main-container{
  width: 100%;
  margin: 30px;
  display: flex;
}

.ingredients {
  width: 30%;
  margin: 20px;
  border-color: #f5d9d9;
  border-width: 2px;
  border-radius: 2rem;
}

.energy {
  width: 20%;
  margin: 20px;
  border-color: #f5d9d9;
  border-width: 2px;
  border-radius: 2rem;
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
