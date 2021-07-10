import SUT from './sectors'

let url = ''
let body = ''
jest.mock('axios', () => ({
  get: (_url, _body) => {
    return new Promise((resolve) => {
      url = _url
      body = _body
      resolve(true)
    })
  },
}))

describe('indices actions', () => {
  describe('getSector', () => {
    it('getSector action is run with payload', async () => {
      const payload = {
        sector: 'some sector',
        date: 'some date',
      }

      const commit = jest.fn()

      await SUT.actions.getSector({ commit }, payload)

      expect(url).toBe('/api/sectors/some sector?date=some date')
      expect(commit).toHaveBeenCalledWith('setSector', body)
    })
  })

  describe('getSectors', () => {
    it('getSectors action is run', async () => {
      const commit = jest.fn()

      await SUT.actions.getSectors({ commit })

      expect(url).toBe('/api/sectors/available-sectors')
      expect(commit).toHaveBeenCalledWith('setSectors', body)
    })
  })

  describe('resetState', () => {
    it('resetState action is run', async () => {
      const commit = jest.fn()

      await SUT.actions.resetState({ commit })

      expect(commit).toHaveBeenCalledWith('resetState')
    })
  })
})
