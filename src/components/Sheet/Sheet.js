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
import { Container, Perks, Stats, Name, SkillsWrapper, Skills, AbilitiesWrapper, Misc, IconWrapper } from './Sheet.style'

export const Sheet = () => {
  const { openModal, closeModal, Modal } = useModal()
  const { renderModal, setModalType, monsterData, onUpdateMonster } = useSheet()

  return (
    <>
      {monsterData && (
        <Container>
          <Modal>
            {renderModal({ closeModal })}
          </Modal>
          <Perks>
            <Name>
              <Editable
                as='h1'
                id='name'
                text={monsterData.name}
                maxLength={25}
              />
              <Separator />
              <Editable
                as='h2'
                id='description'
                text={monsterData.description}
                maxLength={180}
              />
            </Name>
            <button type='button' onClick={onUpdateMonster}>ATUALIZAR BONECO</button>
            <SkillsWrapper>
              <Skills>
                <Attributes attributeList={monsterData.attributes} />
                <AbilitiesWrapper>
                  <Abilities
                    title='Sentidos'
                    modalType='senses'
                    abilitiesList={monsterData.senses}
                    openModal={openModal}
                    setModalType={setModalType}
                  />
                  <Abilities
                    title='Resistências'
                    modalType='resistances'
                    abilitiesList={monsterData.resistances}
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
              attacksList={monsterData.attacks}
              openModal={openModal}
              setModalType={setModalType}
            />
          </Perks>
          <Stats>
            <MonsterInfo
              defense={monsterData.defense}
              distance={monsterData.distance}
              level={monsterData.level}
            />
            <HealthPoints healthpoints={monsterData.healthpoints} />
            <Mugshot image={monsterData.mugshot && window.atob(monsterData.mugshot)} />
          </Stats>
        </Container>
      )}
    </>
  )
}
