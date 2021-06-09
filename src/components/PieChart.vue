<template>
  <v-chart class="pie-chart" :option="option" />
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, defineComponent, onMounted } from 'vue'
import axios from 'axios'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

export default defineComponent({
  name: 'PieChart',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  setup() {
    const option = ref({
      title: {
        text: 'Top 40',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      series: [
        {
          name: 'Top 40',
          type: 'pie',
          radius: '45%',
          center: ['40%', '50%'],
          data: [],
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

    onMounted(async () => {
      const info = await axios.get('/api/top40?date=2021-03-23')

      option.value.series = [
        {
          name: 'Top 40',
          type: 'pie',
          radius: '45%',
          center: ['40%', '50%'],
          data: info.data,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ]
    })

    return { option }
  },
})
</script>

<style scoped>
.pie-chart {
  height: 500px;
}
</style>
