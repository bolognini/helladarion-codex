import React from 'react'
import styled from 'styled-components'
import { useEditable } from './Editable.hooks'

const Element = styled.p``

export const Editable = ({ as: tag, text, id, maxLength, onSaveAttributes }) => {
  const { elementRef, onInput, onPrevent } = useEditable({ maxLength, onSaveAttributes, id })

  if (tag === 'textarea') {
    return (
      <Element
        as={tag}
        id={id}
        ref={elementRef}
        onKeyUp={onInput}
        onKeyDown={onPrevent}
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
      onKeyDown={onPrevent}
      contentEditable
      suppressContentEditableWarning
    >
      {text}
    </Element>
  )
}
