import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const breakpoint = {
  small: '@media (min-width: 360px)',
  medium: '@media (min-width: 768px)',
  large: '@media (min-width: 1280px)',
  xlarge: '@media (min-width: 1920px)'
}

const Styles = createGlobalStyle`
  :root {
    --red: #B52931;
    --yellow: #F9D078;
    --grey: #F2F2F1;
    --dark-grey: #D1C9C3;
    --black: #383838;
    --tormenta: 'Tormenta', sans-serif;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Vollkorn SC', serif;
    color: var(--black);
  }
`

export const GlobalStyle = () => <Styles />
