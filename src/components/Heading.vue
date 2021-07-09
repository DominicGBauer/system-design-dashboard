<template>
  <div class="heading-container">
    <div>
      <h1>AIFMRM Equity Risk Service Dashboard</h1>
      <h2>The Equity Risk Service at Your Fingertips</h2>
    </div>
    <img src="@/assets/main-page-image.svg" />
  </div>
</template>

<script>
export default {
  name: 'Heading',
}
</script>

<style lang="scss" scoped>
.heading-container {
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 2rem 10%;

  img {
    max-width: 800px;

    @media (max-width: 1400px) {
      max-width: 600px;
    }

    @media (max-width: 800px) {
      max-width: 100%;
    }
  }

  h1 {
    margin: 40px 0;
    font-size: 58px;
    font-weight: 900;

    @media (max-width: 800px) {
      font-size: 42px;
    }
  }

  h2 {
    font-size: 36px;
    font-weight: bold;
  }
}
</style>
