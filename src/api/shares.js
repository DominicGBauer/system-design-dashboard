import axios from 'axios'

export default {
  async getShareTimeSeries(share) {
    const shareTimeSeries = await axios.get(`/api/shares/${share}`)
    return this.transformData(shareTimeSeries.data)
  },
  async getShareTableInfo(share, date) {
    const shareTableInfo = await axios.get(
      `/api/shares/${share}/info?date=${date}`,
    )
    return this.transformData(shareTableInfo.data)
  },
  async getShares() {
    const shares = await axios.get('/api/shares/available-shares')
    return shares.data
  },
  async getShareDates(share) {
    const dates = await axios.get(`/api/shares/${share}/dates`)
    return this.transformDates(dates.data)
  },
  transformData(data) {
    for (let item of data) {
      item.value = [item.name, item.value]
    }
    return data
  },
  transformDates(dates) {
    let newDates = []
    for (let quarter of dates) {
      newDates.push(quarter.date.slice(0, 8) + '01')
    }
    return newDates
  },
}
