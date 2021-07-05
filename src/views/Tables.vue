<template>
  <div class="page-container">
    <h1>Synthetic Table</h1>
    <div class="select-container">
      <p><strong>Select a Quarter</strong></p>
      <VueMultiselect
        v-model="currentDate"
        :options="dates.dates"
        :searchable="false"
        label="quarter"
        :allow-empty="false"
      >
      </VueMultiselect>

      <p><strong>Select an Index</strong></p>
      <VueMultiselect
        v-model="currentIndex"
        :options="indices"
        :searchable="false"
        :allow-empty="false"
      >
      </VueMultiselect>

      <div class="button-container">
        <button @click="handleClick(currentIndex, currentDate.quarter)">
          Display Table
        </button>
      </div>
    </div>

    <template v-if="allData && allData[allData.length - 1]">
      <div class="output-container">
        <div class="portfolio-statistics-container">
          <p>
            <strong>Portfolio Beta:</strong>
            {{ allData[allData.length - 1].portfolio_beta.toFixed(5) }}
          </p>
          <p>
            <strong>Portfolio Systematic Variance:</strong>
            {{
              allData[allData.length - 1].portfolio_systematic_variance.toFixed(
                5,
              )
            }}
          </p>
          <p>
            <strong>Portfolio Specific Variance:</strong>
            {{
              allData[allData.length - 1].portfolio_specific_variance.toFixed(5)
            }}
          </p>
          <p>
            <strong>Portfolio Variance:</strong>
            {{ allData[allData.length - 1].portfolio_variance.toFixed(5) }}
          </p>
        </div>
        <PieChart
          :indexName="selectedIndex"
          :data="pieChartData"
          centeringLong="50%"
        />
        <div class="table-container">
          <SyntheticTable :data="data" />
        </div>
      </div>
      <div class="download-buttons-container">
        <ExcelDownloadButton
          name="Specific Covariance Matrix"
          text="Download Specific Covariance Matrix"
          :data="allData[allData.length - 1].specific_covariance_matrix"
        />
        <ExcelDownloadButton
          name="Systematic Covariance Matrix"
          text="Download Systematic Covariance Matrix"
          :data="allData[allData.length - 1].systematic_covariance_matrix"
        />
        <ExcelDownloadButton
          name="Total Covariance Matrix"
          text="Download Total Covariance Matrix"
          :data="allData[allData.length - 1].total_covariance_matrix"
        />
        <ExcelDownloadButton
          name="Correlation Matrix"
          text="Download Correlation Matrix"
          :data="allData[allData.length - 1].correlation_matrix"
        />
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import SyntheticTable from '../components/SyntheticTable.vue'
import VueMultiselect from 'vue-multiselect'
import PieChart from '../components/PieChart.vue'
import ExcelDownloadButton from '../components/ExcelDownloadButton.vue'
import { INDEX_NAMES } from '../constants'
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'Tables',
  components: {
    SyntheticTable,
    PieChart,
    VueMultiselect,
    ExcelDownloadButton,
  },
  setup() {
    const store = useStore()
    store.dispatch('dates/getDates')

    return {
      dates: computed(() => store.state.dates),
    }
  },
  data() {
    return {
      data: [],
      quarters: [],
      allData: [],
      indices: INDEX_NAMES,
      currentIndex: 'RESI',
      pieChartData: [],
      currentDate: { quarter: '2021-03-23' },
      selectedIndex: '',
    }
  },

  methods: {
    getIndexData(indexName, currentDate) {
      axios
        .get(`/api/index?date=${currentDate}&indexName=${indexName}`)
        .then((response) => (this.pieChartData = response.data))
    },
    getTableData(indexName, currentDate) {
      axios
        .get(
          `/api/synthethic-table?date=${currentDate}&indexName=${indexName}&indexCode=J250`,
        )
        .then((response) => (this.allData = response.data))
        .then(
          (allData) => (this.data = allData.filter((data) => !!data.weights)),
        )
    },
    handleClick(indexName, currentDate) {
      this.selectedIndex = this.currentIndex
      this.getTableData(indexName, currentDate)
      this.getIndexData(indexName, currentDate)
    },
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  .select-container {
    @media (max-width: 800px) {
      width: 100%;
    }

    width: 400px;
  }

  .button-container {
    margin: 3rem 0 1rem 0;
  }

  .table-container {
    margin-bottom: 3rem;
  }

  .output-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .portfolio-statistics-container {
      margin: 4rem 0;
    }

    .download-buttons-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
    }
  }
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
