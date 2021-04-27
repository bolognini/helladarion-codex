import React from 'react'
import { StyledButton } from './Button.style'

export const Button = ({ text, secondary, onClick }) => (
  <StyledButton secondary={secondary} onClick={onClick}>
    {text}
  </StyledButton>
)
