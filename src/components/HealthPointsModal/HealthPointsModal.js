import React from 'react'
import { useUpdateData } from 'hooks/useUpdateData'
import { Button } from '../Button/Button'
import { useHealthPointsModal } from './HealthPointsModal.hooks'
import { Container, ButtonWrapper } from './HealthPointsModal.style'

export const HealthPointsModal = ({ monsterData, closeModal, onGetData }) => {
  const { maximumHealth, currentHealth, updateHealth } = useHealthPointsModal({ monsterData })

  const { onUpdateHealthPoints } = useUpdateData({
    monsterData,
    closeModal,
    onGetData
  })

  return (
    <Container>
      <h2>— Pontos de Vida —</h2>
      <label htmlFor='maxpoints'>
        Pontos de Vida Máximo
        <input
          id='maxpoints'
          type='number'
          defaultValue={monsterData.healthpoints}
          onChange={({ target: { value } }) => updateHealth({ value, type: 'healthpoints' })}
        />
      </label>
      <label htmlFor='currentpoints'>
        Pontos de Vida Atuais
        <input
          id='currentpoints'
          type='number'
          defaultValue={currentHealth}
          onChange={({ target: { value } }) => updateHealth({ value, type: 'currentHealth' })}
        />
      </label>
      <ButtonWrapper>
        <Button
          text='Salvar e fechar'
          onClick={() => onUpdateHealthPoints({ healthpoints: maximumHealth, currentHealth })}
        />
      </ButtonWrapper>
    </Container>
  )
}
