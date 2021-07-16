import { shallowMount } from '@vue/test-utils'
import YieldCurve from '@/views/InterestRates/components/YieldCurve.vue'
import store from '@/store'

describe('Home.vue', () => {
  it('renders the Yield Curve', () => {
    const wrapper = shallowMount(YieldCurve, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.text()).toMatch('Select a date')
  })
})
