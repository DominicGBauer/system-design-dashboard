<template>
  <v-chart class="chart" :option="option" />
  <div class="ui icon input" style="width: 100%">
    <input type="text" placeholder="Search..." v-model="searchQuery" />
    <i class="search icon"></i>
  </div>
  <div class="ui cards" style="margin: 10px">
    <div
      class="card ui fluid"
      v-for="item in searchedItems"
      :key="item.name"
      style="margin: 0"
    >
      <div class="content">
        <div class="header">{{ item.name }}</div>
      </div>
    </div>
  </div>
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
import axios from 'axios'
import { onMounted, reactive, ref, computed, defineComponent } from 'vue'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

export default defineComponent({
  name: 'SearchBar',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  setup() {
    const items = reactive([])

    const searchQuery = ref('')

    const searchedItems = computed(() => {
      return items.filter((item) => {
        return (
          item.name.toLowerCase().indexOf(searchQuery.value.toLowerCase()) != -1
        )
      })
    })

    const option = ref({
      title: {
        text: 'Traffic Sources',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
      },
      series: [
        {
          name: 'Traffic Sources',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Ad Networks' },
            { value: 135, name: 'Video Ads' },
            { value: 1548, name: 'Search Engines' },
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

    option.value.series = [
      {
        name: 'Lol',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: items,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ]

    onMounted(async () => {
      try {
        const list = await axios.get('/api/top40?date=2021-03-23')

        list.data.forEach((doc) => {
          items.push(doc)
        })
      } catch (e) {
        console.log('Error Loading Items')
      }
    })

    return { option, searchedItems, searchQuery }
  },
})
</script>

<style lang="scss" scoped>
h1 {
  margin: 40px 0;
}
.chart {
  height: 500px;
}
</style>
