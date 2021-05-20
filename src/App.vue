<template>
  <Heading />
  <Introduction />
  <Dashboard />
  <Faq />

</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Heading from './components/Heading.vue'
import Faq from './components/Faq.vue'
import Introduction from './components/Introduction.vue'

export default {
  name: 'App',
  components: {
    Heading,
    Introduction,
    Dashboard,
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
  margin: 1rem;
  max-width: 100%;
}
</style>
