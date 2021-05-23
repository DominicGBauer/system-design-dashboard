<template>
  <div class="highlightsbar">
    <span id="center-highlight">
      {{ industryindices[highlightsindex1] }}
      {{ industrybetas[highlightsindex1] }}
    </span>
    <span id="left-highlight"> JSE Allshare Index: {{ jseindex }}</span>
    <span id="right-highlight">
      {{ industryindices[highlightsindex2] }}
      {{ industrybetas[highlightsindex2] }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
  data() {
    return {
      industrybetas: ['0.7276 (5%)', '0.9 (-7%)', '1.1 (25%)', '0.68 (-30%)'],
      industryindices: [
        'Oil and Gas Index: ',
        'Basic Materials Index: ',
        'Industrials Index: ',
        'Consumer Goods Index: ',
      ],
      jseindex: '0.74 (+5%)',
      highlightsindex1: 1,
      highlightsindex2: 2,
    }
  },
}


</script>

<style lang="scss" scoped>
#right-highlight {
  float: right;
  text-transform: uppercase;
  font-weight: bold;
}

#center-highlight {
  text-transform: uppercase;
  font-weight: bold;
}

#left-highlight {
  float: left;
  text-transform: uppercase;
  font-weight: bold;
}

.highlightsbar {
  background-color: lightblue;
  height: 25px;
  width: 100%;
}
</style>
