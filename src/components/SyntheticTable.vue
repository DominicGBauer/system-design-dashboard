<template>
  <div class="synthetic-table">
    <table v-if="data">
      <thead>
        <tr>
          <th>Instrument</th>
          <th>Beta</th>
          <th>Market Volatility</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="instrument in data" v-bind:key="instrument.beta">
          <td>{{ instrument.instrument }}</td>
          <td>{{ instrument.beta }}</td>
          <td>{{ instrument.market_volatility }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//Axios stuff
import axios from 'axios'

export default {
  name: 'SyntheticTable',
  data() {
    return {
      data: null,
    }
  },
  mounted() {
    axios.get('/api/synthethic-table?date=2021-03-01&indexName=RESI&indexCode=J200').then(
      (response) =>
        (this.data = response.data),
    )

  
  },
}
</script>

<style lang="scss" scoped>

</style>
