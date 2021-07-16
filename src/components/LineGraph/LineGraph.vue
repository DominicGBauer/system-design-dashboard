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
import { ref, defineComponent, watchEffect } from 'vue'

use([CanvasRenderer, GridComponent, LineChart])

export default defineComponent({
  name: 'LineChart',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  props: {
    title: String,
    data: {},
    lineGraphType: {
      type: String,
      default: 'time',
    },
    xAxisData: {},
  },
  setup(props) {
    const option = ref({
      title: {
        text: props.title,
        left: 'center',
      },
      tooltip: {
        trigger: 'axis',
        formatter: function (params) {
          if (props.lineGraphType === 'time') {
            params = params[0]
            var date = new Date(params.name)
            return (
              date.getDate() +
              '/' +
              (date.getMonth() + 1) +
              '/' +
              date.getFullYear() +
              ' : ' +
              params.value[1]
            )
          }
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: props.lineGraphType,
        splitLine: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: props.title,
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: props.data,
        },
      ],
    })

    watchEffect(
      () =>
        (option.value.series = [
          {
            name: props.title,
            type: 'line',
            showSymbol: false,
            hoverAnimation: false,
            data: props.data,
          },
        ]),
    )

    watchEffect(
      () => (option.value.title = { text: props.title, left: 'center' }),
    )

    watchEffect(
      () =>
        (option.value.xAxis = {
          type: props.lineGraphType,
          data: props.xAxisData,
          splitLine: {
            show: false,
          },
        }),
    )

    return { option }
  },
})
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>
