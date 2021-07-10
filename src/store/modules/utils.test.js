import * as SUT from './utils'

describe('portfolioStatistics', () => {
  it('returns formatted dates', () => {
    const dates = [{ quarter: '2020-12-14' }]

    const actual = SUT.transformDates(dates)

    expect(actual).toEqual(['2020-12-01'])
  })
})

describe('filteredTable', () => {
  it('returns transformed table without null weights', () => {
    const data = [
      {
        name: '2014-09-16',
        value: 200.0,
      },
      {
        name: '2014-09-17',
        value: 350.0,
      },
    ]

    const actual = SUT.transformTimeSeries(data)

    const expected = [
      { name: '2014-09-16', value: ['2014-09-16', 200.0] },
      { name: '2014-09-17', value: ['2014-09-17', 350.0] },
    ]

    expect(actual).toEqual(expected)
  })
})
