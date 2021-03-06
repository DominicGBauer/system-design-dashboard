import { shallowMount } from '@vue/test-utils'
import Introduction from './Introduction.vue'

describe('Introduction.vue', () => {
  it('renders the Intro text', () => {
    const wrapper = shallowMount(Introduction, {})
    expect(wrapper.text()).toContain('Intro')
  })
})
