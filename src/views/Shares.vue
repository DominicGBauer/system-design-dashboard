<template>
  <div class="page-container">
    <h1>Shares</h1>
    <div class="select-container">
      <p><strong>Select a Share</strong></p>
      <VueMultiselect
        v-model="currentShare"
        :options="shares.shares"
        :searchable="true"
        label="Instrument"
        :allow-empty="false"
      >
      </VueMultiselect>

      <div class="button-container">
        <button @click="handleClick(currentShare.alpha)">Display Graph</button>
      </div>
    </div>
  </div>

  <Loader :isLoading="isLoading" />

  <template v-if="data[0] && !isLoading">
    <div class="graph-container">
      <LineGraph :data="data" :title="currentShare.Instrument" />
    </div>
  </template>
</template>

<script>
import axios from 'axios'
import VueMultiselect from 'vue-multiselect'
import LineGraph from '../components/LineGraph.vue'
import Loader from '../components/Loader.vue'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  name: 'Shares',
  components: {
    VueMultiselect,
    LineGraph,
    Loader,
  },
  setup() {
    const store = useStore()
    store.dispatch('shares/getShares')
    return {
      shares: computed(() => store.state.shares),
    }
  },
  data() {
    return {
      data: [],
      currentShare: '',
      isLoading: false,
    }
  },
  methods: {
    getShareData(share) {
      this.isLoading = true
      axios
        .get(`/api/shares?share=${share}`)
        .then((response) => (this.data = this.transformData(response.data)))
        .then((this.isLoading = false))
    },
    handleClick(share) {
      this.getShareData(share)
    },
    transformData(data) {
      for (let item of data) {
        item.value = [item.name, item.value]
      }
      return data
    },
  },
}
</script>

<style lang="scss" scoped>
.page-container {
  margin: 2rem 20%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 48px;
  }

  .select-container {
    display: flex;
    flex-direction: column;
    width: 400px;

    @media (max-width: 800px) {
      width: 100%;
    }
  }

  .button-container {
    margin: 3rem 0 1rem 0;
  }
}

.graph-container {
  @media (max-width: 800px) {
    width: 100%;
  }

  margin: 0 auto;
  width: 50vw;
}
</style>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
