import axios from 'axios'

export default {
  async getDates() {
    const dates = await axios.get('/api/interest-rates/available-dates')
    return dates.data
  },
}
