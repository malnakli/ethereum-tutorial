// Allows us to use ES6 in our migrations and tests.
require('babel-register')
// 0x271daab0748b08c2af41ac71b78adb41b3a4ae67
module.exports = {
  networks: {
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*',// Match any network id
      gas: 470000 // if the gas in specific migration file was not set, it will by default use this value
    }
  }
}
