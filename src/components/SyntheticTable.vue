<template>
  <div class="synthetic-table">
    <table v-if="data">
      <thead>
        <tr>
          <th>Instrument</th>
          <th>Beta</th>
          <th>Market Volatility</th>
          <th>Weights </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="entry in data" v-bind:key="entry">
          <td>{{ entry.instrument }}</td>
          <td>{{ entry.beta }}</td>
          <td>{{ entry.market_volatility }}</td>
          <td>{{ entry.weights }}</td>
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
    axios
      .get(
        '/api/synthethic-table?date=2021-03-01&indexName=RESI&indexCode=J200',
      )
      .then((response) => (this.data = response.data))
  },
}
</script>

<style lang="scss" scoped>

</style>
