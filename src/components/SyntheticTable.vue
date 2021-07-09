<template>
  <table v-if="data">
    <caption>
      {{
        indexName
      }}
      Synthetic Table
      <br />
      <div class="table-legend">
        <p><span class="green">green</span> - 99% confidence interval</p>
        <p><span class="blue">blue</span> - 95% confidence interval</p>
        <p><span class="red">red</span> - negative value</p>
      </div>
    </caption>
    <thead>
      <tr>
        <th scope="col">Instrument</th>
        <th scope="col">Code</th>
        <th scope="col">Beta</th>
        <th scope="col">Market Volatility</th>
        <th scope="col">Weights</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="entry in data" :key="entry">
        <td scope="row" data-label="Instrument">
          {{ entry.instrument }}
        </td>
        <td data-label="Code" @click="goToShare(entry.code)" class="code">
          <span>
            {{ entry.code }}
          </span>
          <img src="@/assets/navigate-icon.svg" />
        </td>
        <td
          data-label="Beta"
          :class="handleBetaColor(entry.p_value, entry.beta)"
        >
          {{ entry.beta ? entry.beta.toFixed(2) : 0 }}
        </td>
        <td data-label="Market Volatility">
          {{
            entry.market_volatility
              ? entry.market_volatility.toFixed(4) * 100
              : 0
          }}%
        </td>
        <td data-label="Weights">
          {{ entry.weights ? entry.weights.toFixed(2) : 0 }}%
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SyntheticTable',
  emits: ['goToShare'],
  props: {
    data: {},
    indexName: {
      type: String,
      default: '',
    },
  },
  methods: {
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
    goToShare(share) {
      return this.$emit('goToShare', share)
    },
  },
}
</script>

<style lang="scss" scoped>
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
