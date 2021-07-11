import SUT from './mobile'

describe('mobile actions', () => {
  describe('setIsMobile', () => {
    it('setIsMobile action to run', async () => {
      const commit = jest.fn()
      const isMobile = true

      await SUT.actions.setIsMobile({ commit }, isMobile)

      expect(commit).toHaveBeenCalledWith('setIsMobile', true)
    })
  })
})
