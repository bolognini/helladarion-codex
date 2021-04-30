import React from 'react'
import styled from 'styled-components'
import { useEditable } from './Editable.hooks'

const Element = styled.p``

export const Editable = ({ as: tag, text, id, maxLength }) => {
  const { elementRef, onInput } = useEditable({ maxLength })

  if (tag === 'textarea') {
    return (
      <Element
        as={tag}
        id={id}
        ref={elementRef}
        onInput={onInput}
        defaultValue={text}
        contentEditable
        suppressContentEditableWarning
      />
    )
  }
  return (
    <Element
      as={tag}
      id={id}
      ref={elementRef}
      onInput={onInput}
      contentEditable
      suppressContentEditableWarning
    >
      {text}
    </Element>
  )
}
