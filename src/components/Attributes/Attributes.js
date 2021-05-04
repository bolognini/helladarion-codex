import React from 'react'
import { Editable } from 'components/Editable/Editable'
import { useAttributes } from './Attributes.hooks'
import { AttributeList, Attribute, AttName, Values } from './Attributes.style'

export const Attributes = ({ attributeList }) => {
  const { onSaveAttributes } = useAttributes({ list: attributeList })
  return (
    <AttributeList>
      {attributeList && attributeList.map((att, index) => (
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
    </AttributeList>
  )
}
