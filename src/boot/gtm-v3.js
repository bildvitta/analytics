// Arquivo para quasar v2 com vue v3
import VueGtm from '@gtm-support/vue-gtm'
import gtmHandler from '../gtm-handler'

export default async ({ router, app }) => {
  gtmHandler(VueGtm, {
    application: app,
    errorMessage: 'Erro ao inicializar VueGtm, "@gtm-support/vue-gtm"',
    router
  })
}
