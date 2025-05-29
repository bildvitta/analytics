import { createGtm } from '@gtm-support/vue-gtm'

export default ({ router, app }) => {
  const id = process.env.ANALYTICS_KEY

  if (!id) return

  try {
    app.use(
      createGtm({ id, vueRouter: router })
    )
  } catch {
    console.error('Erro ao inicializar VueGtm, "@gtm-support/vue-gtm"')
  }
}
