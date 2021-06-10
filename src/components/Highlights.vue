<template>
  <div class="highlights-bar">

    <div class="betas">JSE All Share Index: <span id="allShareNumber" > {{ index1a }} ({{index1a/index1b }}) </span> </div>
  </div>

</template>

<script>
//Axios stuff
import axios from 'axios'


export default {
  name: 'Highlights',
  data() {
    return {

      index1a: [1,2,3],
      index1b: [1,2,3],
    }
  },
  mounted() {
    axios.get('/api/shares?share=J212').then((response) => (this.index1a = response.data[1].value.toFixed(0)))
    axios.get('/api/shares?share=J212').then((response) => (this.index1b = response.data[7].value.toFixed(0)))


  },
}
</script>

<style lang="scss" scoped>
.highlights-bar {
  display: flex;
}

.betas {
  flex: 1 1 auto;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
