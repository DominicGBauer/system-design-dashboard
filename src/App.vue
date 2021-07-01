<template>
  <NavBar />
  <Highlights />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Highlights from './components/Highlights.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Highlights,
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
  display: flex;
  flex-direction: column;
  height: 100vh;
}

body {
  margin: 0;
}

button {
  all: unset;
  width: 200px;
  color: white;
  padding: 16px;
  background-color: #2c3e50;
  border-radius: 16px;
  font-weight: bold;
}

button:hover,
button:active {
  background-color: #3c5166;
  border: black;
  cursor: pointer;
  box-shadow: 2px 2px 3px #202d3a;
}

button:active {
  transform: translateY(4px);
}
</style>
