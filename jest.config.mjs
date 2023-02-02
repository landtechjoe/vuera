/* eslint-env node */
export default {
  browser: true,
  collectCoverageFrom: ['src/**/*.js', 'babel.js'],
  setupFiles: ['./tests/__setup__.js'],
  testMatch: ['<rootDir>/tests/**/*-test.js'],
  moduleFileExtensions: ['js', 'json', 'node', 'vue'],
  transform: {
    '\\.js$': 'babel-jest',
    '\\.vue$': 'jest-vue-preprocessor',
  },
}
