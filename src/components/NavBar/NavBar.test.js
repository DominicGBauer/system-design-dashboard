import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar/NavBar.vue'
import { createRouterMock, injectRouterMock } from 'vue-router-mock'

describe('NavBar.vue', () => {
  const router = createRouterMock({})
  beforeEach(() => {
    injectRouterMock(router)
  })
  it('renders the NavBar', async () => {
    const wrapper = shallowMount(NavBar, {})
    expect(wrapper.classes()).toContain('mobile')
  })
})
