import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

describe('Footer.vue', () => {
  it('renders the Footer text', () => {
    const wrapper = shallowMount(Footer, {})
    expect(wrapper.text()).toMatch(
      'AFRICAN INSTITUTE OF FINANCIAL MARKETS AND RISK MANAGEMENTFaculty of CommerceUniversity of Cape Town © 2021 Copyright: AIFMRM',
    )
  })
})
