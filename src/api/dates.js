import axios from 'axios'

export default {
  async getDates() {
    const dates = await axios.get('/api/quarters')
    return dates
  },
}
