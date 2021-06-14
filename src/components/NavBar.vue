<template>
  <nav>
    <img src="../assets/aifmrm_logo.svg" />
    <ul class="links-container">
      <h6>
        <a href="#graphs">Visualisation</a>
      </h6>
      <h6>
        <a href="#faq">FAQ</a>
      </h6>
      <h6>
        <a href="#example">Worked Example</a>
      </h6>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  img {
    padding: 24px;
    height: 100px;
  }

  .links-container {
    display: flex;
    justify-content: space-around;
    width: 40%;

    a {
      font-size: 18px;
      color: rgb(255, 255, 255);
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
}
</style>
