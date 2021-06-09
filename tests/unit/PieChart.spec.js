import { shallowMount } from '@vue/test-utils'
import LineGraph from '@/components/LineGraph.vue'

describe('LineGraph.vue', () => {
  it('renders the LineGraph', () => {
    const wrapper = shallowMount(LineGraph, {})
    expect(wrapper.find('.pie-chart').classes()).toContain('pie-chart')
  })
})
