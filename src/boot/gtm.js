import { useGtm } from '../composables'

import { createGtm } from '@gtm-support/vue-gtm'

export default ({ router, app }) => {
  const id = process.env.ANALYTICS_KEY

  if (!id) return

  try {
    const { setGtmInstance } = useGtm()

    app.use(
      createGtm({ id, vueRouter: router })
    )

    setGtmInstance(app.config.globalProperties.$gtm)
  } catch {
    console.error('Erro ao inicializar VueGtm, "@gtm-support/vue-gtm"')
  }
}
