<template>
  <div class="footer-container">
    <footer>
      <h4>AFRICAN INSTITUTE OF FINANCIAL MARKETS AND RISK MANAGEMENT</h4>
      <p>Faculty of Commerce</p>
      <p>University of Cape Town</p>
      <p>
        © 2021 Copyright:
        <a href="http://www.aifmrm.uct.ac.za/"> AIFMRM</a>
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  margin-top: auto;

  footer {
    margin-top: 5%;
    background-color: #2c3e50;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;

    p {
      margin: 6px;
    }

    a {
      color: green;
    }
  }
}
</style>
