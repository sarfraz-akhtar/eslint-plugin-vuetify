'use strict'
const path = require('path')
const requireindex = require('requireindex')

console.log("eslint-vuetify-plugin V1.1 is running from local.......")

module.exports = {
  configs: requireindex(path.join(__dirname, './configs')),
  rules: requireindex(path.join(__dirname, './rules'))
}
