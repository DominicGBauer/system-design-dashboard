import { shallowMount } from '@vue/test-utils'
import Introduction from '@/components/Introduction.vue'

describe('Introduction.vue', () => {
  it('renders the Intro text', () => {
    const wrapper = shallowMount(Introduction, {})
    expect(wrapper.text()).toMatch('The Equity Risk Service at Your Fingertips')
  })
})
