<template>
  <div>
    <v-chart class="chart" :option="option" />
  </div>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { GridComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import axios from 'axios'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, defineComponent, onMounted } from 'vue'

use([CanvasRenderer, GridComponent, LineChart])

export default defineComponent({
  name: 'LineChart',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  setup() {
    const option = ref({
      title: {
        text: 'Share',
        left: 'center',
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Share',
          type: 'line',
          data: [],
        },
      ],
    })

    onMounted(async () => {
      const info = await axios.get('/api/shares?share=NPN')

      option.value.series = [
        {
          name: 'Share',
          type: 'line',
          data: info.data,
        },
      ]
    })

    return { option }
  },
})
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
