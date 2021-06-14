import { shallowMount } from '@vue/test-utils'
import PieCharts from '@/components/PieCharts.vue'

describe('PieCharts.vue', () => {
  it('renders the PieCharts', () => {
    const wrapper = shallowMount(PieCharts, {})
    expect(wrapper.text()).toContain('Graphs')
  })
})
