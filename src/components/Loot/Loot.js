import React from 'react'
import { useUpdateData } from 'hooks/useUpdateData'
import { onGetQueryParams } from 'utils'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { Container, ButtonWrapper } from './Loot.style'

export const Loot = ({ monsterData, closeModal, onGetData }) => {
  const id = onGetQueryParams()
  const loot = localStorage.getItem(`${id}-treasury`) || monsterData.treasury
  const onSaveData = () => localStorage.getItem(`${id}-treasury`) || monsterData.treasury

  const { onUpdateData } = useUpdateData({
    monsterData,
    key: 'treasury',
    onSaveData,
    closeModal,
    onGetData
  })

  return (
    <Container>
      <h2>— Tesouros do Monstro —</h2>
      <Editable
        as='textarea'
        id='treasury'
        text={loot}
      />
      <ButtonWrapper>
        <Button
          text='Salvar e fechar'
          onClick={onUpdateData}
        />
      </ButtonWrapper>
    </Container>
  )
}
