<template>
  <div class="container">
    <Highlights />
    <Heading />
    <Introduction />
    <PieCharts />
    <Faq />
    <WorkedExample />
  </div>
  <Footer />
</template>

<script>
import PieCharts from './components/PieCharts.vue'
import Heading from './components/Heading.vue'
import Faq from './components/Faq.vue'
import Introduction from './components/Introduction.vue'
import WorkedExample from './components/WorkedExample.vue'
import Footer from './components/Footer.vue'
import Highlights from './components/Highlights.vue'

export default {
  name: 'App',
  components: {
    Highlights,
    Heading,
    Introduction,
    PieCharts,
    Faq,
    WorkedExample,
    Footer,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
}
.container {
  margin: 2rem 10%;
}
body {
  margin: 0;
}
</style>
