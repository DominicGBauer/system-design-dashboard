<template>
  <div class="highlights-bar">
    <div class="betas">
      All Share Index (30 Days): {{ index1 }}
      <span
        id="allShareNumber"
        v-bind:class="{
          positive: index1Change >= 0,
          negative: !(index1Change >= 0),
        }"
        v-on:mount="index1Sign = index1Change <= 0"
      >
        ({{ index1Change }}%)
      </span>
    </div>

    <div class="betas">
      TOP 40 Index (30 Days): {{ index2 }}
      <span
        id="allShareNumber"
        v-bind:class="{
          positive: index2Change >= 0,
          negative: !(index2Change >= 0),
        }"
        v-on:mount="index1Sign = index2Change <= 0"
      >
        ({{ index2Change }}%)
      </span>
    </div>

    <div class="betas">
      F&I Index (30 Days): {{ index3 }}
      <span
        id="allShareNumber"
        v-bind:class="{
          positive: index3Change >= 0,
          negative: !(index3Change >= 0),
        }"
        v-on:mount="index3Sign = index3Change <= 0"
      >
        ({{ index3Change }}%)
      </span>
    </div>

    <div class="betas">
      Industrials Index (30 Days): {{ index4 }}
      <span
        id="allShareNumber"
        v-bind:class="{
          positive: index4Change >= 0,
          negative: !(index4Change >= 0),
        }"
        v-on:mount="index4Sign = index4Change <= 0"
      >
        ({{ index4Change }}%)
      </span>
    </div>

    <div class="betas">
      Resources Index (30 Days): {{ index5 }}
      <span
        id="allShareNumber"
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

var period = 22

export default {
  name: 'Highlights',
  data() {
    return {
      period: 22,

      index1: [1, 2, 3],
      index1Change: [1, 2, 3],
      index1Sign: false,

      index2: [1, 2, 3],
      index2Change: [1, 2, 3],
      index2Sign: false,

      index3: [1, 2, 3],
      index3Change: [1, 2, 3],
      index3Sign: false,

      index4: [1, 2, 3],
      index4Change: [1, 2, 3],
      index4Sign: false,

      index5: [1, 2, 3],
      index5Change: [1, 2, 3],
      index5Sign: false,
    }
  },
  mounted() {
    //Getting the info for JSE All Share Index
    axios
      .get('/api/shares?share=J203')
      .then((response) => (this.index1 = response.data[1].value.toFixed(0)))
    axios
      .get('/api/shares?share=J203')
      .then(
        (response) =>
          (this.index1Change = (
            (response.data[1].value / response.data[period].value - 1) *
            100
          ).toFixed(0)),
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
            (response.data[1].value / response.data[period].value - 1) *
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
            (response.data[1].value / response.data[period].value - 1) *
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
            (response.data[1].value / response.data[period].value - 1) *
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
            (response.data[1].value / response.data[period].value - 1) *
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

.betas {
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
