module.exports = function (api) {
  api.onExitLog('A extensão ANALYTICS foi instalada. 🥰')

  // Adiciona a dependência correta conforme a versão do Quasar/Vue do projeto
  if (api.hasPackage('quasar', '^2.0.0')) {
    api.extendPackageJson({
      dependencies: {
        '@gtm-support/vue-gtm': '^3.2.0'
      }
    })
  } else {
    api.extendPackageJson({
      dependencies: {
        '@gtm-support/vue2-gtm': '^1.3.0'
      }
    })
  }

  // adicionar arquivo de configuração ao projeto.
  api.renderFile(
    './templates/analytics.config.js',
    'analytics.config.js'
  )
}
