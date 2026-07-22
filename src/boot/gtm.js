import { useGtm } from '../composables'

import { createGtm } from '@gtm-support/vue-gtm'
import config from 'analytics'

export default async ({ router, app }) => {
  if (!config.id) return

  try {
    const { setGtmInstance } = useGtm()

    // pq não ter a config? se eu quiser passar alguma config a mais pro analytics, removendo este arquivo não tem como
    app.use(createGtm({ ...config, vueRouter: router }))

    setGtmInstance(app.config.globalProperties.$gtm)
  } catch {
    console.error('Erro ao inicializar VueGtm, "@gtm-support/vue-gtm"')
  }
}
