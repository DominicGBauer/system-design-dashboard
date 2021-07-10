import SUT from './indices'

describe('indices mutations', () => {
  describe('setIndex', () => {
    it('adds index to the state', () => {
      const index = 'some index'
      const state = {
        index: null,
      }

      SUT.mutations.setIndex(state, index)

      expect(state).toEqual({
        index: 'some index',
      })
    })
  })

  describe('setSector', () => {
    it('adds sector to the state', () => {
      const sector = 'some sector'
      const state = {
        sector: null,
      }

      SUT.mutations.setSector(state, sector)

      expect(state).toEqual({
        sector: 'some sector',
      })
    })
  })

  describe('setTable', () => {
    it('adds table to the state', () => {
      const table = 'some table'
      const state = {
        table: null,
      }

      SUT.mutations.setTable(state, table)

      expect(state).toEqual({
        table: 'some table',
      })
    })
  })

  describe('setIndexName', () => {
    it('adds index name to the state', () => {
      const indexName = 'some index name'
      const state = {
        indexName: null,
      }

      SUT.mutations.setIndexName(state, indexName)

      expect(state).toEqual({
        indexName: 'some index name',
      })
    })
  })

  describe('resetState', () => {
    it('resets state', () => {
      const state = {
        index: 'some',
        indexName: 'thing',
        sector: 'is',
        table: 'here',
      }

      SUT.mutations.resetState(state)

      expect(state).toEqual({
        index: [],
        indexName: '',
        sector: [],
        table: [],
      })
    })
  })
})
