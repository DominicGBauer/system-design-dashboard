import { shallowMount } from '@vue/test-utils'
import LineGraph from '@/components/LineGraph/LineGraph.vue'

describe('LineGraph.vue', () => {
  it('renders the LineGraph', () => {
    const wrapper = shallowMount(LineGraph, {})
    expect(wrapper.find('.chart').classes()).toContain('chart')
  })
})
