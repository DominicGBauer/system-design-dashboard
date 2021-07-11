import axios from 'axios'

export default {
  async getHighlights(index, daysInQuarter) {
    const highlights = await axios.get(
      `/api/highlights?share=${index}&daysInQuarter=${daysInQuarter}`,
    )
    return highlights.data
  },
}
