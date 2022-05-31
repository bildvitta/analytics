// Arquivo para quasar v1 com vue v2
import VueGtm from '@gtm-support/vue2-gtm'
import gtmHandler from '../gtm-handler'

export default async ({ router, Vue }) => {
  gtmHandler(VueGtm, {
    application: Vue,
    errorMessage: 'Erro ao inicializar VueGtm, "@gtm-support/vue2-gtm"',
    router
  })
}
