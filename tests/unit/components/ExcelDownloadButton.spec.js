import { shallowMount } from '@vue/test-utils'
import ExcelDownloadButton from '@/components/ExcelDownloadButton.vue'

describe('ExcelDownloadButton.vue', () => {
  it('renders the ExcelDownloadButton text', () => {
    const wrapper = shallowMount(ExcelDownloadButton, {})
    expect(wrapper.find('button').classes()).toContain('download-button')
  })

  it('renders the ExcelDownloadButton and it looks the same', () => {
    const wrapper = shallowMount(ExcelDownloadButton, {})
    expect(wrapper.element).toMatchSnapshot()
  })
})
