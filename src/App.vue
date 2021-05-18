<template>
  <Heading />
  <Introduction />
  <Dashboard />
  <FAQ/>

</template>

<script>
import Dashboard from './components/Dashboard.vue'
import FAQ from './components/FAQ.vue'
import Heading from './components/Heading.vue'
import Introduction from './components/Introduction.vue'

export default {
  name: 'App',
  components: {
    Heading,
    Dashboard,
    Introduction,
    FAQ,
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
  margin-top: 60px;
}
</style>
