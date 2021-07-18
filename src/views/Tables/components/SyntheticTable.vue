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
        <th scope="col">Code</th>
        <th scope="col">Beta</th>
        <th scope="col">Market Volatility</th>
        <th scope="col">Weights</th>
        <th scope="col">Beta Contribution</th>
        <th scope="col">Volatility Contribution</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="entry in data" :key="entry">
        <td
          scope="row"
          data-label="Code"
          @click="goToShare(entry.code)"
          class="code-container"
        >
          <div class="code">
            <span>
              {{ entry.code }}
            </span>
            <img src="@/assets/navigate-icon.svg" />
          </div>
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
              ? Math.round(entry.market_volatility * 10000) / 100
              : 0
          }}%
        </td>
        <td data-label="Weights">
          {{ entry.weights ? Math.round(entry.weights * 10000) / 100 : 0 }}%
        </td>
        <td data-label="Beta Contribution">
          {{
            entry.weights && entry.beta
              ? (entry.weights * entry.beta).toFixed(2)
              : 0
          }}
        </td>
        <td data-label="Volatility Contribution">
          {{
            entry.weights && entry.market_volatility
              ? (entry.weights * entry.market_volatility).toFixed(2)
              : 0
          }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { handleBetaColor } from '@/utils'

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
    handleBetaColor,
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

.code-container {
  @media (max-width: 800px) {
    justify-content: space-between;
    align-items: center;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  color: blue;
  cursor: pointer;

  .code {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .code:hover {
    text-decoration: underline;
  }
}
</style>
