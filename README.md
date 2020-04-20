# Nubank Mobile App (React Native) - Replica

[Content in Portuguese](https://github.com/Wpdas/nubank-mobile-app/blob/master/README_pt_BR.md)

Mobile app developed using React Native. This application is based on the Nubank user interface (Brazilian company) and was made from scratch.

Project developed using TypeScript and some packages for implementing features in the app like i18n (internationalization), styled-components. I'm also using tools for code quality, build and compiler, they are tslint, prettier, tslint-react, babel and others. Dynamic Context APIs was used to create Theme and Locate Provider components (internationalization).

**Native resources:** Animation, Easing, StyleSheet, Gesture Handler, Swiper, Navigation, QRCode, Vector Icons, Svg, entre outros;</br>
**React APIs:** createContext, useContext, useState;</br>
**Third-party:** styled-components and i18n.</br>
**Font:** NunitoSans

### Demo GIF :art:

![Demo](https://wendersonpdas-public-github-files.s3-us-west-2.amazonaws.com/nubank_reactnative_app.gif)
[Watch the vídeo](https://drive.google.com/open?id=1JbPIVygvmJniuumozQlAVqfuaJC94HbI)

## Why :interrobang:

My interest in developing this project started after seeing the wonderful work of [@ildaneta](https://github.com/ildaneta) through LinkedIn and I also took advantage of the period at home during the Covid-19 pandemic to put certain projects into practice.

## How to use :mortar_board:

After cloning the repository, run the following commands:

```bash
# Updates the required packages and dependencies:
yarn
```

```bash
# Runs the project
yarn start
```

```bash
# Runs the app on an Android Device / Emulator
yarn android
```

```bash
# Runs the app on an iOS simulator
yarn ios
```

## Good to know :green_book:

The bases for the TypeScript import function are configured in the `tsconfig.json` and`babel.config.js` files:

```json
"@components/*": "src/components/*",
"@assets/*": "src/assets/*",
"@theme": "src/theme/index.tsx",
"@locale": "src/locale/index.tsx"
```

## Helpful content :mag:

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

## Author :bowtie:

[Wenderson Pires - Linkedin](https://www.linkedin.com/in/wenderson-pires-silva/)
