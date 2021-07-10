import { shallowMount } from '@vue/test-utils'
import Tables from '@/views/Tables/Tables.vue'
import store from '@/store'
import router from '@/router'

describe('Tables.vue', () => {
  it('renders the Tables page', () => {
    const wrapper = shallowMount(Tables, {
      global: {
        plugins: [store, router],
      },
    })
    expect(wrapper.text()).toMatch('Synthetic Table')
  })
})
