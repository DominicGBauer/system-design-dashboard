import SUT from './dates'

describe('setDates', () => {
  it('adds dates to the state', () => {
    const dates = [{ quarter: 'some quarter' }]
    const state = {
      dates: null,
    }

    SUT.mutations.setDates(state, dates)

    expect(state).toEqual({
      dates: [{ quarter: 'some quarter' }],
    })
  })
})
