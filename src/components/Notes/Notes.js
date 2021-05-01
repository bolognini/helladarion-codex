import React from 'react'
import { useUpdateData } from 'hooks/useUpdateData'
import { onGetQueryParams } from 'utils'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { Container, ButtonWrapper } from './Notes.style'

export const Notes = ({ monsterData, closeModal, onGetData }) => {
  const id = onGetQueryParams()
  const notes = localStorage.getItem(`${id}-notes`) || monsterData.notes
  const onSaveData = () => localStorage.getItem(`${id}-notes`) || monsterData.treasury

  const { onUpdateData } = useUpdateData({
    monsterData,
    key: 'notes',
    onSaveData,
    closeModal,
    onGetData
  })

  return (
    <Container>
      <h2>— Notas Gerais —</h2>
      <Editable
        as='textarea'
        id='notes'
        text={notes}
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
