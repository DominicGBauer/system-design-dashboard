<template>
  <div class="highlights-bar">
    <div class="indices">
      All Share Index (QTR): {{ allShare.value }}
      <span
        :class="{
          positive: allShare.change >= 0,
          negative: !(allShare.change >= 0),
        }"
      >
        ({{ allShare.change }}%)
      </span>
    </div>

    <div class="indices">
      Top 40 Index (QTR): {{ top40.value }}
      <span
        :class="{
          positive: top40.change >= 0,
          negative: !(top40.change >= 0),
        }"
      >
        ({{ top40.change }}%)
      </span>
    </div>

    <div class="indices">
      F&I Index (QTR): {{ fAndI.value }}
      <span
        :class="{
          positive: fAndI.change >= 0,
          negative: !(fAndI.change >= 0),
        }"
      >
        ({{ fAndI.change }}%)
      </span>
    </div>

    <div class="indices">
      Industrials Index (QTR): {{ industrials.value }}
      <span
        :class="{
          positive: industrials.change >= 0,
          negative: !(industrials.change >= 0),
        }"
      >
        ({{ industrials.change }}%)
      </span>
    </div>

    <div class="indices">
      Resources Index (QTR): {{ resources.value }}
      <span
        :class="{
          positive: resources.change >= 0,
          negative: !(resources.change >= 0),
        }"
        v-on:mount="resources.isNegative = resources.change <= 0"
      >
        ({{ resources.change }}%)
      </span>
    </div>
  </div>
</template>

<script>
//Axios stuff
import axios from 'axios'

export default {
  name: 'Highlights',
  data() {
    return {
      period: 66,

      allShare: {
        value: 0,
        change: 0,
        isNegative: false,
      },

      top40: {
        value: 0,
        change: 0,
        isNegative: false,
      },

      fAndI: {
        value: 0,
        change: 0,
        isNegative: false,
      },

      industrials: {
        value: 0,
        change: 0,
        isNegative: false,
      },

      resources: {
        value: 0,
        change: 0,
        isNegative: false,
      },
    }
  },
  mounted() {
    axios.get('/api/shares?share=J203').then(
      (response) =>
        (this.allShare = {
          value: response.data[response.data.length - 1].value.toFixed(0),
          change: (
            (response.data[response.data.length - 1].value /
              response.data[response.data.length - this.period].value -
              1) *
            100
          ).toFixed(0),
        }),
    )

    axios.get('/api/shares?share=J200').then(
      (response) =>
        (this.top40 = {
          value: response.data[response.data.length - 1].value.toFixed(0),
          change: (
            (response.data[response.data.length - 1].value /
              response.data[response.data.length - this.period].value -
              1) *
            100
          ).toFixed(0),
        }),
    )

    axios.get('/api/shares?share=J250').then(
      (response) =>
        (this.fAndI = {
          value: response.data[response.data.length - 1].value.toFixed(0),
          change: (
            (response.data[response.data.length - 1].value /
              response.data[response.data.length - this.period].value -
              1) *
            100
          ).toFixed(0),
        }),
    )

    axios.get('/api/shares?share=J257').then(
      (response) =>
        (this.industrials = {
          value: response.data[response.data.length - 1].value.toFixed(0),
          change: (
            (response.data[response.data.length - 1].value /
              response.data[response.data.length - this.period].value -
              1) *
            100
          ).toFixed(0),
        }),
    )

    axios.get('/api/shares?share=J258').then(
      (response) =>
        (this.resources = {
          value: response.data[response.data.length - 1].value.toFixed(0),
          change: (
            (response.data[response.data.length - 1].value /
              response.data[response.data.length - this.period].value -
              1) *
            100
          ).toFixed(0),
        }),
    )
  },
}
</script>

<style lang="scss" scoped>
.highlights-bar {
  display: flex;
}

.indices {
  flex: 1 1 auto;
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
