import React from 'react'
import { Loot, Notes } from 'assets'
import { Editable } from 'components/Editable/Editable'
import { useAttributes } from './Attributes.hooks'
import {
  AttributeList,
  Attribute,
  AdditionalButtons,
  IconButton,
  AttName,
  Values
} from './Attributes.style'

export const Attributes = ({ attributeList, setModalType, openModal }) => {
  const { onSaveAttributes } = useAttributes({ list: attributeList })
  return (
    <AttributeList>
      {attributeList
        && attributeList.map((att, index) => (
          <Attribute key={index}>
            <AttName>{att.name}</AttName>
            <Values>
              <Editable
                as='span'
                id={`${att.name}-value`}
                text={att.value}
                maxLength={2}
                onSaveAttributes={onSaveAttributes}
              />
              <Editable
                as='span'
                id={`${att.name}-modificator`}
                text={att.modificator}
                maxLength={3}
                onSaveAttributes={onSaveAttributes}
              />
            </Values>
          </Attribute>
        ))}
      <AdditionalButtons>
        <IconButton
          type='button'
          title='Tesouros'
          onClick={() => {
            setModalType('loot')
            openModal()
          }}
        >
          <Loot />
        </IconButton>
        <IconButton
          type='button'
          title='Anotações'
          onClick={() => {
            setModalType('notes')
            openModal()
          }}
        >
          <Notes />
        </IconButton>
      </AdditionalButtons>
    </AttributeList>
  )
}
