import React from 'react'
import { Helmet } from 'react-helmet'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle } from '../src/styles/GlobalStyle'
import light from '../src/styles/themes/light'

export function wrapRootElement({ element }) {
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Helladarion Codex</title>
        <link rel='canonical' href='https://helladarion-codex.netlify.app/' />
      </Helmet>
      <Reset />
      <GlobalStyle />
      <ThemeProvider theme={light}>{element}</ThemeProvider>
    </>
  )
}
