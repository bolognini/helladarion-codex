import React from 'react'
import { createGlobalStyle } from 'styled-components'

const Styles = createGlobalStyle`
  :root {
    --red: #B52931;
    --yellow: #F9D078;
    --grey: #F2F2F1;
    --dark-grey: #D1C9C3;
    --black: #383838;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Tormenta', sans-serif;
  }
`

export const GlobalStyle = () => <Styles />
