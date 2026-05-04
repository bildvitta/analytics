import { createGtm } from '@gtm-support/vue-gtm'
import config from 'analytics'
import { setGtmInstance } from '../use-gtm'

export default async ({ router, app }) => {
  console.log('Inicializando Google Tag Manager... 3')

  if (!config.id) return

  try {
    console.log('to linkado xD')
    app.use(createGtm({ ...config, debug: true, vueRouter: router }))
    setGtmInstance(app.config.globalProperties.$gtm)
  } catch {
    console.error('Erro ao inicializar VueGtm, "@gtm-support/vue-gtm"')
  }
}
