import SUT from './interestRates'

describe('interest rate mutations', () => {
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

  describe('setTimeSeries', () => {
    it('adds timeSeries to the state', () => {
      const timeSeries = [{ name: 'some date', value: 'some value' }]
      const state = {
        timeSeries: [],
      }

      SUT.mutations.setTimeSeries(state, timeSeries)

      expect(state).toEqual({
        timeSeries: [{ name: 'some date', value: ['some date', 'some value'] }],
      })
    })
  })

  describe('setYieldCurveSeries', () => {
    it('adds yieldCurveSeries to the state', () => {
      const yieldCurveSeries = [{ name: 'some date', value: 'some value' }]
      const state = {
        yieldCurveSeries: [],
      }

      SUT.mutations.setYieldCurveSeries(state, yieldCurveSeries)

      expect(state).toEqual({
        yieldCurveSeries: [{ name: 'some date', value: 'some value' }],
      })
    })
  })
})
