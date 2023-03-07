<template>
  <div>
  <Home/>
  </div>
</template>

<script>
import Home from '~/components/Home.vue'
export default {
  // name: 'SwipeTopPage',
  components: {
    Home,
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
