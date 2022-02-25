module.exports = {
  development: {
    baseURL: '/dev-api',
    mockURL: 'http://127.0.0.1:7001'
    // mockURL: 'http://101.35.89.91/api'
  },
  production: {
    baseURL: 'http://101.35.89.91/api',
    mockURL: 'http://101.35.89.91/api'
  },
  iframeUrl: ['http://localhost:8080/js/chunk-vendors.js', 'http://localhost:8080/js/app.js']
  // iframeUrl: [
  //   'http://101.35.89.91/bamboo-h5-vue/js/chunk-vendors.js',
  //   'http://101.35.89.91/bamboo-h5-vue/js/app.js'
  // ]
}
