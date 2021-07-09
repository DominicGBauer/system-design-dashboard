<template>
  <div class="page-container">
    <h1 id="shares">Shares</h1>
    <div class="select-container">
      <p>
        <strong
          >Select a <span v-if="shareTimeSeries[0]">new </span>share</strong
        >
      </p>
      <VueMultiselect
        v-model="share"
        @select="updateShare"
        :options="shares"
        :searchable="true"
        label="instrument"
        :allow-empty="false"
        placeholder="Select a share"
      />
      <div class="button-container">
        <button @click="handleShareClick(share.alpha)" :disabled="!share">
          <span v-if="!shareTimeSeries[0]">Display Graph</span>
          <span v-else>Update Graph</span>
        </button>
      </div>
    </div>

    <template v-if="shareTimeSeries[0]">
      <div class="graph-container">
        <LineGraph :data="shareTimeSeries" :title="share.Instrument" />
      </div>

      <div class="select-container">
        <p>
          <strong>
            Select a <span v-if="shareTableInfo[0]">new</span> quarter to
            display share information for
          </strong>
        </p>
        <VueMultiselect
          v-model="date"
          :options="dates"
          :searchable="false"
          :allow-empty="false"
          @select="updateShareDate"
          placeholder="Select a quarter"
        />
        <div class="button-container">
          <button
            @click="getShareTableInfo(share.alpha, date)"
            :disabled="!date"
          >
            <span v-if="!shareTableInfo[0]"> Display Table </span>
            <span v-else> Update Table </span>
          </button>
        </div>
      </div>
    </template>

    <table v-if="shareTableInfo[0]" class="table-container">
      <caption>
        {{
          shareTableInfo[0].share
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
          <th scope="col">Index</th>
          <th scope="col">Beta</th>
          <th scope="col">R&sup2;</th>
          <th scope="col">Sub Sector</th>
          <th scope="col">Sector</th>
          <th scope="col">Super Sector</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="entry in shareTableInfo" :key="entry">
          <td scope="row" data-label="Index">{{ entry.index }}</td>
          <td
            data-label="Beta"
            :class="handleBetaColor(entry.p_value, entry.beta)"
          >
            {{ entry.beta ? entry.beta.toFixed(2) : 0 }}
          </td>
          <td data-label="R&sup2;">
            {{ entry.r_squared ? entry.r_squared.toFixed(2) : 0 }}%
          </td>
          <td data-label="Sub Sector">
            {{ entry.sub_sector }}
          </td>
          <td data-label="Sector">
            {{ entry.sector }}
          </td>
          <td data-label="Super Sector">
            {{ entry.super_sector }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import LineGraph from '../components/LineGraph.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  name: 'Shares',
  components: {
    VueMultiselect,
    LineGraph,
  },
  setup() {
    const store = useStore()

    return {
      shareTimeSeries: computed(() => store.state.shares.shareTimeSeries),
      shareTableInfo: computed(() => store.state.shares.shareTableInfo),
      shares: computed(() => store.state.shares.shares),
      dates: computed(() => store.state.shares.dates),
      date: computed(() => store.state.shares.date),
      share: computed(() => store.state.shares.share),
      getDates: (share) => store.dispatch('shares/getShareDates', { share }),
      updateShare: (share) => store.dispatch('shares/updateShare', share),
      updateShareDate: (date) => store.dispatch('shares/updateShareDate', date),
      getShareTimeSeries: (share) =>
        store.dispatch('shares/getShareTimeSeries', { share }),
      getShareTableInfo: (share, date) =>
        store.dispatch('shares/getShareTableInfo', { share, date }),
      resetState: () => store.dispatch('shares/resetState'),
    }
  },
  data() {
    return {
      betaColor: '',
    }
  },
  methods: {
    handleShareClick(share) {
      this.getShareTimeSeries(share)
      this.getDates(share)
    },
    handleDateClick(share, date) {
      this.getShareTableInfo(share, date)
    },
    handleBetaColor(pValue, beta) {
      let betaColor = ''
      if (beta < 0) {
        return (betaColor = 'red')
      }
      switch (true) {
        case pValue < 0.01:
          betaColor = 'green'
          break
        case pValue < 0.05:
          betaColor = 'blue'
          break
        default:
          break
      }

      return betaColor
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
  }

  .button-container {
    margin: 3rem 0 1rem 0;
  }
}

.graph-container {
  @media (max-width: 800px) {
    width: 95vw;
    margin: 0;
  }

  margin: 0 auto;
  width: 100%;
}

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

.red {
  color: red;
}

.blue {
  color: rgb(0, 153, 255);
}

.green {
  color: rgb(99, 206, 99);
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
