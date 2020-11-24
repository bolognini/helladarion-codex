import React from 'react'
import { Editable } from '@components/Editable/Editable'
import { AttributeList, Attribute, AttName, Values } from './Attributes.style'

export const Attributes = ({ attributeList }) => {
  return (
    <AttributeList>
      {attributeList.map(att => (
        <Attribute>
          <AttName>{att.attributeName}</AttName>
          <Values>
            <Editable as='span' id={`${att.attributeName}-value`} text={att.value}/>
            <Editable as='span' id={`${att.attributeName}-modificator`} text={att.modificator}/>
          </Values>
        </Attribute>
      ))}
    </AttributeList>
  )
}
