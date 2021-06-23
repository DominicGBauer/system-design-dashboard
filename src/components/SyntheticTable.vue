<template>
  <div> 
    <h1> Synthetic Table </h1>
    <p> Text introducing table. </p>

  </div>
  
  
  <div class="table-container">
    <table v-if="data">

      <caption>
          Table 1: Synthetic Table
      </caption>
      <thead>
        <tr>
          <th>Instrument</th>
          <th>Beta</th>
          <th>Market Volatility</th>
          <th>Weights</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="entry in data" v-bind:key="entry">
          <td>{{ entry.instrument }}</td>
          <td>{{ entry.beta.toFixed(2) }}</td>
          <td>{{ entry.market_volatility.toFixed(2) }}</td>
          <td>{{ entry.weights.toFixed(2) }}</td>
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

.table-container {
  display: flex;
  justify-content: center;
  margin: 3rem;
}

table {
  border-collapse: collapse;
}

table,
tr,
td,
th {
  border: 1px solid black;
}

td,
th {
  padding: 6px;
}

caption {
  padding: 16px;
  font-weight: bold;
  caption-side: bottom;
}


</style>
