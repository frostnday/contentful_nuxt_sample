const contentful = require('contentful')
const env = require('../env.js');

const config = {
  space: env.CTF_SPACE_ID,
  accessToken: env.CTF_CDA_ACCESS_TOKEN
}

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }
}
