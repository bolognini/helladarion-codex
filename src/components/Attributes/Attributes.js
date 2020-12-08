import React from 'react'
import { Editable } from '@components/Editable/Editable'
import { AttributeList, Attribute, AttName, Values } from './Attributes.style'

export const Attributes = ({ attributeList }) => {
  return (
    <AttributeList>
      {attributeList.map((att, index) => (
        <Attribute key={index}>
          <AttName>{att.attributeName}</AttName>
          <Values>
            <Editable
              as='span'
              id={`${att.attributeName}-value`}
              text={att.value}
              maxLength={2}
            />
            <Editable
              as='span'
              id={`${att.attributeName}-modificator`}
              text={att.modificator}
              maxLength={3}
            />
          </Values>
        </Attribute>
      ))}
    </AttributeList>
  )
}
