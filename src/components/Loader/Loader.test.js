import { mount } from '@vue/test-utils'
import Loader from '@/components/Loader/Loader.vue'

describe('Loader.vue', () => {
  it('renders the Loader', () => {
    const wrapper = mount(Loader, {
      props: {
        isLoading: true,
      },
    })
    expect(wrapper.classes()).toContain('loader')
  })

  it('renders the Loader and it looks the same', () => {
    const wrapper = mount(Loader, {})
    expect(wrapper.element).toMatchSnapshot()
  })
})
