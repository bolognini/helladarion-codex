import React from 'react'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { useHiddenSenses } from './HiddenSenses.hooks'
import { Container, Content, Senses, ButtonWrapper } from './HiddenSenses.style'

export const HiddenSenses = ({ monsterData, closeModal }) => {
  const monsterId = new URLSearchParams(window.location.search).get('id')
  const {
    senseList,
    onAddInput,
    onUpdateSenses
  } = useHiddenSenses({
    monsterId,
    monsterData,
    closeModal
  })

  return (
    <Container>
      <h2>— Todos os Sentidos —</h2>
      <Content>
        <Senses>
          {senseList.map((sense, index) => (
            <li key={index}>
              <Editable
                as='span'
                id={`Sentidos-abilityName-${index}`}
                text={localStorage.getItem(`${monsterId}-Sentidos-abilityName-${index}`) || sense.name}
                maxLength={18}
              />
              <Editable
                as='span'
                id={`Sentidos-abilityRolling-${index}`}
                text={localStorage.getItem(`${monsterId}-Sentidos-abilityRolling-${index}`) || sense.rolling}
                maxLength={16}
              />
            </li>
          ))}
        </Senses>
        <ButtonWrapper>
          <Button
            secondary
            text='Novo Sentido'
            onClick={onAddInput}
          />
          <Button
            text='Salvar e fechar'
            onClick={onUpdateSenses}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
