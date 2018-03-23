const axios = require('axios')

class HueService {
  constructor (config) {
    this.username = config.username
    this.baseUrl = `http://${config.ipAddress}/api/${config.username}`
  }

  async getLights () {
    const response = await axios.get(`${this.baseUrl}/lights`)
    return response.data
  }

  async getLightById (lightId) {
    const response = await axios.get(`${this.baseUrl}/lights/${lightId}`)
    return response.data
  }
}

module.exports = HueService
