import SUT from './indices'

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
  describe('getIndex', () => {
    it('getIndex action is run with payload', async () => {
      const payload = {
        date: 'some date',
        index: 'some index',
      }

      const commit = jest.fn()

      await SUT.actions.getIndex({ commit }, payload)

      expect(url).toBe('/api/index?date=some date&indexName=some index')
      expect(commit).toHaveBeenCalledWith('setIndex', body)
    })
  })

  describe('getSector', () => {
    it('getSector action is run with payload', async () => {
      const payload = {
        date: 'some date',
        index: 'some index',
      }

      const commit = jest.fn()

      await SUT.actions.getSector({ commit }, payload)

      expect(url).toBe(
        '/api/index/super-sector?date=some date&indexName=some index',
      )
      expect(commit).toHaveBeenCalledWith('setSector', body)
    })
  })

  describe('getTable', () => {
    it('getTable action is run with payload', async () => {
      const payload = {
        date: 'some date',
        index: 'some index',
        marketProxy: 'some index',
      }

      const commit = jest.fn()

      await SUT.actions.getTable({ commit }, payload)

      expect(url).toBe(
        '/api/synthethic-table?date=some date&indexName=some index&indexCode=some index',
      )
      expect(commit).toHaveBeenCalledWith('setTable', body)
    })
  })

  describe('setIndexName', () => {
    it('setIndexName action is run with an index', async () => {
      const index = 'some index'

      const commit = jest.fn()

      await SUT.actions.setIndexName({ commit }, index)

      expect(commit).toHaveBeenCalledWith('setIndexName', 'some index')
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
