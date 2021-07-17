<template>
  <div class="select-container">
    <p>
      <strong>Select a<span v-if="timeSeries[0]"> new</span> tenor</strong>
    </p>
    <VueMultiselect
      v-model="currentTenor"
      :options="TENORS"
      :searchable="false"
      :allow-empty="false"
      placeholder="Select a tenor"
    >
    </VueMultiselect>

    <p>
      <strong>Select a<span v-if="timeSeries[0]"> new</span> bond curve</strong>
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
        @click="getTimeSeries(currentBondCurve, currentTenor)"
        :disabled="!currentBondCurve || !currentTenor"
      >
        <span v-if="!timeSeries[0]">Display Graph</span>
        <span v-else>Update Graph</span>
      </button>
    </div>
  </div>

  <template v-if="timeSeries[0]">
    <div class="graph-container">
      <LineGraph :data="timeSeries" :title="currentTenor" />
    </div>
  </template>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import LineGraph from '@/components/LineGraph/LineGraph.vue'
import { TENORS, BOND_CURVES } from '@/constants'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  name: 'TimeSeries',
  components: {
    VueMultiselect,
    LineGraph,
  },
  setup() {
    const store = useStore()

    return {
      timeSeries: computed(() => store.state.interestRates.timeSeries),
      getTimeSeries: (bondCurve, tenor) =>
        store.dispatch('interestRates/getTimeSeries', { bondCurve, tenor }),
    }
  },
  data() {
    return {
      BOND_CURVES,
      TENORS,
      currentTenor: '',
      currentBondCurve: '',
    }
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

  margin: 0 auto;
  width: 50vw;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
