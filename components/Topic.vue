<template>
  <div class="image-card">     
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    

  <div class="modal-block">
    <div class="title-block">
      Topic
      <div class="line" />
    </div>
    <b-carousel
        id="carousel-fade"
        slide
        :interval="4000"
        img-width="800"
        label-next="next"
        indicators
        class="topic-carousel"
        >
        <div v-for="image,index in images1" :key="index">
          <b-carousel-slide :img-src="image" rounded background="white">
          </b-carousel-slide>
        </div>
      </b-carousel>
  </div>


  </div>
  
</template>
<script>

export default {
  // async asyncData ({ $content }) {
  //   const article = await $content('hello').fetch()
  //   console.log(article)
  //   this.article = article
  //   return article
  // },
 async mounted() {
  // contentからmdを取り出す（順番は適当）
  const art = await this.$content('sweetsModal').fetch()
  console.log(art)
  // 作成順とかに並び替えたい
  this.article = art
  this.article = art.sort(this.compareCreatedDate)
  console.log(this.article)

  // this.title = art.sweetsName
  // this.id = art.id
  // this.points = art.points
  // this.sweetsPic = ['/img/weekend_citron.jpg', '/img/ねこクッキー.jpg', '/img/クッキー缶.jpg', '/img/抹茶クッキー.jpg', '/img/抹茶クッキー.jpg']
 },

data () {
  return {
    isActive: true,
    hasError: false,
    color: this.primary,
    myFav: false,  
    article: [], 
    sweetsPic: [],
    imgPath: '',
    recipInfo: [],    
    id: '',
    title: '',
    points: '',
    images1: ['/img/topic1.png', '/img/ねこクッキー3.jpg', '/img/クッキー缶.jpg', '/img/抹茶クッキー.jpg'],
  }
},
methods:{
  showModal(art) {
    this.$refs['my-modal'].show()
    console.log('aaaa')
    this.imgPath = art.picPath
    this.title = art.sweetsName
    this.points = art.points
    this.id = art.id
  },
  hideModal() {
      this.$refs['my-modal'].hide()
  },
  toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
  },
  goRecip(path) {
    this.recipInfo = {
      img: path,
      title: 'パウンドケーキ',
      ingredients: '材料',
      energy: '栄養素'
    }
    this.$store.commit('recip/setRecipInfo', this.recipInfo)
    this.$router.push('/recip')
  },
  compareCreatedDate(a, b) {
    if (a.createdAt > b.createdAt) {
      return 1
    }
    if (a.createdAt < b.createdAt) {
      return -1
    }
    return 0
  }
}
}

</script>
<style scoped>
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

.modal-title {
  width: 99%;
  height: 50px;
  background-color: #5ba19b;
  position: absolute;
  top: -54px;
  left: 4px;
}

.modal-totle-text {
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
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

/* .modal-image {
  background-image: url('/img/frame2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
} */

.sweets-pic {
  width: 230px;
  margin: 20px 10px;
  transition: .4s;
}

.sweets-pic:hover {
  transform: scale(1.2);
  transition: 1s;
  z-index: 10;
}

.topic-carousel {
  width: 700px;
}


</style>
