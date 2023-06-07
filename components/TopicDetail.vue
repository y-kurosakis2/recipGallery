<template>
  <div class="topic-detail">

    <div class="page">
      <header-tab />
    </div>
    <div class="topic-title-img">
      <b-img :src="topicInfo.topicPath" class="topic-layer"/>
      <div class="topic-cover"/>
      <b-img :src="topicInfo.topicBackground" class="topic-background" />
    </div>
    <div class="title">
      <div v-for="top in topicInfo.topicMessage" :key="top.index">
        {{ top }}
      </div>
    </div>

      <div class="topic-main-container">
        <div v-for="recip in recips" :key="recip.index" class="recip-contents">
          <b-img width="500px" :src="recip.picPath" alt="image" />
          <b-card class="ingredients">
            <div class="recip-sub-title">
              材料
            </div>
            <div class="recip-content">
            </div>
          </b-card>
          <div class="flex-box">
          <b-card class="energy">
            <div class="recip-sub-title">
              栄養素
            </div>
            <div class="recip-content">
            </div>
          </b-card>
          <b-button class="recip-button" @click="goRecip(recip)">レシピへ</b-button>
        </div>
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
      topicInfo: [],
      recips: [],
      }
  },

  mounted() {
    const topicInfo = this.$store.state.topic.topicInfo
    const recipInfo = this.$store.state.recip.topicRecipInfo
    this.topicInfo = topicInfo
    console.log(this.topicInfo)
    // this.recips = recipInfo.filter((info) => info.topicNumber === this.topicInfo.number)
    this.recips = recipInfo
    console.log(this.recips)
    const weightSize = window.innerWidth
    if (weightSize > 1600) {
      return this.sidebar = true
    }
    return this.sidebar = false
  },

  methods:{
    goRecip(recip) {
      this.$store.commit('recip/setRecipInfo', recip)
      this.$router.push('/recip')
    }
  }
}

</script>

<style>
.topic-detail {
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


.topic-main-container{
  width: 100%;
  margin: 30px;
  display: flex;
  flex-direction: column;
}

.recip-contents {
  width: 94%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 40px;
}


.topic-background {
  height: 400px;
  width: 100%;
  object-fit: cover;
}

.topic-layer {
  position: absolute;
  width: 800px;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  z-index: 5;
}

.topic-title-img {
  width: 100%;
  position: relative;
}

.topic-cover {
  height: 400px;
  width: 100%;
  background: white;
  opacity: 0.5;
  position: absolute;
}

.ingredients {
  width: 30%;
  margin-left: 40px;
  margin: 20px;
  border: dotted;
  border-color: #f5d9d9;
  border-width: 4px;
  border-radius: 2rem;
}

.energy {
  width: auto;
  margin: 20px;
  border-color: #f5d9d9;
  border-width: 2px;
  border-radius: 2rem;
  height: 220px;
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

.title {
  margin: 10px 20px;
  font-size: 22px;
  display: flex;
  flex-direction: column;
  font-family: 'Zen Maru Gothic', sans-serif;
  align-items: center;
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

.flex-box {
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: space-between;
}

.recip-button {
  width: auto;
  margin: 0 30px 30px 30px;
  height: 20%;
  min-height: 30px;
}



</style>
