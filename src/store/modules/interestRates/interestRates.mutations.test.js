import SUT from './interestRates'

describe('setDates', () => {
  it('adds dates to the state', () => {
    const dates = [{ date: 'some date' }]
    const state = {
      dates: null,
    }

    SUT.mutations.setDates(state, dates)

    expect(state).toEqual({
      dates: [{ date: 'some date' }],
    })
  })
})
