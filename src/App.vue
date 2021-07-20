<template>
  <NavBar />
  <Highlights v-if="!isMobile" />
  <router-view />
  <Footer />
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue'
import Footer from './components/Footer/Footer.vue'
import Highlights from './components/Highlights/Highlights.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer,
    Highlights,
  },
  setup() {
    const store = useStore()
    store.dispatch('shares/getShares')
    store.dispatch('indices/getIndexTypes')
    store.dispatch('dates/getDates')
    store.dispatch('interestRates/getDates')
    store.dispatch('sectors/getSectors')
    store.dispatch('mobile/setIsMobile')
    return {
      isMobile: computed(() => store.state.mobile.isMobile),
    }
  },
}
</script>

<style lang="scss">
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

button:enabled:hover,
button:enabled:active {
  background-color: #3c5166;
  border: black;
  cursor: pointer;
  box-shadow: 2px 2px 3px #202d3a;
}

button:enabled:active {
  transform: translateY(4px);
}

button:disabled {
  box-shadow: none;
  border: none;
  opacity: 30%;
  cursor: not-allowed;
}

.bm-burger-button {
  left: auto;
  right: 36px;
  color: white;
}

table {
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

table caption {
  font-size: 1.5em;
  margin: 0.5em 0 0.75em;
}

table tr {
  background-color: #f8f8f8;
  border: 1px solid #ddd;
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
  text-align: center;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }

  table caption {
    font-size: 1.3em;
  }

  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }

  table tr {
    border-bottom: 3px solid #ddd;
    display: block;
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
    text-align: right;
  }

  table td::before {
    /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
    content: attr(data-label);
    float: left;
    font-weight: bold;
    text-transform: uppercase;
  }

  table td:last-child {
    border-bottom: 0;
  }
}

.red {
  color: red;
}

.blue {
  color: rgb(0, 153, 255);
}

.green {
  color: rgb(99, 206, 99);
}
</style>
