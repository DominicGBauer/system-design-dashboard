<template>
  <Heading />
  <Dashboard />
  <FAQ />
</template>

<script>
import Dashboard from './components/Dashboard.vue'
import Heading from './components/Heading.vue'
import FAQ from './components/FAQ.vue'
export default {
  name: 'App',
  components: {
    Heading,
    Dashboard,
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
  margin: 1rem;
  max-width: 100%;
}
</style>
