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

  describe('getTimeSeries', () => {
    it('getTimeSeries action to run with a payload', async () => {
      const payload = {
        bondCurve: 'some bond curve',
        tenor: 'some tenor',
      }

      const commit = jest.fn()

      await SUT.actions.getTimeSeries({ commit }, payload)

      expect(url).toBe(
        '/api/interest-rates?curve=some bond curve&tenor=some tenor',
      )
      expect(commit).toHaveBeenCalledWith('setTimeSeries', body)
    })
  })

  describe('getYieldCurveSeries', () => {
    it('getYieldCurveSeries action to run with a payload', async () => {
      const payload = {
        bondCurve: 'some bond curve',
        date: 'some date',
      }

      const commit = jest.fn()

      await SUT.actions.getYieldCurveSeries({ commit }, payload)

      expect(url).toBe(
        '/api/interest-rates/yield-curve?curve=some bond curve&date=some date',
      )
      expect(commit).toHaveBeenCalledWith('setYieldCurveSeries', body)
    })
  })
})
