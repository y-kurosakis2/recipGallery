<template>
  <div class="recip">
    <div class="page">
      <header-tab />
    </div>
    <div class="recip-title">
      {{ recipInfo.title }}
    </div>
    <div class="recip-main-container">
      <div class="recip-basic-contents">
        <b-img width="500px" :src="recipInfo.picPath" alt="image" />
        <b-card class="recip-ingredients">
          <div class="recip-sub-title">
            材料
          </div>
          <div class="recip-content">
            {{ recipInfo.ingredients }}</div>
        </b-card>
        <b-card class="recip-energy">
          <div class="recip-sub-title">
            栄養素
          </div>
          <div class="recip-content">
            {{ recipInfo.energy }}</div>
        </b-card>
        <sidebar v-if="sidebar" class="recip-sidebar"/>
      </div>
    </div>
  </div>

</template>
<script>
import HeaderTab from './HeaderTab.vue';
import Sidebar from './Sidebar.vue';
// import ImagePic from './ImagePic.vue';



export default {
  components: { HeaderTab, Sidebar},
          
  data () {
    return {
      imagePath: '',      
      sidebar: true,
      recipInfo: [],    
    }
  },

  // computed: {
  //   recipInfo() {
  //     return this.$store.state.recip.recipInfo
  //   }
  // },
  mounted() {
    this.$store.commit('page/setNotFirstPage', true)
    this.recipInfo = this.$store.state.recip.recipInfo
    console.log(this.recipInfo)
    // id = this.recipInfo.id
    // title = this.recipInfo.title

    console.log('sidebar')
    const weightSize = window.innerWidth
    if (weightSize > 1600) {
      return this.sidebar = true
    }
    return this.sidebar = false
  }
}

</script>

<style>
.recip {
  width: 100%;
  height: 100vh;
  background-image: url('/img/dot2.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fceaea;
  background-attachment: fixed;
  overflow-x: hidden;
}

.page {
  width: 100%;
}

.recip-main-container{
  width: 100%;
  margin: 30px;
  font-family: 'Zen Maru Gothic', sans-serif;
}

.recip-basic-contents{
  width: 100%;
  display: flex;
}

.recip-ingredients {
  width: 30%;
  margin: 20px;
  border: dotted;
  border-color: #f5d9d9;
  border-width: 4px;
  border-radius: 2rem;

}

.recip-energy {
  width: 20%;
  margin: 20px;
  border-color: #f5d9d9;
  border-width: 2px;
  border-radius: 2rem;
}

.recip-sidebar {
  width: 16%;
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

.recip-title {
  margin: 10px 20px;
  font-size: 30px;
  font-family: 'Kaisei Opti', sans-serif;
}

.recip-sub-title {
  background: #dfefff;
  box-shadow: 0px 0px 0px 5px #dfefff;
  border: dashed 2px white;
  padding: 0.2em 0.5em;
  font-family: 'Kaisei Opti', sans-serif;
}

.recip-content {
  margin: 10px;
  font-family: 'Zen Maru Gothic', sans-serif;
}

</style>
