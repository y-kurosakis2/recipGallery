<template>
  <div class="image-card">     
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous">
    <div>
      <b-modal ref="my-modal" size="lg"  centered >
        <div class="modal-title">
          <div class="modal-totle-text">
          {{ title }}
          </div>
        </div>
        <div class="d-flex">
          <b-img width="400px" height="300px" :src="imgPath" alt="image"/>
          <div class="font-style" style="margin: 0 20px;">
            <div class="point-style" style="font-size: 26px; font-family: 'Kaisei Opti',sans-serif;">おすすめポイント</div>
            <div class="point-block">
              <div v-for="point in points" :key="point">
                {{ point }}<br>
              </div>
            </div>
          </div>
        </div>
        <b-button class="mt-3" variant="outline-success" block @click="goRecip(recipInfo)"><i class="fas fa-star"></i>レシピへ</b-button>
        <b-button :pressed.sync="myFav" class="mt-2" variant="outline-warning" block><i class="fas fa-star"></i>お気に入り</b-button>
      </b-modal>
    </div>
  <div class="modal-block">
    <div class="title-block">
      Recip Gallery
      <div class="line" />
    </div>
      <b-card-group deck class="image-block">
        <div v-for="art in article" :key="art.index">
          <b-card
              :img-src="art.picPath"
              img-alt="Image"
              overlay
              class="sweets-pic"
              @click="showModal(art)"
          >   
          </b-card>
        </div>
      </b-card-group>
    </div>
  </div>
  
</template>
<script>
import { throwStatement } from '@babel/types'

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
  }
},
methods:{
  showModal(art) {
    this.$refs['my-modal'].show()
    console.log('aaaa')
    this.imgPath = art.picPath
    this.title = art.title
    this.points = art.points
    this.id = art.id
    this.recipInfo = art
  },
  hideModal() {
      this.$refs['my-modal'].hide()
  },
  toggleModal() {
      // We pass the ID of the button that we want to return focus to
      // when the modal has hidden
      this.$refs['my-modal'].toggle('#toggle-btn')
  },
  goRecip(recipInfo) {
    this.$store.commit('recip/setRecipInfo', recipInfo)
    console.log(recipInfo)
    this.$router.push('/recip')
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
<style scoped>
.image-card {
  width: 100%;
  height: 1100px;
  font-family: 'Kaisei Opti', sans-serif;
}


.modal-block {
  width: 100%;
  height: 1108px;
  background-image: url('/img/kumo6.png');
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  display: flex;
  justify-content: center;
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
  font-family: 'Kaisei Opti', sans-serif;
}

.title-block {
  width: 20rem;
  text-align: center;
  margin-top: -266px;
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

.modal {
  font-family: 'Segoe Print',sans-serif;
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
.font-style {
  font-family: 'Zen Maru Gothic', sans-serif;
}

.sweets-pic {
  width: 230px;
  margin: 20px 10px;
  transition: .4s;
}

.sweets-pic:hover {
  transform: scale(1.2);
  transition: 1s;
  z-index: 10;
  cursor: pointer;
}

.point-style {
  position: relative;
  background: #dfefff;
  box-shadow: 0px 0px 0px 5px #dfefff;
  border: dashed 2px white;
  padding: 0.2em 0.5em;
  color: #454545;
}

.point-style:after {
  position: absolute;
  content: '';
  left: -7px;
  top: -7px;
  border-width: 0 0 15px 15px;
  border-style: solid;
  border-color: #fff #fff #a8d4ff;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.15);
}

.point-block {
  padding: 20px 10px;
}

</style>
