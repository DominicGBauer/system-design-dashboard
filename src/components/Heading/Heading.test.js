import { shallowMount } from '@vue/test-utils'
import Heading from '@/components/Heading/Heading.vue'

describe('Heading.vue', () => {
  it('renders the Heading text', () => {
    const wrapper = shallowMount(Heading, {})
    expect(wrapper.text()).toMatch('AIFMRM Equity Risk Service Dashboard')
  })
})
