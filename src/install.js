module.exports = function (api) {
  api.onExitLog('A extensão ANALYTICS foi instalada. 🥰')

  // adicionar arquivo de configuração de variareis sass ao projeto.
  api.renderFile(
    // caminho do arquivo importado
    './templates/analytics.config.js',
    'analytics.config.js'
  )
}
