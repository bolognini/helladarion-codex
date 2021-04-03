import React from 'react'
import {
  Abilities,
  Attacks,
  Attributes,
  Editable,
  HealthPoints,
  MonsterInfo,
  Mugshot
} from 'components'
import { Separator, Loot, Notes } from 'assets'
import { useModal } from 'hooks/useModal'
import { useSheet } from './Sheet.hooks'
import { SHEET_DATA } from './Sheet.mock'
import { Container, Perks, Stats, Name, SkillsWrapper, Skills, AbilitiesWrapper, Misc, IconWrapper } from './Sheet.style'

export const Sheet = () => {
  const { openModal, Modal } = useModal()
  const { renderModal, setModalType } = useSheet()

  return (
    <Container>
      <Modal>
        {renderModal()}
      </Modal>
      <Perks>
        <Name>
          <Editable
            as='h1'
            id='name'
            text={SHEET_DATA.name}
            maxLength={25}
          />
          <Separator />
          <Editable
            as='h2'
            id='description'
            text={SHEET_DATA.description}
            maxLength={180}
          />
        </Name>
        <SkillsWrapper>
          <Skills>
            <Attributes attributeList={SHEET_DATA.attributeList} />
            <AbilitiesWrapper>
              <Abilities
                title='Sentidos'
                modalType='senses'
                abilitiesList={SHEET_DATA.sensesList}
                openModal={openModal}
                setModalType={setModalType}
              />
              <Abilities
                title='Resistências'
                modalType='resistances'
                abilitiesList={SHEET_DATA.resistanceList}
                openModal={openModal}
                setModalType={setModalType}
              />
            </AbilitiesWrapper>
          </Skills>
          <Misc>
            <IconWrapper
              lootIcon
              onClick={() => {
                setModalType('loot')
                openModal()
              }}
            >
              <Loot />
              <span>Tesouro</span>
            </IconWrapper>
            <IconWrapper
              onClick={() => {
                setModalType('notes')
                openModal()
              }}
            >
              <Notes />
              <span>Anotações</span>
            </IconWrapper>
          </Misc>
        </SkillsWrapper>
        <Attacks
          attacksList={SHEET_DATA.attacksList}
          openModal={openModal}
          setModalType={setModalType}
        />
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
