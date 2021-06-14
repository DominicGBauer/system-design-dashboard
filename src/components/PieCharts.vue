<template>
  <h1 id="graphs">Graphs</h1>
  <div class="pie-chart-container">
    <PieChart indexName="FINI" />
    <PieChart indexName="RESI" />
    <PieChart indexName="INDI" />
    <PieChart indexName="TOPI" centeringLong="50%" />
    <PieChart indexName="DTOP" centeringLong="50%" />
    <PieChart indexName="PCAP" />
    <PieChart indexName="SAPY" />
    <PieChart indexName="ALTI" />
  </div>
</template>

<script>
import PieChart from './PieChart.vue'

export default {
  name: 'App',
  components: {
    PieChart,
  },
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 4rem 0;
}
.pie-chart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
