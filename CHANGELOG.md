# Changelog
Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

### Sobre os "BREAKING CHANGES"
Podemos ter pequenas breaking changes sem alterar o `major` version, apesar de serem pequenas, podem alterar o comportamento da funcionalidade caso não seja feita uma atualização, **preste muita atenção** nas breaking changes dentro das versões quando existirem.

## [2.1.0-beta.1] - 14-08-2026
### Modificado
- Alterado compatibilidade para utilziar com `app-vite: > 3.2.0`

## [2.1.0-beta.0] - 24-07-2026
### Adicionado
- Adicionado suporte à variável de ambiente `DEBUGGING` para controlar o modo debug do GTM.

### Modificado
- Modificado o pacote para `@appnave/quasar-app-extension-analytics`.

## [2.0.0] - 24-07-2026
## Versão estável lançada.

## [2.0.0-beta.0] - 30-05-2025
## BREAKING CHANGES
- Dropado suporte para quasar v1 e quasar v2 com webpack.
- Removido arquivo de configuração "analytics.config.js".

### Adicionado
- Adicionado suporte do vite quasar-app-vite v2.

### Modificado
- Atualizado lib "@gtm-support/vue-gtm" para v3.

### Removido
- Removido arquivo de configuração "analytics.config.js"

## [1.1.0-beta.0] - 05-05-2026
## BREAKING CHANGES
- Removido suporte ao vue2-gtm.

### Adicionado
- Adicionado composable `useGtm` para ser utilizado em arquivos em composition, mantendo a mesma instância setada no application.

### Removido
- Removido suporte ao vue2-gtm.

## [1.0.0] - 02-06-2022
## Versão estável lançada.

## [1.0.0-beta.2] - 01-06-2022
### Modificado
- Atualizado `README.md`.

## [1.0.0-beta.1] - 01-06-2022
### Adicionado
- Adicionado `CHANGELOG.md`.

### Modificado
- Atualizado `README.md`.

## [1.0.0-beta.0] - 01-06-2022
## Extensão criada

[1.0.0]: https://github.com/bildvitta/analytics/compare/v1.0.0-beta.2...v1.0.0?expand=1
[1.0.0-beta.2]: https://github.com/bildvitta/analytics/compare/v1.0.0-beta.1...v1.0.0-beta.2?expand=1
[1.0.0-beta.1]: https://github.com/bildvitta/analytics/compare/v1.0.0-beta.0...v1.0.0-beta.1?expand=1
[1.0.0-beta.0]: https://github.com/bildvitta/analytics/releases/tag/v1.0.0-beta.0
