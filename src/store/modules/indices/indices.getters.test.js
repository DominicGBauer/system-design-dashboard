import SUT from './indices'

const table = [
  { one: 'test', weights: 21 },
  { two: 'testing', weights: null },
]
const state = { table }

describe('portfolioStatistics', () => {
  it('returns portfolio statistics section of table data', () => {
    const actual = SUT.getters.portfolioStatistics(state)

    expect(actual).toEqual({ two: 'testing', weights: null })
  })
})

describe('filteredTable', () => {
  it('returns transformed table without null weights', () => {
    const actual = SUT.getters.filteredTable(state)

    expect(actual).toEqual([{ one: 'test', weights: 21 }])
  })
})
