<template>
  <p>{{ text }}</p>
</template>

<script>
export default {
  name: 'Paragraph',
  props: {
    text: String,
  },
}
</script>

<style lang="scss" scoped>
p {
  text-align: left;
}
</style>
