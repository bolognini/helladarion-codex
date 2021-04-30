import React from 'react'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { useHiddenAbilities } from './HiddenAbilities.hooks'
import { Container, Content, Abilities, ButtonWrapper } from './HiddenAbilities.style'

export const HiddenAbilities = ({ type, monsterData, closeModal }) => {
  const monsterId = new URLSearchParams(window.location.search).get('id')
  const {
    list,
    onAddInput,
    onUpdateAbilities,
    typeKeys
  } = useHiddenAbilities({
    type,
    monsterId,
    monsterData,
    closeModal
  })

  return (
    <Container>
      <h2>{typeKeys.title}</h2>
      <Content>
        <Abilities>
          {list.map((ability, index) => (
            <li key={index}>
              <Editable
                as='span'
                id={`${typeKeys.localStorageKey}-abilityName-${index}`}
                text={localStorage.getItem(`${monsterId}-${typeKeys.localStorageKey}-abilityName-${index}`) || ability.name}
                maxLength={18}
              />
              <Editable
                as='span'
                id={`${typeKeys.localStorageKey}-abilityRolling-${index}`}
                text={localStorage.getItem(`${monsterId}-${typeKeys.localStorageKey}-abilityRolling-${index}`) || ability.rolling}
                maxLength={16}
              />
            </li>
          ))}
        </Abilities>
        <ButtonWrapper>
          <Button
            secondary
            text={typeKeys.buttonText}
            onClick={onAddInput}
          />
          <Button
            text='Salvar e fechar'
            onClick={onUpdateAbilities}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
