import * as SUT from './utils'

describe('handleBetaColor', () => {
  it('returns red when beta is negative', () => {
    const pValue = 0.01
    const beta = -1
    const actual = SUT.handleBetaColor(pValue, beta)

    expect(actual).toEqual('red')
  })

  it('returns green when p value is <= 0.01 and beta is positive', () => {
    const pValue = 0.01
    const beta = 2
    const actual = SUT.handleBetaColor(pValue, beta)

    expect(actual).toEqual('green')
  })

  it('returns blue when p value is <= 0.05 and beta is positive', () => {
    const pValue = 0.05
    const beta = 2
    const actual = SUT.handleBetaColor(pValue, beta)

    expect(actual).toEqual('blue')
  })

  it('returns an empty string when p value is > 0.05 and beta is positive', () => {
    const pValue = 0.051
    const beta = 2
    const actual = SUT.handleBetaColor(pValue, beta)

    expect(actual).toEqual('')
  })
})
