<template>
  <Heading />
  <div class="container">
    <Introduction />
    <Tables />
  </div>
</template>

<script>
import Tables from '../Tables/Tables.vue'
import Heading from '../../components/Heading/Heading.vue'
import Introduction from '../../components/Introduction/Introduction.vue'

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
  @media (max-width: 800px) {
    margin: 2rem 10%;
  }
  margin: 2rem 20%;
}
</style>
