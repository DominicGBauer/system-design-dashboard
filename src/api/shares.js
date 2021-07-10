import axios from 'axios'

export default {
  async getShareTimeSeries(share) {
    const shareTimeSeries = await axios.get(`/api/shares/${share}`)
    return shareTimeSeries.data
  },
  async getShareTableInfo(share, date) {
    const shareTableInfo = await axios.get(
      `/api/shares/${share}/info?date=${date}`,
    )
    return shareTableInfo.data
  },
  async getShares() {
    const shares = await axios.get('/api/shares/available-shares')
    return shares.data
  },
  async getShareDates(share) {
    const dates = await axios.get(`/api/shares/${share}/available-dates`)
    return dates.data
  },
}
