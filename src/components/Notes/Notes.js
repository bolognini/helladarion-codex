import React from 'react'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { Container, ButtonWrapper } from './Notes.style'

export const Notes = ({ notes, closeModal }) => {
  const monsterId = new URLSearchParams(window.location.search).get('id')

  return (
    <Container>
      <h2>— Notas Gerais —</h2>
      <Editable
        as='textarea'
        id='notes'
        text={localStorage.getItem(`${monsterId}-notes`) || notes}
      />
      <ButtonWrapper>
        <Button
          text='Salvar e fechar'
          onClick={closeModal}
        />
      </ButtonWrapper>
    </Container>
  )
}
