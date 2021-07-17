import { shallowMount } from '@vue/test-utils'
import TimeSeries from '@/views/InterestRates/components/TimeSeries.vue'
import store from '@/store'

describe('Home.vue', () => {
  it('renders the Yield Curve', () => {
    const wrapper = shallowMount(TimeSeries, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.text()).toMatch('Select a tenor')
  })
})
