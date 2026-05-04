import config from 'analytics'
import { setGtmInstance } from './use-gtm'

export default (createGtm, { application, errorMessage, router }) => {
  if (!config.id) return

  try {
    console.log('to linkado 2 xxxx')
    application.use(createGtm({ ...config, debug: true, vueRouter: router }))
    setGtmInstance(application.config.globalProperties.$gtm)
  } catch {
    console.error(errorMessage)
  }
}
