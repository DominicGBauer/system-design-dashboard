import SUT from './dates'

let url = '/api/quarters'
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

describe('dates actions', () => {
  describe('getDates', () => {
    it('getDates action to run', async () => {
      const commit = jest.fn()

      await SUT.actions.getDates({ commit })

      expect(url).toBe('/api/quarters')
      expect(commit).toHaveBeenCalledWith('setDates', body)
    })
  })
})
