# Nubank Mobile App (React Native) - Replica

[Conteúdo em Inglês](https://github.com/Wpdas/nubank-mobile-app#nubank-mobile-app-react-native---replica)

Aplicativo mobile desenvolvido usando React Native. Este aplicativo é baseado na interface do Nubank (empresa brasileira) e foi feito do zero.

Para este projeto foi utilizado o TypeScript como linguagem base, packages para implementação de recursos no app como i18n (internacionalização), styled-components e ferramentas para qualidade de código, build and compilador, são eles tslint, prettier, tslint-react, babel entre outros. Foi utilizado o Context API dinamicos para criar componentes Providers de Tema e Locate (internacionalização).

**Recursos nativos:** Animation, Easing, StyleSheet, Gesture Handler, Swiper, Navigation, QRCode, Vector Icons, Svg, entre outros;</br>
**React APIs:** createContext, useContext, useState;</br>
**Third-party:** styled-components and i18n.</br>
**Fonte:** NunitoSans

### Demo GIF :art:

![Demo](https://wendersonpdas-public-github-files.s3-us-west-2.amazonaws.com/nubank_reactnative_app.gif)
[Ver vídeo](https://drive.google.com/open?id=1JbPIVygvmJniuumozQlAVqfuaJC94HbI)

## Porque :interrobang:

Tive o interesse em desenvolver este projeto após ver o trabalho maravilhoso da [@ildaneta](https://github.com/ildaneta) através do LinkedIn e também aproveitei o período em casa durante a pandemia do COVID para colocar certos projetos em prática.

## Como usar :mortar_board:

Após clonar o repositório, faça os seguintes comandos:

```bash
# Para atualizar os pacotes e dependências necessárias:
yarn
```

```bash
# Para rodar o projeto:
yarn start
```

```bash
# Rodar num emulador / dispositivo Android:
yarn android
```

```bash
# Rodar em simulador iOS:
yarn ios
```

## Bom saber :green_book:

As bases para a função de import do TypeScript estão configuradas nos arquivos `tsconfig.json` e `babel.config.js`:

```json
"@components/*": "src/components/*",
"@assets/*": "src/assets/*",
"@theme": "src/theme/index.tsx",
"@locale": "src/locale/index.tsx"
```

## Conteúdo útil :mag:

- [Nubank Design material - Andrea & André](https://www.behance.net/gallery/42918779/Nubank)
- [Nunito Sans - Google Fonts](https://fonts.google.com/specimen/Nunito+Sans)
- [Setup guide - Rocketseat](https://react-native.rocketseat.dev/)
- [Initial Nubank UI - Rocketseat](https://www.youtube.com/watch?v=DDm0M_rZLJo&t=1s)
- [General React Native content - The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)
- [Internationalization using i18n - Isac](https://medium.com/reactbrasil/internacionaliza%C3%A7%C3%A3o-em-react-native-77fb1a56f8e9)
- [Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [UI - Advanced Style Components](https://styled-components.com/docs/advanced)
- [Icons - Simple Line Icons](https://simplelineicons.github.io/)
- [Setup custon fonts - Tamas Szikszai](https://medium.com/better-programming/using-custom-fonts-in-react-native-2019-289099609837)

## Autor :bowtie:

[Wenderson Pires - Linkedin](https://www.linkedin.com/in/wenderson-pires-silva/)
