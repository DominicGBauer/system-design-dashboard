import { shallowMount } from '@vue/test-utils'
import SyntheticTable from '@/components/SyntheticTable.vue'

describe('SyntheticTable.vue', () => {
  it('it shows the text describing the table', () => {
    const wrapper = shallowMount(SyntheticTable, {})
    expect(wrapper.text()).toContain('This table goes beyond the composite risk statistics of the report and shows a synthetic construction of the most important risk statistics for an index based on its constituents. These statistics are then aggregated as per the constituents weight in the index. Below is an example of such a synthethic table using the All Share Index')
  })
})

