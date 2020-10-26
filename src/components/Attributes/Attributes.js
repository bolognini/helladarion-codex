import React from 'react'
import { AttributeList, Attribute, AttName, Values } from './Attributes.style'

export const Attributes = ({ attributeList }) => {
  return (
    <AttributeList>
      {attributeList.map(att => (
        <Attribute>
          <AttName>{att.attributeName}</AttName>
          <Values>
            <span id={`${att.attributeName}-value`} contentEditable>{att.value}</span>
            <span id={`${att.attributeName}-modificator`} contentEditable>{att.modificator}</span>
          </Values>
        </Attribute>
      ))}
    </AttributeList>
  )
}
