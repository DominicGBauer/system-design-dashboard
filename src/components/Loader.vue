<template>
  <div v-if="isLoading" class="loader">
    <img src="../assets/loader.svg" />
  </div>
</template>

<script>
export default {
  name: 'Loadder',
  props: {
    isLoading: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.loader {
  display: flex;
  justify-content: center;

  img {
    width: 120px;
  }
}
</style>
