import SUT from './shares'

describe('shares getters', () => {
  const state = {
    dates: [{ quarter: '2012-12-30' }, { quarter: '2020-01-12' }],
  }

  describe('getTransformedDates', () => {
    it('returns transformed dates', () => {
      const actual = SUT.getters.getTransformedDates(state)

      const expected = ['2012-12-01', '2020-01-01']

      expect(actual).toEqual(expected)
    })
  })
})
