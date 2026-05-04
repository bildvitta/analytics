// Arquivo para quasar v2 com vue v3
import { createGtm } from '@gtm-support/vue-gtm'
import gtmHandler from '../gtm-handler'

export default async ({ router, app }) => {
  console.log('Inicializando Google Tag Manager... 3')
  gtmHandler(createGtm, {
    application: app,
    errorMessage: 'Erro ao inicializar VueGtm, "@gtm-support/vue-gtm"',
    router
  })
}
