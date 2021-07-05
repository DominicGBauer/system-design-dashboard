<template>
  <div class="page-container">
    <h1>Interest Rates</h1>
    <div class="select-container">
      <p><strong>Select a Tenor</strong></p>
      <VueMultiselect
        v-model="currentTenor"
        :options="TENORS"
        :searchable="false"
        :allow-empty="false"
      >
      </VueMultiselect>

      <p><strong>Select a Bond Curve</strong></p>
      <VueMultiselect
        v-model="currentBondCurve"
        :options="BOND_CURVES"
        :searchable="false"
        :allow-empty="false"
      >
      </VueMultiselect>

      <div class="button-container">
        <button @click="handleClick(currentBondCurve, currentTenor)">
          Display Graph
        </button>
      </div>
    </div>
  </div>

  <Loader :isLoading="isLoading" />

  <template v-if="data[0] && !isLoading">
    <div class="graph-container">
      <LineGraph :data="data" :title="currentTenor" />
    </div>
  </template>
</template>

<script>
import axios from 'axios'
import VueMultiselect from 'vue-multiselect'
import LineGraph from '../components/LineGraph.vue'
import Loader from '../components/Loader.vue'
import { TENORS, BOND_CURVES } from '../constants'

export default {
  name: 'InterestRates',
  components: {
    VueMultiselect,
    LineGraph,
    Loader,
  },
  data() {
    return {
      data: [],
      BOND_CURVES,
      TENORS,
      currentTenor: '',
      currentBondCurve: '',
      isLoading: false,
    }
  },
  methods: {
    getInterestRateData(currentBondCurve, currentTenor) {
      this.isLoading = true
      axios
        .get(
          `/api/interest_rates?curve="${currentBondCurve}"&tenor=${currentTenor}`,
        )
        .then((response) => (this.data = this.transformData(response.data)))
        .then((this.isLoading = false))
    },
    handleClick(currentBondCurve, currentTenor) {
      this.getInterestRateData(currentBondCurve, currentTenor)
    },
    transformData(data) {
      for (let item of data) {
        item.value = [item.name, item.value]
      }
      return data
    },
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
