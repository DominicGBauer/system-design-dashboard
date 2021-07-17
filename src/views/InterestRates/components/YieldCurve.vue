<template>
  <div class="select-container">
    <p>
      <strong>Select a<span v-if="yieldCurveSeries[0]"> new</span> date</strong>
    </p>
    <VueMultiselect
      v-model="currentDate"
      :options="dates"
      :searchable="true"
      :allow-empty="false"
      label="date"
      placeholder="Select a date"
    >
    </VueMultiselect>

    <p>
      <strong
        >Select a<span v-if="yieldCurveSeries[0]"> new</span> bond curve</strong
      >
    </p>
    <VueMultiselect
      v-model="currentBondCurve"
      :options="BOND_CURVES"
      :searchable="false"
      :allow-empty="false"
      placeholder="Select a bond curve"
    >
    </VueMultiselect>

    <div class="button-container">
      <button
        @click="getYieldCurveSeries(currentBondCurve, currentDate.date)"
        :disabled="!currentBondCurve || !currentDate.date"
      >
        <span v-if="!yieldCurveSeries[0]">Display Graph</span>
        <span v-else>Update Graph</span>
      </button>
    </div>
  </div>

  <template v-if="yieldCurveSeries[0] && currentDate.date">
    <div class="graph-container">
      <LineGraph
        :lineGraphType="'category'"
        :data="yieldCurveSeries"
        :xAxisData="xAxisData"
        :title="`${currentDate.date} Yield Curve`"
      />
    </div>
  </template>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import LineGraph from '@/components/LineGraph/LineGraph.vue'
import { BOND_CURVES } from '@/constants'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  name: 'YieldCurve',
  components: {
    VueMultiselect,
    LineGraph,
  },
  setup() {
    const store = useStore()

    return {
      dates: computed(() => store.state.interestRates.dates),
      yieldCurveSeries: computed(
        () => store.state.interestRates.yieldCurveSeries,
      ),
      getYieldCurveSeries: (bondCurve, date) =>
        store.dispatch('interestRates/getYieldCurveSeries', {
          bondCurve,
          date,
        }),
    }
  },
  data() {
    return {
      currentDate: '',
      currentBondCurve: '',
      BOND_CURVES,
    }
  },
  computed: {
    xAxisData() {
      return this.yieldCurveSeries.map(
        (yieldCurveSeries) => yieldCurveSeries.name,
      )
    },
  },
}
</script>

<style lang="scss" scoped>
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

.graph-container {
  @media (max-width: 800px) {
    width: 100%;
  }

  width: 50vw;
  margin: 0 auto;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
