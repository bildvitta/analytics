/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

module.exports = function (api) {
  const analyticsPath = 'analytics.conf.js'

  api.extendQuasarConf(quasar => {
    const { id } = require(api.resolve.app(analyticsPath))

    console.log(require(api.resolve.app(analyticsPath)), '>>>> id')
    console.log(api.ctx)

    // if (!id) return

    const isLatesQuasar = api.hasPackage('quasar', '^2.0.0')

    quasar.boot.push(
      `~@bildvitta/quasar-app-extension-analytics/src/boot/${isLatesQuasar ? 'gtm-v3' : 'gtm-v2'}.js`
    )

    // Transpile dependencies
    quasar.build.transpileDependencies.push(/quasar-app-extension-hub[\\/]src[\\/]boot/)
  })

  api.extendWebpack(webpack => {
    webpack.resolve.alias = {
      ...webpack.resolve.alias,
      analytics: api.resolve.app(analyticsPath)
    }
  })
}
