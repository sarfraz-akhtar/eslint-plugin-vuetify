'use strict';

const path = require('path');
const requireindex = require('requireindex');
const args = process.argv;
const pluginV11 = require(path.join(__dirname, '../eslint-plugin-vuetify-v1.1/lib'));
const plugin = args.includes('eslint-vuetify2') ? pluginV11 : {
  configs: requireindex(path.join(__dirname, './configs')),
  rules: requireindex(path.join(__dirname, './rules'))
};
if (args.includes('eslint-vuetify2')) {
  console.log("upgrade vuetify in 2");
} else {
  console.log("upgrade vuetify in 3");
}
module.exports = {
  ...plugin
};