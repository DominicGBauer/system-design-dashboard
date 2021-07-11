module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.js$': 'babel-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!echarts|zrender|vue-multiselect)',
  ],
  snapshotSerializers: ['jest-serializer-vue'],
  // collectCoverage: true,
  // collectCoverageFrom: ['**/*.{js,vue}', '!**/node_modules/**'],
  testMatch: ['**/src/**/*.test.[jt]s?(x)'],
}
