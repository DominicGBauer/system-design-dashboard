import SUT from './dates'

const dates = [{ quarter: '2012-12-30' }, { quarter: '2020-01-12' }]
const state = { dates }

describe('transformedDates', () => {
  it('returns transformed dates', () => {
    const actual = SUT.getters.transformedDates(state)

    expect(actual).toEqual(['2012-12-01', '2020-01-01'])
  })
})
