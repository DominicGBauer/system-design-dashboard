import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('renders the Footer text', () => {
    const wrapper = shallowMount(Footer, {})
    expect(wrapper.find('footer').find('h4').text()).toMatch(
      'AFRICAN INSTITUTE OF FINANCIAL MARKETS AND RISK MANAGEMENT',
    )
  })

  it('renders the Footer and it looks the same', () => {
    const wrapper = shallowMount(Footer, {})
    expect(wrapper.element).toMatchSnapshot()
  })
})
