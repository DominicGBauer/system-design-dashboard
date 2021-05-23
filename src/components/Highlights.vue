<template>
  <div class = "highlightsbar">
    <span > Industry 1 Index: </span> 
    <span id="left-highlight"> JSE Allshare Index: </span> <span id="right-highlight"> Industry 2 Index: </span> 
  </div>
</template>

<script>
export default {
  name: 'Highlights',
}
</script>

<style lang="scss" scoped>

#right-highlight{
    float:right;
}

#left-highlight{
    float:left;
}

.highlightsbar{
    background-color: grey;
    height: 30px;
    width: 100%;


}
</style>