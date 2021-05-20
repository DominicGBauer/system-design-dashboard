import { shallowMount } from '@vue/test-utils'
import Heading from '@/components/Heading.vue'

describe('Heading.vue', () => {
  it('renders the Heading text', () => {
    const wrapper = shallowMount(Heading, {})
    expect(wrapper.text()).toMatch('Project Dream Team Dashboard is a GO!!!')
  })
})