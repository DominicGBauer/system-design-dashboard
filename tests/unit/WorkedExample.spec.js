import { shallowMount } from '@vue/test-utils'
import WorkedExample from '@/components/WorkedExample.vue'

describe('WorkedExample.vue', () => {
  it('renders the WorkedExample', () => {
    const wrapper = shallowMount(WorkedExample, {})
    expect(wrapper.text()).toContain('Worked Example')
  })

  it('renders the Worked Example and it looks the same', () => {
    const wrapper = shallowMount(WorkedExample, {})
    expect(wrapper.element).toMatchSnapshot()
  })
})
