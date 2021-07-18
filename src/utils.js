export const handleBetaColor = (pValue, beta) => {
  let betaColor = ''
  if (beta < 0) {
    return (betaColor = 'red')
  }
  switch (true) {
    case pValue <= 0.01:
      betaColor = 'green'
      break
    case pValue <= 0.05:
      betaColor = 'blue'
      break
    default:
      break
  }

  return betaColor
}
