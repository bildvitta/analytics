import { useGtm } from '../composables'

import { createGtm } from '@gtm-support/vue-gtm'
import config from 'analytics'

export default async ({ router, app }) => {
  if (!config.id) return

  try {
    const { setGtmInstance } = useGtm()

    app.use(createGtm({ ...config, debug: true, vueRouter: router }))

    setGtmInstance(app.config.globalProperties.$gtm)
  } catch {
    console.error('Erro ao inicializar VueGtm, "@gtm-support/vue-gtm"')
  }
}
