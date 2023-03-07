<template>
  <div>
  <Recip/>
  </div>
</template>

<script>
import Recip from '~/components/Recip.vue'
export default {
  // name: 'SwipeTopPage',
  components: {
    Recip,
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
