import axios from 'axios'

export default {
  async getDates() {
    const dates = await axios.get('/api/quarters')
    return this.transformDates(dates.data)
  },
  transformDates(dates) {
    let newDates = []
    for (let quarter of dates) {
      newDates.push(quarter.quarter.slice(0, 8) + '01')
    }
    return newDates
  },
}
