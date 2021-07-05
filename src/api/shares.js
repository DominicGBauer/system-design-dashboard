import axios from 'axios'

export default {
  async getShares() {
    const shares = await axios.get('/api/shares/available-shares')
    return shares
  },
}
