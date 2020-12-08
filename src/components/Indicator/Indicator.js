import React from 'react'
import { Exclamation, ExclamationDot, ExclamationInside, ExclamationOutside } from 'assets'
import { Container, TopIcons, BottomIcons } from './Indicator.style'

export const Indicator = () => (
  <Container>
    <TopIcons>
      <Exclamation />
      <ExclamationDot />
    </TopIcons>
    <BottomIcons>
      <ExclamationInside />
      <ExclamationOutside />
    </BottomIcons>
  </Container>
)
