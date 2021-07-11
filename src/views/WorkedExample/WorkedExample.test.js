import { shallowMount } from '@vue/test-utils'
import WorkedExample from '@/views/WorkedExample/WorkedExample.vue'
import store from '../../store'

describe('WorkedExample.vue', () => {
  it('renders the WorkedExample page', () => {
    const wrapper = shallowMount(WorkedExample, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.text()).toContain('Worked Example')
  })

  it('renders the Worked Example and it looks the same', () => {
    const wrapper = shallowMount(WorkedExample, {
      global: {
        plugins: [store],
      },
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
