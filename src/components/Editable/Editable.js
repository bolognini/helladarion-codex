import React from 'react'
import styled from 'styled-components'
import { useEditable } from './Editable.hooks'

const Element = styled.p``

export const Editable = ({ as: tag, text, id, maxLength }) => {
  const { elementRef, onInput } = useEditable({ maxLength })

  return (
    <Element
      as={tag}
      id={id}
      ref={elementRef}
      onInput={onInput}
      contentEditable
      suppressContentEditableWarning={true}
    >
      {text}
    </Element>
  )
}