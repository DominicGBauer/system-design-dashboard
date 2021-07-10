import SUT from './shares'

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

describe('shares actions', () => {
  describe('getShareTableInfo', () => {
    it('getShareTableInfo action is run with payload', async () => {
      const payload = {
        share: 'some share',
        date: 'some date',
      }

      const commit = jest.fn()

      await SUT.actions.getShareTableInfo({ commit }, payload)

      expect(url).toBe('/api/shares/some share/info?date=some date')
      expect(commit).toHaveBeenCalledWith('setShareTableInfo', body)
    })
  })

  describe('getShareTimeSeries', () => {
    it('getShareTimeSeries action is run with payload', async () => {
      const payload = { share: 'some share' }

      const commit = jest.fn()

      await SUT.actions.getShareTimeSeries({ commit }, payload)

      expect(url).toBe('/api/shares/some share')
      expect(commit).toHaveBeenCalledWith('setShareTimeSeries', body)
    })
  })

  describe('getShares', () => {
    it('getShares action is run', async () => {
      const commit = jest.fn()

      await SUT.actions.getShares({ commit })

      expect(url).toBe('/api/shares/available-shares')
      expect(commit).toHaveBeenCalledWith('setShares', body)
    })
  })

  describe('getShareDates', () => {
    it('getShareDates action is run', async () => {
      const payload = { share: 'some share' }
      const commit = jest.fn()

      await SUT.actions.getShareDates({ commit }, payload)

      expect(url).toBe('/api/shares/some share/available-dates')
      expect(commit).toHaveBeenCalledWith('setShareDates', body)
    })
  })

  describe('setShare', () => {
    it('setShare action is run', async () => {
      const share = { instrument: 'absa', alpha: 'ABS' }
      const commit = jest.fn()

      await SUT.actions.setShare({ commit }, share)

      expect(commit).toHaveBeenCalledWith('setShare', share)
    })
  })

  describe('setShareDate', () => {
    it('setShareDate action is run', async () => {
      const date = '2010-10-12'
      const commit = jest.fn()

      await SUT.actions.setShareDate({ commit }, date)

      expect(commit).toHaveBeenCalledWith('setShareDate', date)
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
