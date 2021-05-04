import React from 'react'
import styled from 'styled-components'
import { useEditable } from './Editable.hooks'

const Element = styled.p``

export const Editable = ({ as: tag, text, id, maxLength, onSaveAttributes }) => {
  const { elementRef, onInput } = useEditable({ maxLength, onSaveAttributes, id })

  if (tag === 'textarea') {
    return (
      <Element
        as={tag}
        id={id}
        ref={elementRef}
        onKeyUp={onInput}
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
      onKeyUp={onInput}
      contentEditable
      suppressContentEditableWarning
    >
      {text}
    </Element>
  )
}
