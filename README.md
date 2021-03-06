Quasar App Extension Analytics
===

Extensão para adicionar o google tag manager utilizando [@gtm-support/vue-gtm](https://github.com/gtm-support/vue-gtm/tree/main). Esta extensão funciona tanto para quasar v1 quanto quasar v2.

- Quasar v1, utilizamos a seguinte versão: [@gtm-support/vue2-gtm](https://github.com/gtm-support/vue-gtm/tree/vue2-gtm).
- Quasar v2, utilizamos a seguinte versão: [@gtm-support/vue-gtm](https://github.com/gtm-support/vue-gtm/tree/main).

# Requisitos
- Quasar v1 ou Quasar v2 (ambos com webpack).
- Conta no Google Tag Manager para enviar os dados.

# Instalação
```bash
quasar ext add @bildvitta/analytics
```

**OBS:** Caso esteja utilizando o quasar v1, certifique-se que o projeto esteja utilizando o `vue-router` na versão 3, caso não esteja listado no package.json, rode o comando:

```bash
npm i vue-router@3
```

Para o quasar 2:

```bash
npm i vue-router@4
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

# Compatibilidade
- [x] Quasar v1 Webpack
- [x] Quasar v2 Webpack
- [ ] Quasar v2 Vite

# Desinstalação
```bash
quasar ext remove @bildvitta/analytics
```

# Doar
Se você aprecia o trabalho realizado nesta extensão de aplicativo, considere [doar para o Quasar](https://donate.quasar.dev).
