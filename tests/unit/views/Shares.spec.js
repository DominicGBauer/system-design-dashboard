import { shallowMount } from '@vue/test-utils'
import store from '@/store'
import Shares from '@/views/Shares.vue'

describe('Shares.vue', () => {
  it('renders the Shares page', () => {
    const wrapper = shallowMount(Shares, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.text()).toMatch('Shares')
  })
})
