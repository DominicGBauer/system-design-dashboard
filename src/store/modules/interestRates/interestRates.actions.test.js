import SUT from './interestRates'

let url = ''
let body = []
jest.mock('axios', () => ({
  get: (_url, _body) => {
    return new Promise((resolve) => {
      url = _url
      body = _body
      resolve(true)
    })
  },
}))

describe('interest rates actions', () => {
  describe('getDates', () => {
    it('getDates action to run', async () => {
      const commit = jest.fn()

      await SUT.actions.getDates({ commit })

      expect(url).toBe('/api/interest-rates/available-dates')
      expect(commit).toHaveBeenCalledWith('setDates', body)
    })
  })
})
