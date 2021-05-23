import { shallowMount } from '@vue/test-utils'
import Heading from '@/components/Highlights.vue'

describe('Highlights.vue', () => {
  it('renders the relevant indices', () => {
    const wrapper = shallowMount(Heading, {})
    expect(wrapper.text()).toMatch(
      'Basic Materials Index:  0.9 (-7%) JSE Allshare Index: 0.74 (+5%)Industrials Index:  1.1 (25%)',
    )
  })
})
