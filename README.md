Quasar App Extension Analytics
===

Extensão para adicionar o google tag manager utilizando [@gtm-support/vue-gtm](https://github.com/gtm-support/vue-gtm/tree/main). Esta extensão funciona tanto para quasar v1 quanto quasar v2.

- Quasar v1, utilizamos a seguinte versão: [@gtm-support/vue2-gtm](https://github.com/gtm-support/vue-gtm/tree/vue2-gtm).
- Quasar v2, utilizamos a seguinte versão: [@gtm-support/vue-gtm](https://github.com/gtm-support/vue-gtm/tree/main).

# Requisitos
- Quasar v2 app-vite v2.
- Conta no Google Tag Manager para enviar os dados.

# Instalação
```bash
quasar ext add @appnave/analytics
```

> **IMPORTANTE:** Você **precisa** adicionar a variável de ambiente `ANALYTICS_KEY` dentro de `quasar.config.js` (https://quasar.dev/quasar-cli-vite/handling-process-env#introduction), senão vai ser disparada uma exceção na aplicação fazendo com que ela pare de funcionar.

> Obs: a variável global `this.$gtm`está disponível na aplicação da mesma forma como se estivesse instalado `@gtm-support/vue-gtm` manualmente.

## Variáveis de ambiente

|     Variável    | Obrigatória | Descrição |
|-----------------|-------------|--------------------|
| `ANALYTICS_KEY` |     Sim     | ID do container do Google Tag Manager (ex: `GTM-XXXXXX`). |
| `DEBUGGING`     |     Não     | Quando definida como `true`, ativa o modo debug do GTM. Padrão: `false`. |

# Desenvolvimento

|   Branch  | Descrição |
|-----------|---------------------------|
|   `main`  | Reservada para versões estáveis. |
| `develop` | Reservada para versões beta. Novas features devem ser criadas a partir dela. |

# Desinstalação
```bash
quasar ext remove @appnave/analytics
```

# Doar
Se você aprecia o trabalho realizado nesta extensão de aplicativo, considere [doar para o Quasar](https://donate.quasar.dev).
