const HueService = require('./HueService.js')

module.exports = (config) => {
  return new HueService(config)
}
