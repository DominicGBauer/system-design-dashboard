<template>
  <div class="container">
    <div>
      <h1>AIFMRM Equity Risk Service Dashboard</h1>
      <h2>The Equity Risk Service at Your Fingertips</h2>
    </div>
    <img src="../assets/main-page-image.svg" />
  </div>
</template>

<script>
export default {
  name: 'Heading',
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  align-items: center;

  img {
    max-width: 800px;
  }

  h1 {
    margin: 40px 0;
    font-size: 58px;
    font-weight: 900;
  }

  h2 {
    font-size: 36px;
    font-weight: bold;
  }
}
</style>
