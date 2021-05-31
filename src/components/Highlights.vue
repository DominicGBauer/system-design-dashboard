<template>
  <div class="highlights-bar">
    <div class="betas">JSE Index:{{ jseIndex }}</div>
    <div class="betas">{{ industryIndices[1] }}: {{ industryBetas[1] }}</div>
    <div class="betas">{{ industryIndices[2] }}: {{ industryBetas[2] }}</div>
  </div>
</template>

<script>
export default {
  name: 'Highlights',
  data() {
    return {
      industryBetas: ['0.7276 (5%)', '0.9 (-7%)', '1.1 (25%)', '0.68 (-30%)'],
      industryIndices: [
        'Oil and Gas',
        'Chemicals',
        'Mining',
        'Forestry and Paper',
      ],
      jseIndex: '+15%',
    }
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
}
</style>
