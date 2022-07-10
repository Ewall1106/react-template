module.exports = {
  mock: {
    baseURL: '/dev-api',
    mockURL: '/'
  },
  local: {
    baseURL: '/dev-api',
    mockURL: 'http://127.0.0.1:7001'
  },
  development: {
    baseURL: '/dev-api',
    mockURL: 'xxx.xxx.xxx'
  },
  production: {
    baseURL: 'xxx.xxx.xxx',
    mockURL: 'xxx.xxx.xxx'
  }
}
