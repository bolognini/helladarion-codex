import React from 'react'
import { onGetQueryParams } from 'utils'
import { Button } from '../Button/Button'
import { useSaveModal } from './SaveModal.hooks'
import { Container, ButtonWrapper } from './SaveModal.style'

export const SaveModal = ({ monsterData, closeModal, onGetData }) => {
  const id = onGetQueryParams()

  const { onUpdateMonster } = useSaveModal({ id, monsterData, onGetData, closeModal })

  return (
    <Container>
      <h2>— Salvar Alterações —</h2>
      <ButtonWrapper>
        <Button
          secondary
          text='Cancelar e fechar'
          onClick={closeModal}
        />
        <Button
          text='Salvar e fechar'
          onClick={onUpdateMonster}
        />
      </ButtonWrapper>
    </Container>
  )
}
