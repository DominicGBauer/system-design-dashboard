import axios from 'axios'

export default {
  async getIndex(payload) {
    const index = await axios.get(
      `/api/index?date=${payload.date}&indexName=${payload.index}`,
    )
    return index.data
  },
  async getIndexTypes() {
    const index = await axios.get(`/api/index/available-index-types`)
    return index.data
  },
  async getIndexTypeIndices(payload) {
    const indices = await axios.get(
      `/api/index/${payload.indexType}?date=${payload.date}`,
    )
    return indices.data
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
