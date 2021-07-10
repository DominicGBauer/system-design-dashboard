export const transformTimeSeries = (data) => {
  for (let item of data) {
    item.value = [item.name, item.value]
  }
  return data
}

export const transformDates = (dates) => {
  let newDates = []
  for (let quarter of dates) {
    newDates.push(quarter.quarter.slice(0, 8) + '01')
  }
  return newDates
}
