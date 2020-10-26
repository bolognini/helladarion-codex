import React from "react"
import { Attributes } from '@components/Attributes/Attributes'
import { Abilities } from '@components/Abilities/Abilities'
import { Attacks } from '@components/Attacks/Attacks'
import { MonsterInfo } from '@components/MonsterInfo/MonsterInfo'
import { HealthPoints } from '@components/HealthPoints/HealthPoints'
import { Mugshot } from '@components/Mugshot/Mugshot'
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
          <h1 id='name' contentEditable>{SHEET_DATA.name}</h1>
          <Separator />
          <h2 id='description' contentEditable>{SHEET_DATA.description}</h2>
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
