<template>
  <div class="page-container">
    <h1>Sectors</h1>
    <div class="select-container">
      <p>
        <strong>Select a <span v-if="sector[0]">new </span>sector</strong>
      </p>

      <VueMultiselect
        v-model="currentSector"
        :options="sectors"
        :searchable="true"
        label="sector"
        :allow-empty="false"
        placeholder="Select a sector"
      />

      <p>
        <strong>Select a <span v-if="sector[0]">new </span>date</strong>
      </p>
      <VueMultiselect
        v-model="currentDate"
        :options="dates"
        :searchable="false"
        :allow-empty="false"
        placeholder="Select a date"
      />

      <div class="button-container">
        <button
          @click="handleClick(currentSector.sector, currentDate)"
          :disabled="!currentSector || !currentDate"
        >
          <span v-if="!sector[0]">Display Table</span>
          <span v-else>Update Table</span>
        </button>
      </div>
    </div>

    <table v-if="sector[0]" class="table-container">
      <caption>
        {{
          sector[0].sector
        }}
        Table
        <br />
        <div class="table-legend">
          <p><span class="green">green</span> - 99% confidence interval</p>
          <p><span class="blue">blue</span> - 95% confidence interval</p>
          <p><span class="red">red</span> - negative value</p>
        </div>
      </caption>
      <thead>
        <tr>
          <th scope="col">Code</th>
          <th scope="col">% Traded</th>
          <th scope="col">Data Points</th>
          <th scope="col">Beta(J200)</th>
          <th scope="col">Beta(J203)</th>
          <th scope="col">Beta(J250)</th>
          <th scope="col">Beta(J257)</th>
          <th scope="col">Beta(J258)</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="entry in sector" :key="entry">
          <td
            scope="row"
            data-label="Code"
            @click="goToShare(entry.instrument, currentDate)"
            class="code"
          >
            <span>{{ entry.instrument }} </span>
            <img src="@/assets/navigate-icon.svg" />
          </td>
          <td data-label="% Traded">{{ entry.percentage_days_traded }}%</td>
          <td data-label="Data Points">{{ entry.data_points }}</td>
          <td
            data-label="Beta(J200)"
            :class="handleBetaColor(entry.j200_p_value, entry.j200_beta)"
          >
            {{ entry.j200_beta ? entry.j200_beta.toFixed(2) : 0 }}
          </td>
          <td
            data-label="Beta(J203)"
            :class="handleBetaColor(entry.j203_p_value, entry.j203_beta)"
          >
            {{ entry.j203_beta ? entry.j203_beta.toFixed(2) : 0 }}
          </td>
          <td
            data-label="Beta(J250)"
            :class="handleBetaColor(entry.j250_p_value, entry.j250_beta)"
          >
            {{ entry.j250_beta ? entry.j250_beta.toFixed(2) : 0 }}
          </td>
          <td
            data-label="Beta(J257)"
            :class="handleBetaColor(entry.j257_p_value, entry.j257_beta)"
          >
            {{ entry.j257_beta ? entry.j257_beta.toFixed(2) : 0 }}
          </td>
          <td
            data-label="Beta(J258)"
            :class="handleBetaColor(entry.j258_p_value, entry.j258_beta)"
          >
            {{ entry.j258_beta ? entry.j258_beta.toFixed(2) : 0 }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="isNoShare" class="no-shares-message">
      Unfortunately no shares fall under this sector for this date selection
    </div>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

export default {
  name: 'Sectors',
  components: {
    VueMultiselect,
  },
  setup() {
    const store = useStore()
    const router = useRouter()

    return {
      sector: computed(() => store.state.sectors.sector),
      sectors: computed(() => store.state.sectors.sectors),
      shares: computed(() => store.state.shares.shares),
      dates: computed(() => store.getters['dates/transformedDates']),
      getSector: (sector, date) =>
        store.dispatch('sectors/getSector', { sector, date }),
      resetState: () => store.dispatch('sectors/resetState'),
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
      currentSector: '',
      currentDate: '',
      isDisplayClicked: false,
    }
  },
  computed: {
    isNoShare() {
      return !this.sector[0] && this.isDisplayClicked
    },
  },
  methods: {
    handleBetaColor(pValue, beta) {
      let betaColor = ''
      if (beta < 0) {
        return (betaColor = 'red')
      }
      switch (true) {
        case pValue < 0.01 && this.handleBetaEqualToZero(beta) !== 0:
          betaColor = 'green'
          break
        case pValue < 0.05 && this.handleBetaEqualToZero(beta) !== 0:
          betaColor = 'blue'
          break
        default:
          break
      }

      return betaColor
    },
    handleBetaEqualToZero(beta) {
      return Math.round(beta * 10000) / 10000
    },
    goToShare(share, date) {
      this.findAndSetShare(share)
      this.getShareTimeSeries(share)
      this.getShareTableInfo(share, date)
      this.setShareDate(date)
      this.getShareDates(share)
      this.goToSharePage()
    },
    findAndSetShare(share) {
      for (let item of this.shares) {
        if (item.alpha === share) {
          this.setShare(item)
        }
        console.log('no share found')
      }
    },
    handleClick(share, date) {
      this.isDisplayClicked = true
      this.getSector(share, date)
    },
  },
  beforeUnmount() {
    this.resetState()
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  @media (max-width: 800px) {
    margin: 2rem 10%;
  }

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

    .button-container {
      margin: 3rem 0 1rem 0;
    }
  }

  .red {
    color: red;
  }

  .blue {
    color: rgb(0, 153, 255);
  }

  .green {
    color: rgb(99, 206, 99);
  }

  .table-container {
    margin-top: 36px;

    .table-legend {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 16px;

      p {
        margin: 2px;
      }

      @media (max-width: 800px) {
        align-items: center;

        p {
          margin: 4px;
        }
      }
    }

    .code {
      display: flex;
      justify-content: center;
      align-items: center;
      color: blue;
      cursor: pointer;
    }

    .code:hover {
      text-decoration: underline;
    }
  }

  .no-shares-message {
    display: flex;
    margin-top: 64px;
    font-size: 20px;
  }
}
</style>
