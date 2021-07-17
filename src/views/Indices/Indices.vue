<template>
  <div class="page-container">
    <h1>Indices</h1>
    <div class="select-container">
      <p>
        <strong
          >Select <span v-if="!indices[0]">an</span
          ><span v-if="indices[0]">a new</span> index type</strong
        >
      </p>

      <VueMultiselect
        v-model="currentIndexType"
        :options="indexTypes"
        :searchable="true"
        label="index_type"
        :allow-empty="false"
        placeholder="Select an index type"
      />

      <p>
        <strong>Select a <span v-if="indices[0]">new </span>date</strong>
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
          @click="handleClick(currentIndexType.index_type, currentDate)"
          :disabled="!currentIndexType || !currentDate"
        >
          <span v-if="!indices[0]">Display Table</span>
          <span v-else>Update Table</span>
        </button>
      </div>
    </div>

    <table v-if="indices[0]" class="table-container">
      <caption>
        {{
          currentIndexType.index_type
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
          <th scope="col">Name</th>
          <th scope="col">Data Points</th>
          <th scope="col">Beta(J200)</th>
          <th scope="col">Beta(J203)</th>
          <th scope="col">Beta(J250)</th>
          <th scope="col">Beta(J257)</th>
          <th scope="col">Beta(J258)</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="entry in indices" :key="entry">
          <td scope="row" data-label="Code">
            <span>{{ entry.instrument }} </span>
          </td>
          <td data-label="Name">{{ entry.index_name }}</td>
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
    <div v-if="isNoIndex" class="no-shares-message">
      Unfortunately no index falls under this index type for this date selection
    </div>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  name: 'Sectors',
  components: {
    VueMultiselect,
  },
  setup() {
    const store = useStore()

    return {
      indices: computed(() => store.state.indices.indexTypeIndices),
      indexTypes: computed(() => store.state.indices.indexTypes),
      dates: computed(() => store.getters['dates/transformedDates']),
      getIndexTypeIndices: (indexType, date) =>
        store.dispatch('indices/getIndexTypeIndices', { indexType, date }),
      resetState: () => store.dispatch('indices/resetState'),
    }
  },
  data() {
    return {
      currentIndexType: '',
      currentDate: '',
      isDisplayClicked: false,
    }
  },
  computed: {
    isNoIndex() {
      return !this.indices[0] && this.isDisplayClicked
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
    handleClick(indexType, date) {
      this.isDisplayClicked = true
      this.getIndexTypeIndices(indexType, date)
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
  }
}
</style>
