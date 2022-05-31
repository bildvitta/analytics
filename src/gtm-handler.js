import config from 'analytics'

export default (VueGtm, { application, errorMessage, router }) => {
  if (!config.id) return

  try {
    application.use(VueGtm, { ...config, vueRouter: router })
  } catch {
    console.error(errorMessage)
  }
}
