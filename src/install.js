export default function (api) {
  api.onExitLog('A extensão ANALYTICS foi instalada. 🥰')

  // adicionar arquivo de configuração ao projeto.
  api.renderFile(
    './templates/analytics.config.js',
    'analytics.config.js'
  )
}
