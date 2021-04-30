import React from 'react'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { useHiddenAttacks } from './HiddenAttacks.hooks'
import { Container, Content, Table, ButtonWrapper } from './HiddenAttacks.style'

export const HiddenAttacks = ({ monsterData, closeModal }) => {
  const monsterId = new URLSearchParams(window.location.search).get('id')
  const {
    list,
    tableHeaders,
    onAddInput,
    onUpdateAttacks
  } = useHiddenAttacks({
    monsterId,
    monsterData,
    closeModal
  })

  return (
    <Container>
      <h2>— Todos os Ataques —</h2>
      <Content>
        <Table>
          <thead>
            <tr>
              {tableHeaders.map((theader, index) => (
                <th key={index}>{theader}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {list.map((attack, index) => (
              <tr key={`attackName-${index}`}>
                <Editable
                  as='td'
                  id={`attackName-${index}`}
                  text={attack.attackName}
                  maxLength={16}
                />
                <Editable
                  as='td'
                  id={`attackBonus-${index}`}
                  text={attack.bonus}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackDamage-${index}`}
                  text={attack.damage}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackCritic-${index}`}
                  text={attack.critic}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackType-${index}`}
                  text={attack.attType}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackRange-${index}`}
                  text={attack.range}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackTest-${index}`}
                  text={attack.test}
                  maxLength={10}
                />
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonWrapper>
          <Button secondary text='Novo Ataque' onClick={onAddInput} />
          <Button text='Salvar e fechar' onClick={onUpdateAttacks} />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
