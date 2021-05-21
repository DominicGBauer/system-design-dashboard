<template>
  <Heading />
  <LineGraph />
  <Faq />
  <WorkedExample />
</template>

<script>
import LineGraph from './components/LineGraph.vue'
import Heading from './components/Heading.vue'
import Faq from './components/Faq.vue'

export default {
  name: 'App',
  components: {
    Heading,
    LineGraph,
    Faq,
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
  margin: 2rem 10%;
  max-width: 100%;
}
</style>
