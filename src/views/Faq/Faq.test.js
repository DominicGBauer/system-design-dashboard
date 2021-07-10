import { shallowMount } from '@vue/test-utils'
import Faq from '@/views/Faq/Faq.vue'

describe('Faq.vue', () => {
  it('renders the Faq', () => {
    const wrapper = shallowMount(Faq, {})
    expect(wrapper.text()).toMatch('FAQ')
  })

  it('renders the FAQ and it looks the same', () => {
    const wrapper = shallowMount(Faq, {})
    expect(wrapper.element).toMatchSnapshot()
  })
})
