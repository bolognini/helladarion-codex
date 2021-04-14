import React from 'react'
import { Editable } from 'components/Editable/Editable'
import { AttributeList, Attribute, AttName, Values } from './Attributes.style'

export const Attributes = ({ attributeList }) => (
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
          />
          <Editable
            as='span'
            id={`${att.name}-modificator`}
            text={att.modificator}
            maxLength={3}
          />
        </Values>
      </Attribute>
    ))}
  </AttributeList>
)
