import React from 'react'
import { useUpdateData } from 'hooks/useUpdateData'
import { onGetQueryParams } from 'utils'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { useHiddenAbilities } from './HiddenAbilities.hooks'
import {
  Container,
  Content,
  Abilities,
  ButtonWrapper
} from './HiddenAbilities.style'

export const HiddenAbilities = ({ type, monsterData, closeModal, onGetData }) => {
  const id = onGetQueryParams()
  const {
    list,
    onAddInput,
    onSaveAbilities,
    typeKeys
  } = useHiddenAbilities({
    type,
    id,
    monsterData
  })
  const { onUpdateData } = useUpdateData({
    monsterData,
    key: type,
    onSaveData: onSaveAbilities,
    onGetData,
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
                text={
                  localStorage.getItem(
                    `${id}-${typeKeys.localStorageKey}-abilityName-${index}`
                  ) || ability.name
                }
                maxLength={20}
              />
              <Editable
                as='span'
                id={`${typeKeys.localStorageKey}-abilityRolling-${index}`}
                text={
                  localStorage.getItem(
                    `${id}-${typeKeys.localStorageKey}-abilityRolling-${index}`
                  ) || ability.rolling
                }
                maxLength={20}
              />
            </li>
          ))}
        </Abilities>
        <ButtonWrapper>
          <Button secondary text={typeKeys.buttonText} onClick={onAddInput} />
          <Button text='Salvar e fechar' onClick={onUpdateData} />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
