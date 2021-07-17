import axios from 'axios'

export default {
  async getDates() {
    const dates = await axios.get('/api/interest-rates/available-dates')
    return dates.data
  },
  async getTimeSeries(payload) {
    const dates = await axios.get(
      `/api/interest-rates?curve=${payload.bondCurve}&tenor=${payload.tenor}`,
    )
    return dates.data
  },
  async getYieldCurveSeries(payload) {
    const dates = await axios.get(
      `/api/interest-rates/yield-curve?curve=${payload.bondCurve}&date=${payload.date}`,
    )
    return dates.data
  },
}
