<template>
  <nav :class="{ mobile: isMobile }">
    <template v-if="isMobile">
      <div class="mobile">
        <router-link to="/">
          <img src="@/assets/aifmrm_logo.svg" />
        </router-link>
        <Slide right closeOnNavigation width="300">
          <router-link to="/" class="link"> Home </router-link>
          <router-link to="/sectors" class="link">Sectors</router-link>
          <router-link to="/shares" class="link">Shares</router-link>
          <router-link to="/interest-rates" class="link"
            >Interest Rates</router-link
          >
          <router-link to="/worked-example" class="link"
            >Worked Example</router-link
          >
        </Slide>
      </div>
    </template>

    <template v-else>
      <div class="nav-container">
        <router-link to="/">
          <img src="@/assets/aifmrm_logo.svg" />
        </router-link>
        <ul class="links-container">
          <h6>
            <router-link to="/sectors">Sectors</router-link>
          </h6>
          <h6>
            <router-link to="/shares">Shares</router-link>
          </h6>
          <h6>
            <router-link to="/interest-rates">Interest Rates</router-link>
          </h6>
          <h6>
            <router-link to="/worked-example">Worked Example</router-link>
          </h6>
        </ul>
      </div>
    </template>
  </nav>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { Slide } from 'vue3-burger-menu'
import { useStore } from 'vuex'
export default {
  name: 'NavBar',
  components: {
    Slide,
  },
  setup() {
    const store = useStore()

    store.dispatch('mobile/setIsMobile')
    return {
      isMobile: computed(() => store.state.mobile.isMobile),
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  background-color: #2c3e50;

  &.mobile {
    background-color: white;
  }

  img {
    height: 50px;
  }

  .mobile {
    display: flex;
    justify-content: space-between;

    img {
      height: 50px;
      margin: 24px;
    }
    .link {
      color: white;
    }
  }

  .nav-container {
    margin: 0 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .links-container {
      display: flex;
      justify-content: space-around;

      a {
        font-size: 18px;
        color: white;
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
