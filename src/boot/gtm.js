import { useGtm } from '../composables'

import { createGtm } from '@gtm-support/vue-gtm'

export default ({ router, app }) => {
  const id = process.env.ANALYTICS_KEY
  
  if (!id) return
  
  try {
    const { setGtmInstance } = useGtm()
    const hasDebug = process.env.DEBUGGING || false

    app.use(createGtm({ id, debug: hasDebug, vueRouter: router }))

    setGtmInstance(app.config.globalProperties.$gtm)
  } catch {
    console.error('Erro ao inicializar VueGtm, "@gtm-support/vue-gtm"')
  }
}
