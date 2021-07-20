import { shallowMount } from '@vue/test-utils'
import Indices from '@/views/Indices/Indices.vue'
import store from '@/store'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

describe('Indices.vue', () => {
  const router = createRouterMock({})
  beforeEach(() => {
    injectRouterMock(router)
  })
  it('renders the Indices page', () => {
    const wrapper = shallowMount(Indices, {
      global: {
        plugins: [store],
      },
    })

    expect(wrapper.text()).toContain('Indices')
  })
})
