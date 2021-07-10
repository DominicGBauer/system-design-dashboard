import { shallowMount } from '@vue/test-utils'
import Tables from '@/views/Tables/Tables.vue'
import store from '@/store'

describe('Tables.vue', () => {
  it('renders the Tables page', () => {
    const wrapper = shallowMount(Tables, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.text()).toMatch('Synthetic Table')
  })
})
