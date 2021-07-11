import { shallowMount } from '@vue/test-utils'
import Tables from '@/views/Tables/Tables.vue'
import store from '@/store'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

describe('Tables.vue', () => {
  const router = createRouterMock({})
  beforeEach(() => {
    injectRouterMock(router)
  })
  it('renders the Tables page', () => {
    const wrapper = shallowMount(Tables, {
      global: {
        plugins: [store],
      },
    })

    expect(wrapper.text()).toMatch('Synthetic Table')
  })
})
