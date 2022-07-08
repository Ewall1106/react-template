const { DefinePlugin } = require('webpack')
const CracoAlias = require('craco-alias')
const CracoLessPlugin = require('craco-less')

const env = process.env.PROJECT_ENV
const config = require('./src/utils/config')
const { mockURL } = config[env]

module.exports = {
  webpack: {
    configure: {
      /* Any webpack configuration options: https://webpack.js.org/configuration */
      output: {
        publicPath: env === 'production' ? '/' : '/'
      }
    },
    plugins: [
      new DefinePlugin({
        'process.env.PROJECT_ENV': JSON.stringify(env)
      })
    ]
  },
  devServer: {
    proxy: {
      '/dev-api': {
        target: mockURL,
        pathRewrite: {
          '^/dev-api': '/'
        },
        secure: false,
        changeOrigin: true
      }
    }
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: './src',
        tsConfigPath: './tsconfig.path.json',
        unsafeAllowModulesOutsideOfSrc: true
      }
    },
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
