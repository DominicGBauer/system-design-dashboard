import SUT from './sectors'

describe('sectors mutations', () => {
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

  describe('setSectors', () => {
    it('adds sector to the state', () => {
      const sectors = 'some sectors'
      const state = {
        sectors: null,
      }

      SUT.mutations.setSectors(state, sectors)

      expect(state).toEqual({
        sectors: 'some sectors',
      })
    })
  })

  describe('resetState', () => {
    it('resets state except for sectors', () => {
      const state = {
        sector: 'some',
        sectors: 'thing',
      }

      SUT.mutations.resetState(state)

      expect(state).toEqual({
        sector: [],
        sectors: 'thing',
      })
    })
  })
})
