import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import light from '../src/styles/themes/light'


export function wrapRootElement({ element }) {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={light}>{element}</ThemeProvider>
    </>
  )
}