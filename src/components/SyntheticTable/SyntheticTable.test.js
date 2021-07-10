import { mount } from '@vue/test-utils'
import SyntheticTable from '@/components/SyntheticTable/SyntheticTable.vue'

describe('SyntheticTable.vue', () => {
  it('it shows the text describing the table', () => {
    const wrapper = mount(SyntheticTable, {
      props: {
        data: {},
      },
      data() {
        return {
          data: 'adding_data_prop_for_v_if',
        }
      },
    })
    expect(wrapper.find('table').find('caption').text()).toContain(
      'Synthetic Table',
    )
  })
})
