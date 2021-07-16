<template>
  <div class="page-container">
    <h1>Interest Rates</h1>
    <div class="select-container">
      <p>
        <strong>Select a<span v-if="data[0]"> new</span> type of graph</strong>
      </p>
      <VueMultiselect
        v-model="currentGraph"
        :options="graphs"
        :searchable="false"
        :allow-empty="false"
        placeholder="Select a type of graph"
      >
      </VueMultiselect>
    </div>
    <template v-if="currentGraph === 'Time Series'">
      <TimeSeries />
    </template>
    <template v-if="currentGraph === 'Yield Curve'">
      <YieldCurve />
    </template>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import TimeSeries from '@/views/InterestRates/components/TimeSeries.vue'
import YieldCurve from '@/views/InterestRates/components/YieldCurve.vue'
import { TENORS, BOND_CURVES } from '@/constants'

export default {
  name: 'InterestRates',
  components: {
    VueMultiselect,
    TimeSeries,
    YieldCurve,
  },
  data() {
    return {
      data: [],
      BOND_CURVES,
      TENORS,
      currentGraph: '',
      graphs: ['Yield Curve', 'Time Series'],
    }
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  margin: 2rem 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 48px;
  }

  .select-container {
    display: flex;
    flex-direction: column;
    width: 400px;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .button-container {
    margin: 3rem 0 1rem 0;
  }
}

.graph-container {
  @media (max-width: 800px) {
    width: 100%;
  }

  margin: 0 auto;
  width: 50vw;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
