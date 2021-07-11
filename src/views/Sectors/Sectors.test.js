import { shallowMount } from '@vue/test-utils'
import Sectors from '@/views/Sectors/Sectors.vue'
import store from '@/store'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

describe('Sectors.vue', () => {
  const router = createRouterMock({})
  beforeEach(() => {
    injectRouterMock(router)
  })
  it('renders the Sectors page', () => {
    const wrapper = shallowMount(Sectors, {
      global: {
        plugins: [store],
      },
    })

    expect(wrapper.text()).toContain('Sectors')
  })
})
