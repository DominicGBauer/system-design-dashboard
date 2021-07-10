import { shallowMount } from '@vue/test-utils'
import NavBar from '@/components/NavBar/NavBar.vue'
import router from '@/router'

describe('NavBar.vue', () => {
  it('renders the NavBar', async () => {
    const wrapper = shallowMount(NavBar, {
      global: {
        plugins: [router],
      },
    })
    expect(wrapper.classes()).toContain('mobile')
  })
})
