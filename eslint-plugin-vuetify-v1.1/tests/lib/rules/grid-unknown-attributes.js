'use strict'

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/grid-unknown-attributes')

const tester = new RuleTester({
  parser: require.resolve('vue-eslint-parser'),
  parserOptions: { ecmaVersion: 2015 }
})

tester.run('grid-unknown-attributes', rule, {
  valid: [
    '<template><v-col cols="6" /></template>',
    '<template><v-container fluid /></template>',
    '<template><v-container :fluid="condition" /></template>',
    '<template><v-row justify="center" justify-sm="start" /></template>',
    '<template><v-row @click="listener" v-if="condition" slot="name" /></template>',
    // https://github.com/vuetifyjs/eslint-plugin-vuetify/issues/19
    '<template><v-row class></v-row></template>'
  ],
  invalid: [
    {
      code: '<template><v-row px-3 /></template>',
      output: '<template><v-row class="px-3" /></template>',
      errors: ['Attributes are no longer converted into classes']
    },
    {
      code: '<template><v-row px-3 py-2 /></template>',
      output: '<template><v-row class="px-3 py-2" /></template>',
      errors: ['Attributes are no longer converted into classes']
    },
    {
      code: '<template><v-row px-3 class="foo" /></template>',
      output: '<template><v-row class="foo px-3" /></template>',
      errors: ['Attributes are no longer converted into classes']
    },
    {
      code: '<template><v-row px-3 :class="foo" /></template>',
      output: '<template><v-row class="px-3" :class="foo" /></template>',
      errors: ['Attributes are no longer converted into classes']
    },
    {
      code: '<template><v-row :px-3="something" /></template>',
      output: '<template><v-row :px-3="something" /></template>',
      errors: ['Attributes are no longer converted into classes']
    },
    // https://github.com/vuetifyjs/eslint-plugin-vuetify/issues/19
    {
      code: '<template><v-row px-3 class /></template>',
      output: '<template><v-row class="px-3" /></template>',
      errors: ['Attributes are no longer converted into classes']
    }
  ]
})
