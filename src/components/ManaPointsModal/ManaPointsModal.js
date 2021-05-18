import React from 'react'
import { useUpdateData } from 'hooks/useUpdateData'
import { Button } from '../Button/Button'
import { useManaPointsModal } from './ManaPointsModal.hooks'
import { Container, ButtonWrapper } from './ManaPointsModal.style'

export const ManaPointsModal = ({ monsterData, closeModal, onGetData }) => {
  const { maximumMana, currentMana, updateMana } = useManaPointsModal({ monsterData })

  const { onUpdateManaPoints } = useUpdateData({
    monsterData,
    closeModal,
    onGetData
  })

  return (
    <Container>
      <h2>— Pontos de Mana —</h2>
      <label htmlFor='maxpoints'>
        Pontos de Mana Máximo
        <input
          id='maxpoints'
          type='number'
          defaultValue={monsterData.manapoints}
          onChange={({ target: { value } }) => updateMana({ value, type: 'manapoints' })}
        />
      </label>
      <label htmlFor='currentpoints'>
        Pontos de Mana Atuais
        <input
          id='currentpoints'
          type='number'
          defaultValue={currentMana}
          onChange={({ target: { value } }) => updateMana({ value, type: 'currentMana' })}
        />
      </label>
      <ButtonWrapper>
        <Button
          text='Salvar e fechar'
          onClick={() => onUpdateManaPoints({ manapoints: maximumMana, currentMana })}
        />
      </ButtonWrapper>
    </Container>
  )
}
