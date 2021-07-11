import SUT from './mobile'

describe('mobile mutations ', () => {
  describe('setIsMobile', () => {
    it('adds isMobile to the state', () => {
      const isMobile = true
      const state = {
        isMobile: null,
      }

      SUT.mutations.setIsMobile(state, isMobile)

      expect(state).toEqual({
        isMobile: true,
      })
    })
  })
})
