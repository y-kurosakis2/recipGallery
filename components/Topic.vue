<template>
  <div class="image-card">     
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    <div class="modal-block">
      <div class="title-block">
        Topic
        <div class="line" />
      </div>
      <b-carousel 
        :interval="5000"
        indicators
        controls
        class="slide-topic">
        <div v-for="top in topic" :key="top.index">
          <div @click="goTopic(top)" >
            <b-carousel-slide :img-src="top.picPath" />
          </div>
        </div>
      </b-carousel>
    </div>
  </div>
</template>
<script>
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
      topic: [],
      recip: [],
    }
  },
  async mounted() {
    const topic = await this.$content('topicGroup').fetch()
    const recip = await this.$content('sweetsModal').fetch()
    console.log(topic)
    console.log(recip)
    // 作成順とかに並び替えたい
    // this.topic = topic
    this.topic = topic.sort(this.compareCreatedDate)
    this.recip = recip
    console.log(this.topic)
  },
  methods:{
    goTopic(info) {
      this.topicInfo = info
      this.$store.commit('topic/setTopicInfo', this.topicInfo)
      this.$store.commit('recip/setTopicRecipInfo', this.recip.filter((recip) => recip.topicNumber === this.topicInfo.number))
      this.$router.push('/topic')
    },
    compareCreatedDate(a, b) {
      if (a.number > b.number) {
        return 1
      }
      if (a.number < b.number) {
        return -1
      }
      return 0
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

.swiper-block {
  display: flex;
}

.topic-slide {
  width: 70%;
  height: 400px;
  margin-top: 0;
}

.slide-topic {
  width: 800px;
  margin: 20px;
  cursor: url('/img/fork.png'), pointer;
  /* cursor: pointer; */
}

.slide-pos {
  display: flex;
}

.topic-img {
  width: 800px;
}



</style>
