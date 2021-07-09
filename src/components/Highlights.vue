<template>
  <div class="highlights-bar">
    <template v-for="index in listOfindices" :key="index">
      <div class="indices" v-if="index.dates[0]">
        {{ index.indexName }} (QTR): {{ index.dates[0].value }}
        <span
          :class="{
            positive: !index.isNegative,
            negative: index.isNegative,
          }"
        >
          ({{ index.changeInQuarter }}%)
        </span>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios'
import { HIGHLIGHTS_INDEX_CODES } from '../constants'

export default {
  name: 'Highlights',

  data() {
    return {
      daysInQuarter: 66,
      listOfindices: {
        J200: {
          dates: {},
          changeInQuarter: 0,
          isNegative: null,
          indexName: 'ALSI',
        },
        J203: {
          dates: {},
          changeInQuarter: 0,
          isNegative: null,
          indexName: 'Top 40',
        },
        J212: {
          dates: {},
          changeInQuarter: 0,
          isNegative: null,
          indexName: 'Fini 15',
        },
        J213: {
          dates: {},
          changeInQuarter: 0,
          isNegative: null,
          indexName: 'Fndi 30',
        },
        J210: {
          dates: {},
          changeInQuarter: 0,
          isNegative: null,
          indexName: 'Resi 10',
        },
      },
      HIGHLIGHTS_INDEX_CODES,
    }
  },
  mounted() {
    this.getShareData(
      Object.values(this.HIGHLIGHTS_INDEX_CODES),
      this.daysInQuarter,
    )
  },
  methods: {
    getShareData(indices, daysInQuarter) {
      for (let index of indices) {
        axios
          .get(`/api/highlights?share=${index}&daysInQuarter=${daysInQuarter}`)
          .then((response) => (this.listOfindices[index].dates = response.data))
          .then(
            (data) =>
              (this.listOfindices[index].changeInQuarter =
                this.calculateChangeInQuarter(
                  data[0].value,
                  data[data.length - 1].value,
                )),
          )
          .then((change) => (this.listOfindices[index].isNegative = change < 0))
      }
    },
    calculateChangeInQuarter(currentQuarterValue, previousQuarterValue) {
      const changeInQuarter = (
        (currentQuarterValue / previousQuarterValue - 1) *
        100
      ).toFixed(0)
      return changeInQuarter
    },
  },
}
</script>

<style lang="scss" scoped>
.highlights-bar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 10%;
  background-color: #eeeeee;
}

.indices {
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>
