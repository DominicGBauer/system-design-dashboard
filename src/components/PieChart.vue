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
import VChart from 'vue-echarts'
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
  props: {
    indexName: String,
    centeringLong: { type: String, default: '40%' },
    centeringLat: { type: String, default: '50%' },
  },
  setup(props) {
    const option = ref({
      title: {
        text: props.indexName,
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      series: [
        {
          name: props.indexName,
          type: 'pie',
          radius: '45%',
          center: [props.centeringLat, props.centeringLong],
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
      const info = await axios.get(
        `/api/index?date=2021-03-23&indexName=${props.indexName}`,
      )

      option.value.series = [
        {
          name: props.indexName,
          type: 'pie',
          radius: '45%',
          center: [props.centeringLat, props.centeringLong],
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
  height: 550px;
  width: 550px;
}
</style>
