import { shallowMount } from '@vue/test-utils'
import Faq from '@/components/Faq.vue'

describe('Faq.vue', () => {
  it('renders the Faq', () => {
    const wrapper = shallowMount(Faq, {})
    expect(wrapper.text()).toMatch('FAQ')
  })
})
