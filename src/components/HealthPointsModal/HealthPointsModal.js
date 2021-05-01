import React, { useState } from 'react'
import { useUpdateData } from 'hooks/useUpdateData'
import { onGetQueryParams } from 'utils'
import { Button } from '../Button/Button'
import { Container, ButtonWrapper } from './HealthPointsModal.style'

export const HealthPointsModal = ({ monsterData, closeModal, onGetData }) => {
  const id = onGetQueryParams()
  const [maximumHealth, setMaximumHealth] = useState(monsterData.healthpoints)
  const [currentHealth, setCurrentHealth] = useState(localStorage.getItem(`${id}-currentHealth`) || monsterData.currentHealth)

  const { onUpdateHealthPoints } = useUpdateData({
    monsterData,
    closeModal,
    onGetData
  })

  const updateHealth = ({ value, type }) => {
    if (type === 'healthpoints') {
      setMaximumHealth(value)
    } else {
      setCurrentHealth(value)
    }
  }

  return (
    <Container>
      <h2>— Pontos de Vida —</h2>
      <label htmlFor='healthpoints'>
        Pontos de Vida Máximo
        <input
          id='healthpoints'
          type='number'
          defaultValue={monsterData.healthpoints}
          onChange={({ target: { value } }) => updateHealth({ value, type: 'healthpoints' })}
        />
      </label>
      <label htmlFor='healthpoints'>
        Pontos de Vida Atuais
        <input
          id='healthpoints'
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
