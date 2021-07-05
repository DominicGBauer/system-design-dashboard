import { shallowMount } from '@vue/test-utils'
import WorkedExample from '@/views/WorkedExample.vue'

describe('WorkedExample.vue', () => {
  it('renders the WorkedExample page', () => {
    const wrapper = shallowMount(WorkedExample, {})
    expect(wrapper.text()).toContain('Worked Example')
  })

  it('renders the Worked Example and it looks the same', () => {
    const wrapper = shallowMount(WorkedExample, {})
    expect(wrapper.element).toMatchSnapshot()
  })
})
