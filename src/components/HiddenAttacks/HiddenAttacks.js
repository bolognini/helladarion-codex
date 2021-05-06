import React from 'react'
import { useUpdateData } from 'hooks/useUpdateData'
import { onGetQueryParams } from 'utils'
import { Editable } from '../Editable/Editable'
import { Button } from '../Button/Button'
import { useHiddenAttacks } from './HiddenAttacks.hooks'
import { Container, Content, Table, ButtonWrapper } from './HiddenAttacks.style'

export const HiddenAttacks = ({ monsterData, closeModal, onGetData }) => {
  const id = onGetQueryParams()
  const {
    list,
    onSaveAttacks,
    tableHeaders,
    onAddInput
  } = useHiddenAttacks({
    id,
    monsterData,
    closeModal
  })
  const { onUpdateData } = useUpdateData({
    monsterData,
    key: 'attacks',
    onSaveData: onSaveAttacks,
    closeModal,
    onGetData
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
                  text={localStorage.getItem(`${id}-attackName-${index}`) || attack.attackName}
                  maxLength={16}
                />
                <Editable
                  as='td'
                  id={`attackBonus-${index}`}
                  text={localStorage.getItem(`${id}-attackBonus-${index}`) || attack.bonus}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackDamage-${index}`}
                  text={localStorage.getItem(`${id}-attackDamage-${index}`) || attack.damage}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackCritic-${index}`}
                  text={localStorage.getItem(`${id}-attackCritic-${index}`) || attack.critic}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackType-${index}`}
                  text={localStorage.getItem(`${id}-attackType-${index}`) || attack.attType}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackRange-${index}`}
                  text={localStorage.getItem(`${id}-attackRange-${index}`) || attack.range}
                  maxLength={9}
                />
                <Editable
                  as='td'
                  id={`attackTest-${index}`}
                  text={localStorage.getItem(`${id}-attackTest-${index}`) || attack.test}
                  maxLength={10}
                />
              </tr>
            ))}
          </tbody>
        </Table>
        <ButtonWrapper>
          <Button secondary text='Novo Ataque' onClick={onAddInput} />
          <Button text='Salvar e fechar' onClick={onUpdateData} />
        </ButtonWrapper>
      </Content>
    </Container>
  )
}
