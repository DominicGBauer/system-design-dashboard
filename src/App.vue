<template>
  <NavBar />
  <Highlights />
  <Heading />
  <div class="app-container">
    <Introduction />
  </div>
  <PieCharts />
  <div class="app-container">
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
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
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
.app-container {
  margin: 2rem 20%;
}
body {
  margin: 0;
}
</style>
