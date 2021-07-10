import SUT from './shares'

describe('shares mutations', () => {
  describe('setShareTableInfo', () => {
    it('adds shareTableInfo to the state', () => {
      const shareTableInfo = [
        {
          name: '2014-09-16',
          value: 200.0,
        },
        {
          name: '2014-09-17',
          value: 350.0,
        },
      ]
      const state = {
        shareTableInfo: null,
      }

      SUT.mutations.setShareTableInfo(state, shareTableInfo)

      const expected = {
        shareTableInfo: [
          { name: '2014-09-16', value: ['2014-09-16', 200.0] },
          { name: '2014-09-17', value: ['2014-09-17', 350.0] },
        ],
      }

      expect(state).toEqual(expected)
    })
  })

  describe('setShareTimeSeries', () => {
    it('adds shareTimeSeries to the state', () => {
      const shareTimeSeries = [
        {
          name: '2014-09-16',
          value: 200.0,
        },
        {
          name: '2014-09-17',
          value: 350.0,
        },
      ]
      const state = {
        shareTimeSeries: null,
      }

      SUT.mutations.setShareTimeSeries(state, shareTimeSeries)
      const expected = {
        shareTimeSeries: [
          { name: '2014-09-16', value: ['2014-09-16', 200.0] },
          { name: '2014-09-17', value: ['2014-09-17', 350.0] },
        ],
      }

      expect(state).toEqual(expected)
    })
  })

  describe('setShare', () => {
    it('adds share to the state', () => {
      const share = 'some share'
      const state = {
        share: null,
      }

      SUT.mutations.setShare(state, share)

      expect(state).toEqual({
        share: 'some share',
      })
    })
  })

  describe('setShares', () => {
    it('adds shares to the state', () => {
      const shares = 'some shares'
      const state = {
        shares: null,
      }

      SUT.mutations.setShares(state, shares)

      expect(state).toEqual({
        shares: 'some shares',
      })
    })
  })

  describe('setShareDate', () => {
    it('adds date to the state', () => {
      const date = 'some date'
      const state = {
        date: null,
      }

      SUT.mutations.setShareDate(state, date)

      expect(state).toEqual({
        date: 'some date',
      })
    })
  })

  describe('setShareDates', () => {
    it('adds dates to the state', () => {
      const dates = 'some dates'
      const state = {
        dates: null,
      }

      SUT.mutations.setShareDates(state, dates)

      expect(state).toEqual({
        dates: 'some dates',
      })
    })
  })

  describe('resetState', () => {
    it('resets state except for shares', () => {
      const state = {
        date: 'test',
        dates: 'test',
        share: 'test',
        shareTableInfo: 'test',
        shareTimeSeries: 'test',
        shares: 'test',
      }

      SUT.mutations.resetState(state)

      expect(state).toEqual({
        date: [],
        dates: [],
        share: [],
        shareTableInfo: [],
        shareTimeSeries: [],
        shares: 'test',
      })
    })
  })
})
