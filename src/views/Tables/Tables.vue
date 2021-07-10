<template>
  <div class="page-container" data-testid="tables-component">
    <h1>Synthetic Table</h1>
    <div class="select-container">
      <p><strong>Select a quarter</strong></p>
      <VueMultiselect
        v-model="currentDate"
        :options="dates"
        :searchable="false"
        :allow-empty="false"
        placeholder="Select a date"
      >
      </VueMultiselect>

      <p><strong>Select an index</strong></p>
      <VueMultiselect
        v-model="indexName"
        @select="setIndexName"
        :options="INDEX_NAMES"
        :searchable="false"
        :allow-empty="false"
        placeholder="Select an index"
      >
      </VueMultiselect>

      <p><strong>Select a market proxy</strong></p>
      <VueMultiselect
        v-model="currentMarketProxy"
        :options="INDEX_CODES"
        :searchable="false"
        :allow-empty="false"
        placeholder="Select a market proxy"
      >
      </VueMultiselect>

      <div class="button-container">
        <button
          @click="handleClick(indexName, currentDate, currentMarketProxy)"
          :disabled="!currentMarketProxy || !indexName"
        >
          <span v-if="!index.length">Display Graph</span>
          <span v-else>Update Graph</span>
        </button>
      </div>
    </div>

    <template v-if="portfolioStatistics && table[0]">
      <div class="output-container">
        <div class="portfolio-statistics-container">
          <p>
            <strong>Portfolio Beta:</strong>
            {{ portfolioStatistics.portfolio_beta.toFixed(2) }}
          </p>
          <p>
            <strong>Portfolio Systematic Variance:</strong>
            {{ portfolioStatistics.portfolio_systematic_variance.toFixed(2) }}
          </p>
          <p>
            <strong>Portfolio Specific Variance:</strong>
            {{ portfolioStatistics.portfolio_specific_variance.toFixed(2) }}
          </p>
          <p>
            <strong>Portfolio Variance:</strong>
            {{ portfolioStatistics.portfolio_variance.toFixed(2) }}
          </p>
        </div>
        <div class="pie-charts-container">
          <PieChart :indexName="indexName" :data="index" centeringLong="50%" />
          <PieChart :indexName="indexName" :data="sector" centeringLong="50%" />
        </div>
        <SyntheticTable
          :data="table"
          :indexName="indexName"
          class="table-container"
          @go-to-share="goToShare($event, currentDate)"
        />
      </div>
      <div class="download-buttons-container">
        <ExcelDownloadButton
          name="Specific Covariance Matrix"
          text="Download Specific Covariance Matrix"
          :data="portfolioStatistics.specific_covariance_matrix"
        />
        <ExcelDownloadButton
          name="Systematic Covariance Matrix"
          text="Download Systematic Covariance Matrix"
          :data="portfolioStatistics.systematic_covariance_matrix"
        />
        <ExcelDownloadButton
          name="Total Covariance Matrix"
          text="Download Total Covariance Matrix"
          :data="portfolioStatistics.total_covariance_matrix"
        />
        <ExcelDownloadButton
          name="Correlation Matrix"
          text="Download Correlation Matrix"
          :data="portfolioStatistics.correlation_matrix"
        />
      </div>
    </template>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import VueMultiselect from 'vue-multiselect'
import PieChart from '../../components/PieChart/PieChart.vue'
import ExcelDownloadButton from '../../components/ExcelDownloadButton/ExcelDownloadButton.vue'
import { INDEX_NAMES, INDEX_CODES } from '../../constants'
import SyntheticTable from '../../components/SyntheticTable/SyntheticTable.vue'

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
    const router = useRouter()

    return {
      dates: computed(() => store.getters['dates/transformedDates']),
      index: computed(() => store.state.indices.index),
      indexName: computed(() => store.state.indices.indexName),
      sector: computed(() => store.state.indices.sector),
      shares: computed(() => store.state.shares.shares),
      table: computed(() => store.getters['indices/filteredTable']),
      portfolioStatistics: computed(
        () => store.getters['indices/portfolioStatistics'],
      ),
      setIndexName: (indexName) =>
        store.dispatch('indices/setIndexName', indexName),
      getIndex: (index, date) =>
        store.dispatch('indices/getIndex', { index, date }),
      getSector: (index, date) =>
        store.dispatch('indices/getSector', { index, date }),
      getTable: (index, date, marketProxy) =>
        store.dispatch('indices/getTable', { index, date, marketProxy }),
      resetState: () => store.dispatch('indices/resetState'),
      setShare: (share) => store.dispatch('shares/setShare', share),
      setShareDate: (date) => store.dispatch('shares/setShareDate', date),
      getShareTimeSeries: (share) =>
        store.dispatch('shares/getShareTimeSeries', { share }),
      getShareTableInfo: (share, date) =>
        store.dispatch('shares/getShareTableInfo', { share, date }),
      getShareDates: (share) =>
        store.dispatch('shares/getShareDates', { share }),
      goToSharePage: () => {
        router.push('shares#shares')
      },
    }
  },
  data() {
    return {
      INDEX_NAMES,
      INDEX_CODES,
      currentMarketProxy: '',
      currentDate: '',
    }
  },
  methods: {
    handleClick(index, date, marketProxy) {
      this.getTable(index, date, marketProxy)
      this.getIndex(index, date)
      this.getSector(index, date)
    },
    goToShare(share, date) {
      console.log(share)
      this.getShareTimeSeries(share)
      this.getShareTableInfo(share, date)
      this.findAndSetShare(share)
      this.setShareDate(date)
      this.getShareDates(share)
      this.goToSharePage()
    },
    findAndSetShare(share) {
      for (let item of this.shares) {
        console.log(item)
        if (item.alpha === share) {
          this.setShare(item)
        }
      }
    },
  },
  beforeUnmount() {
    this.resetState()
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

    .pie-charts-container {
      @media (max-width: 800px) {
        width: 80vw;
      }

      flex-wrap: wrap;
      display: flex;
      justify-content: center;
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
