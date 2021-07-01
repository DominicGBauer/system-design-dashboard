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
import { ref, defineComponent, watchEffect } from 'vue'

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
  props: {
    indexName: String,
    centeringLong: { type: String, default: '50%' },
    centeringLat: { type: String, default: '50%' },
    data: {},
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
          data: props.data,
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

    watchEffect(
      () =>
        (option.value.series = [
          {
            name: props.indexName,
            type: 'pie',
            radius: '45%',
            center: [props.centeringLat, props.centeringLong],
            data: props.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)',
              },
            },
          },
        ]),
    )

    watchEffect(
      () => (option.value.title = { text: props.indexName, left: 'center' }),
    )

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
