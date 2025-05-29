/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */
export default function (api) {
  api.extendQuasarConf(quasar => {
    api.compatibleWith('@quasar/app-vite', '^2.0.0')
    api.compatibleWith('quasar', '^2.0.0')

    console.log('Installing Quasar App Extension Analytics...')

    quasar.boot.push('~@bildvitta/quasar-app-extension-analytics/src/boot/gtm.js')
  })
}
