<template>
  <Heading />
  <Introduction />
  <Dashboard />
  <LineGraph />
  <Faq />
  <WorkedExample />
</template>

<script>
import LineGraph from './components/LineGraph.vue'
import Heading from './components/Heading.vue'
import Faq from './components/Faq.vue'
import Introduction from './components/Introduction.vue'
import WorkedExample from './components/WorkedExample.vue'


export default {
  name: 'App',
  components: {
    Heading,
    Introduction,
    Dashboard,
    LineGraph,
    Faq,
    WorkedExample,
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
