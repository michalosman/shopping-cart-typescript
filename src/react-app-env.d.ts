/// <reference types="react-scripts" />

import 'styled-components'

declare module 'styled-components' {
  interface DefaultTheme {
    colors: {
      primary: string
      red: string
      dark: string
      light: string
      grey: {
        light: string
        main: string
        dark: string
      }
      hover: {
        primary: string
        red: string
        grey: string
        dark: string
      }
      active: {
        primary: string
        red: string
        grey: string
        dark: string
      }
    }

    widths: {
      content: string
    }
  }
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}
