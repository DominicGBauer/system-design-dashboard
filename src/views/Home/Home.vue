<template>
  <Heading />
  <div class="container">
    <Introduction />
    <Tables />
    <Faq />
  </div>
</template>

<script>
import Tables from '../Tables/Tables.vue'
import Heading from './components/Heading.vue'
import Introduction from './components/Introduction.vue'
import Faq from './components/Faq.vue'

export default {
  name: 'Home',
  components: {
    Heading,
    Introduction,
    Tables,
    Faq,
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
