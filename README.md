Quasar App Extension Analytics
===

Extensão para adicionar o Google Tag Manager utilizando [@gtm-support/vue-gtm](https://github.com/gtm-support/vue-gtm/tree/main).

# Requisitos
- Quasar v2 com `@quasar/app-vite ^2.0.0`
- Conta no Google Tag Manager para enviar os dados.

# Instalação
```bash
quasar ext add @bildvitta/analytics
```

> A variável global `this.$gtm` está disponível na aplicação da mesma forma que ao instalar `@gtm-support/vue-gtm` manualmente.

## Variáveis de ambiente

Ambas as variáveis devem ser adicionadas dentro de `quasar.config.js` ([veja como](https://quasar.dev/quasar-cli-vite/handling-process-env#introduction)):

```js
build: {
  env: {
    ANALYTICS_KEY: 'GTM-XXXXXXX',
    DEBUGGING: true
  }
}
```

### `ANALYTICS_KEY` — obrigatória

ID do container GTM (ex: `GTM-XXXXXXX`). Sem ela, o GTM **não será inicializado**.

### `DEBUGGING` — opcional

Quando `true`, habilita logs do GTM no console do browser, como:

```
[GTM-Support]: Dispatching TrackView ...
```

## Composable `useGtm`

A extensão também exporta o composable `useGtm`, que permite acessar a instância do GTM em qualquer lugar da aplicação:

```js
import { useGtm } from '@bildvitta/quasar-app-extension-analytics'

const { gtm } = useGtm()
```

# Desinstalação
```bash
quasar ext remove @bildvitta/analytics
```

# Doar
Se você aprecia o trabalho realizado nesta extensão de aplicativo, considere [doar para o Quasar](https://donate.quasar.dev).
