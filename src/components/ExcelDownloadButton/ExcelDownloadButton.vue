<template>
  <download-csv :data="data" :name="name">
    <button class="download-button">
      {{ text }}
      <img src="@/assets/file_download_white_24dp.svg" />
    </button>
  </download-csv>
</template>

<script>
export default {
  name: 'ExcelDownloadButton',
  props: {
    text: String,
    name: String,
    data: {},
  },
}
</script>

<style lang="scss" scoped>
.download-button {
  margin: 1rem;
  padding: 1rem;
}
</style>
