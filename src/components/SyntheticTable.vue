<template>
  <table v-if="data">
    <caption>
      Synthetic Table
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
        <td>{{ entry.beta ? entry.beta.toFixed(5) : 0 }}</td>
        <td>
          {{ entry.market_volatility ? entry.market_volatility.toFixed(5) : 0 }}
        </td>
        <td>{{ entry.weights ? entry.weights.toFixed(5) : 0 }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SyntheticTable',
  props: {
    data: {},
  },
}
</script>

<style lang="scss" scoped>
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
}
</style>
