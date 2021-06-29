<template>
  <div class="container">
    <h1>Synthetic Table</h1>
    <p>
      This table goes beyond the composite risk statistics of the report and shows a synthetic construction of the most important risk statistics for an index based on its constituents. 
      These statistics are then aggregated as per the constituents weight in the index. Below is an example of such a synthethic table using the All Share Index: 
    </p>
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
        <tr v-for="entry in data" :key="entry">
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

p {
  margin: 2rem 20rem;
  text-align: left;
}


</style>
