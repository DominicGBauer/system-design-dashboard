import { shallowMount } from '@vue/test-utils'
import Highlights from '@/components/Highlights.vue'

describe('Highlights.vue', () => {
  it('renders the Highlights text', () => {
    const wrapper = shallowMount(Highlights, {})
    expect(wrapper.text()).toMatch(
      'JSE Index:5Chemicals: 0.9 (-7%)Mining: 1.1 (25%)',
    )
  })
})
