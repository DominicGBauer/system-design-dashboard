import { shallowMount } from '@vue/test-utils'
import InterestRates from '@/views/InterestRates/InterestRates.vue'

describe('Home.vue', () => {
  it('renders the InterestRates page', () => {
    const wrapper = shallowMount(InterestRates, {})
    expect(wrapper.text()).toMatch('Interest Rate')
  })
})
