<template>
  <div class="highlights-bar">
    <div class="indices">
      All Share Index (30 Days): {{ index1.value }}
      <span
        :class="{
          positive: index1.change >= 0,
          negative: !(index1.change >= 0),
        }"
        v-on:mount="index1.isPositive = index1.change <= 0"
      >
        ({{ index1.change }}%)
      </span>
    </div>

    <div class="indices">
      TOP 40 Index (30 Days): {{ index2 }}
      <span
        v-bind:class="{
          positive: index2Change >= 0,
          negative: !(index2Change >= 0),
        }"
        v-on:mount="index1Sign = index2Change <= 0"
      >
        ({{ index2Change }}%)
      </span>
    </div>

    <div class="indices">
      F&I Index (30 Days): {{ index3 }}
      <span
        v-bind:class="{
          positive: index3Change >= 0,
          negative: !(index3Change >= 0),
        }"
        v-on:mount="index3Sign = index3Change <= 0"
      >
        ({{ index3Change }}%)
      </span>
    </div>

    <div class="indices">
      Industrials Index (30 Days): {{ index4 }}
      <span
        v-bind:class="{
          positive: index4Change >= 0,
          negative: !(index4Change >= 0),
        }"
        v-on:mount="index4Sign = index4Change <= 0"
      >
        ({{ index4Change }}%)
      </span>
    </div>

    <div class="indices">
      Resources Index (30 Days): {{ index5 }}
      <span
        v-bind:class="{
          positive: index5Change >= 0,
          negative: !(index5Change >= 0),
        }"
        v-on:mount="index5Sign = index5Change <= 0"
      >
        ({{ index5Change }}%)
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
      period: 22,

      index1: {
        value: 0,
        change: 0,
        isPositive: false,
      },

      index2: [],
      index2Change: [],
      index2Sign: false,

      index3: [],
      index3Change: [],
      index3Sign: false,

      index4: [],
      index4Change: [],
      index4Sign: false,

      index5: [],
      index5Change: [],
      index5Sign: false,
    }
  },
  mounted() {
    //Getting the info for JSE All Share Index
    axios.get('/api/shares?share=J203').then(
      (response) =>
        (this.index1 = {
          value: response.data[1].value.toFixed(0),
          change: (
            (response.data[1].value / response.data[this.period].value - 1) *
            100
          ).toFixed(0),
        }),
    )

    //Getting the info for JSE Top 40 Index
    axios
      .get('/api/shares?share=J200')
      .then((response) => (this.index2 = response.data[1].value.toFixed(0)))
    axios
      .get('/api/shares?share=J200')
      .then(
        (response) =>
          (this.index2Change = (
            (response.data[1].value / response.data[this.period].value - 1) *
            100
          ).toFixed(0)),
      )

    //Getting the info for Financials and Industrials Index
    axios
      .get('/api/shares?share=J250')
      .then((response) => (this.index3 = response.data[1].value.toFixed(0)))
    axios
      .get('/api/shares?share=J250')
      .then(
        (response) =>
          (this.index3Change = (
            (response.data[1].value / response.data[this.period].value - 1) *
            100
          ).toFixed(0)),
      )

    //Getting the info for Industrials Index
    axios
      .get('/api/shares?share=J257')
      .then((response) => (this.index4 = response.data[1].value.toFixed(0)))
    axios
      .get('/api/shares?share=J257')
      .then(
        (response) =>
          (this.index4Change = (
            (response.data[1].value / response.data[this.period].value - 1) *
            100
          ).toFixed(0)),
      )

    //Getting the info for Resources Index
    axios
      .get('/api/shares?share=J258')
      .then((response) => (this.index5 = response.data[1].value.toFixed(0)))
    axios
      .get('/api/shares?share=J258')
      .then(
        (response) =>
          (this.index5Change = (
            (response.data[1].value / response.data[this.period].value - 1) *
            100
          ).toFixed(0)),
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
  font-size: 14px;
}

.positive {
  color: green;
}

.negative {
  color: red;
}
</style>
