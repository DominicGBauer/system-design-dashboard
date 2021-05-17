import { shallowMount } from '@vue/test-utils'
import Dashboard from '@/components/Dashboard.vue'

describe('Dashboard.vue', () => {
  it('renders the dashboard', () => {
    const wrapper = shallowMount(Dashboard, {})
    expect(wrapper.classes()).toContain('chart')
  })
})
