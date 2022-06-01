Quasar App Extension analytics
===

Extensão para adicionar o google tag manager utilizando [@gtm-support/vue-gtm](https://github.com/gtm-support/vue-gtm/tree/main). Esta extensão funciona tanto para quasar v1 quanto quasar v2.

- Quasar v1, utilizamos a seguinte versão: [@gtm-support/vue2-gtm](https://github.com/gtm-support/vue-gtm/tree/vue2-gtm)
- Quasar v2, utilizamos a seguinte versão: [@gtm-support/vue-gtm](https://github.com/gtm-support/vue-gtm/tree/main)

# Instalação
```bash
quasar ext add analytics
```

Após a instalação, vai ser criado um arquivo `analytics.config.js`, nele vai vir as seguintes informações:

```js
/**
 * Se estiver utilizando esta extensão com quasar v2:
 * https://github.com/gtm-support/vue-gtm/tree/main
 *
 * Caso esteja utilizando esta extensão com quasar v1:
 * https://github.com/gtm-support/vue-gtm/tree/vue2-gtm
 *
 * OBS: A configuração do "vueRouter: router" já é feita automaticamente pela extensão.
 */
module.exports = {
  id: process.env.ANALYTICS_KEY
}
```

É neste arquivo que conseguiremos passar as configurações para a biblioteca do `@gtm-support/vue-gtm`.

> **IMPORTANTE:** Se estiver utilizando o `Quasar v2`, você **precisa** adicionar a variável de ambiente `ANALYTICS_KEY` dentro de `quasar.config.js` (https://quasar.dev/quasar-cli-vite/handling-process-env#introduction), senão vai ser disparada uma exceção na aplicação fazendo com que ela pare de funcionar.

> Obs: a variável global `this.$gtm`está disponível na aplicação da mesma forma como se estivesse instalado `@gtm-support/vue-gtm` manualmente.

## Compatibilidade
- [x] Quasar v1
- [x] Quasar v2
- [x] webpack
- [ ] Vite

# Doar
Se você aprecia o trabalho realizado nesta extensão de aplicativo, considere [doar para o Quasar](https://donate.quasar.dev).
