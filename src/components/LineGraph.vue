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

import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, defineComponent } from 'vue'
import axios from 'axios'

use([CanvasRenderer, GridComponent, LineChart])

axios.get('/api').then((response) => {
  console.log(response.data)
})

export default defineComponent({
  name: 'LineChart',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  setup: () => {
    const option = ref({
      title: {
        text: 'Car Make',
        left: 'center',
      },
      xAxis: {
        type: 'category',
        data: [
          'alfa-romero',
          'audi',
          'bmw',
          'chevrolet',
          'dodge',
          'honda',
          'isuzu',
          'jaguar',
          'mazda',
          'mercedes-benz',
          'mercury',
          'mitsubishi',
          'nissan',
          'peugot',
          'plymouth',
          'porsche',
          'renault',
          'saab',
          'subaru',
          'toyota',
          'volkswagen',
          'volvo',
        ],
        axisLabel: {
          interval: 0,
          rotate: 30,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'Car Make',
          type: 'line',
          data: [
            { name: 'alfa-romero', value: 3 },
            { name: 'audi', value: 7 },
            { name: 'bmw', value: 8 },
            { name: 'chevrolet', value: 3 },
            { name: 'dodge', value: 9 },
            { name: 'honda', value: 13 },
            { name: 'isuzu', value: 4 },
            { name: 'jaguar', value: 3 },
            { name: 'mazda', value: 17 },
            { name: 'mercedes-benz', value: 8 },
            { name: 'mercury', value: 1 },
            { name: 'mitsubishi', value: 13 },
            { name: 'nissan', value: 18 },
            { name: 'peugot', value: 11 },
            { name: 'plymouth', value: 7 },
            { name: 'porsche', value: 5 },
            { name: 'renault', value: 2 },
            { name: 'saab', value: 6 },
            { name: 'subaru', value: 12 },
            { name: 'toyota', value: 32 },
            { name: 'volkswagen', value: 12 },
            { name: 'volvo', value: 11 },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
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
