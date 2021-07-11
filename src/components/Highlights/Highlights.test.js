import { shallowMount } from '@vue/test-utils'
import Highlights from '@/components/Highlights/Highlights.vue'

describe('Highlights.vue', () => {
  it.skip('renders the Highlights text', () => {
    const wrapper = shallowMount(Highlights, {})
    expect(wrapper.classes()).toContain('highlights-bar')
  })
})
