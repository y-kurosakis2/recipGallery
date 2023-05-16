<template>
  <div>
  <TopicDetail/>
  </div>
</template>

<script>
import TopicDetail from '~/components/TopicDetail.vue'
export default {
  // name: 'SwipeTopPage',
  components: {
    TopicDetail,
  },
}
</script>

<style scoped>

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
