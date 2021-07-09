import axios from 'axios'

export default {
  async getIndex(payload) {
    const index = await axios.get(
      `/api/index?date=${payload.date}&indexName=${payload.index}`,
    )
    return index.data
  },
  async getSector(payload) {
    const sector = await axios.get(
      `/api/index/super-sector?date=${payload.date}&indexName=${payload.index}`,
    )
    return sector.data
  },
  async getTable(payload) {
    const table = await axios.get(
      `/api/synthethic-table?date=${payload.date}&indexName=${payload.index}&indexCode=${payload.marketProxy}`,
    )
    return table.data
  },
}
