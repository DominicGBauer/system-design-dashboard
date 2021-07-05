<template>
  <Heading />
  <div class="container">
    <Introduction />
    <Tables />
  </div>
</template>

<script>
import Tables from '../views/Tables.vue'
import Heading from '../components/Heading.vue'
import Introduction from '../components/Introduction.vue'

export default {
  name: 'Home',
  components: {
    Heading,
    Introduction,
    Tables,
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 2rem 20%;
}
</style>
