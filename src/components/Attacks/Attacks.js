import React from 'react'
import { tableHeaders } from './constants'
import { useShowAll } from '@hooks/useShowAll'
import { Editable } from '@components/Editable/Editable'
import { Container, Table, AllAttacks } from './Attacks.style'

export const Attacks = ({ attacksList }) => {
  const { hiddenItems } = useShowAll({ list: attacksList, maxLength: 4 })
  return (
    <Container>
      <h2>Ataques</h2>
      <Table>
        <tr>
          {tableHeaders.map(theader => (
            <th>{theader}</th>
          ))}
        </tr>
        {attacksList.map((attack, index) => {
          if (index > 3) return
          return (
            <tr>
              <Editable as='td' id={`attackName-${index}`} text={attack.attackName} maxLength={16} />
              <Editable as='td' id={`attackBonus-${index}`} text={attack.bonus} maxLength={9} />
              <Editable as='td' id={`attackDamage-${index}`} text={attack.damage} maxLength={9} />
              <Editable as='td' id={`attackCritic-${index}`} text={attack.critic} maxLength={9} />
              <Editable as='td' id={`attackType-${index}`} text={attack.type} maxLength={9} />
              <Editable as='td' id={`attackRange-${index}`} text={attack.range} maxLength={9} />
              <Editable as='td' id={`attackTest-${index}`} text={attack.test} maxLength={10} />
            </tr>
          )})}
      </Table>
      <AllAttacks>{`${hiddenItems} ocultos | `}<em>ver todos</em></AllAttacks>
    </Container>
  )
}