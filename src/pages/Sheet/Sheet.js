import React from "react"
import { Attributes } from '@components/Attributes/Attributes'
import { Separator } from '@assets'
import { useSheet } from './Sheet.hooks'
import { SHEET_DATA } from './Sheet.mock'
import { Container, Perks, Stats, Name, SkillsWrapper, Skills, Misc } from './Sheet.style'

const Sheet = () => {
  useSheet()

  return (
    <Container>
      <Perks>
        <Name>
          <h1 id='name' contentEditable>{SHEET_DATA.name}</h1>
          <Separator />
          <h2 id='description' contentEditable>{SHEET_DATA.description}</h2>
        </Name>
        <SkillsWrapper>
          <Skills>
            <Attributes attributeList={SHEET_DATA.attributeList}/>
            {/* <Abilities /> */}
            {/* <Abilities /> */}
          </Skills>
          <Misc>
            {/* <Loot /> */}
            {/* <Notes /> */}
          </Misc>
        </SkillsWrapper>
      </Perks>
      <Stats>
        {/* HP AND IMAGE */}
      </Stats>
    </Container>
  )
}

export default Sheet
