import React from "react"
import {
  Abilities,
  Attacks,
  Attributes,
  Editable,
  HealthPoints,
  MonsterInfo,
  Mugshot
} from '@components'
import { Separator, Loot, Notes } from '@assets'
import { useSheet } from './Sheet.hooks'
import { SHEET_DATA } from './Sheet.mock'
import { Container, Perks, Stats, Name, SkillsWrapper, Skills, AbilitiesWrapper, Misc, IconWrapper } from './Sheet.style'

const Sheet = () => {
  useSheet()

  return (
    <Container>
      <Perks>
        <Name>
          <Editable as='h1' id='name' text={SHEET_DATA.name} />
          <Separator />
          <Editable as='h2' id='description' text={SHEET_DATA.description} />
        </Name>
        <SkillsWrapper>
          <Skills>
            <Attributes attributeList={SHEET_DATA.attributeList}/>
            <AbilitiesWrapper>
              <Abilities title='Sentidos' abilitiesList={SHEET_DATA.sensesList} />
              <Abilities title='Resistências' abilitiesList={SHEET_DATA.resistanceList} />
            </AbilitiesWrapper>
          </Skills>
          <Misc>
            <IconWrapper lootIcon>
              <Loot />
              <span>Tesouro</span>
            </IconWrapper>
            <IconWrapper>
              <Notes />
              <span>Anotações</span>
            </IconWrapper>
          </Misc>
        </SkillsWrapper>
        <Attacks attacksList={SHEET_DATA.attacksList}/>
      </Perks>
      <Stats>
        <MonsterInfo
          defense={SHEET_DATA.defense}
          distance={SHEET_DATA.distance}
          level={SHEET_DATA.level}
        />
        <HealthPoints healthpoints={SHEET_DATA.healthpoints} />
        <Mugshot />
      </Stats>
    </Container>
  )
}

export default Sheet
