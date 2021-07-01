import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('renders the NavBar', () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper.text()).toContain('FAQ')
  })
})
