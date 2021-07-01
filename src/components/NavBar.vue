<template>
  <nav>
    <div class="nav-container">
      <router-link to="/">
        <img src="../assets/aifmrm_logo.svg" />
      </router-link>
      <ul class="links-container">
        <h6>
          <router-link to="/faq">FAQ</router-link>
        </h6>
        <h6>
          <router-link to="/worked-example">Worked Example</router-link>
        </h6>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #2c3e50;

  .nav-container {
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
      height: 50px;
    }

    .links-container {
      display: flex;
      justify-content: space-around;

      a {
        font-size: 18px;
        color: rgb(255, 255, 255);
        text-decoration: none;
        margin-left: 48px;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
