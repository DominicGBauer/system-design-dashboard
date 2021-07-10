import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar/NavBar.vue'

describe('NavBar.vue', () => {
  it('renders the NavBar', () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper.classes()).toContain('mobile')
  })
})
