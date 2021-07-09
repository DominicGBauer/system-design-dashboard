import axios from 'axios'

export default {
  async getSector(payload) {
    const sector = await axios.get(
      `/api/sectors/${this.formatSectorForQuery(payload.sector)}?date=${
        payload.date
      }`,
    )
    return sector.data
  },
  async getSectors() {
    const sectors = await axios.get('/api/sectors/available-sectors')
    return sectors.data
  },
  formatSectorForQuery(sector) {
    sector = sector.replace('&', '%26')
    sector = sector.replace(',', '%2C')
    return sector
  },
}
