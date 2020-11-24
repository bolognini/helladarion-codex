import React from 'react'
import styled from 'styled-components'

const Element = styled.p``

export const Editable = ({ as: tag, text, id }) => {
  return (
    <Element
      as={tag}
      id={id}
      contentEditable
    >
      {text}
    </Element>
  )
}