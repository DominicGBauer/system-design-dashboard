import { shallowMount } from '@vue/test-utils'
import Home from './Home.vue'

describe('Home.vue', () => {
  it('renders the  page', () => {
    const wrapper = shallowMount(Home, {})
    expect(wrapper.findComponent(Home).exists()).toBe(true)
  })
})
