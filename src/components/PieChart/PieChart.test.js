import { shallowMount } from '@vue/test-utils'
import PieChart from '@/components/PieChart/PieChart.vue'

describe('PieChart.vue', () => {
  it('renders the PieChart', () => {
    const wrapper = shallowMount(PieChart, {})
    expect(wrapper.find('.pie-chart').classes()).toContain('pie-chart')
  })
})
