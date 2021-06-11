import { shallowMount } from '@vue/test-utils'
import Highlights from '@/components/Highlights.vue'

describe('Highlights.vue', () => {
  it('renders the Highlights text', () => {
    const wrapper = shallowMount(Highlights, {})
    expect(wrapper.text()).toContain('All Share Index (QTR):')
  })
})
