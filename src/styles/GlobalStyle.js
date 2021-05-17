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
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
    font-family: 'Vollkorn SC', serif;
    color: var(--black);
    background-color: var(--grey);
  }
`

export const GlobalStyle = () => <Styles />
