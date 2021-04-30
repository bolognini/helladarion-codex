import React from 'react'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { Container, ButtonWrapper } from './Loot.style'

export const Loot = ({ loot, closeModal }) => {
  const monsterId = new URLSearchParams(window.location.search).get('id')

  return (
    <Container>
      <h2>— Tesouros do Monstro —</h2>
      <Editable
        as='textarea'
        id='treasury'
        text={localStorage.getItem(`${monsterId}-treasury`) || loot}
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
