import React from 'react'
import { tableHeaders } from './constants'
import { useAttacks } from './Attacks.hooks'
import { Container, Table, AllAttacks } from './Attacks.style'

export const Attacks = ({ attacksList }) => {
  const { hiddenAttacks } = useAttacks({ attacksList })
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
              <td id={`attackName-${index}`} contentEditable>{attack.attackName}</td>
              <td id={`attackBonus-${index}`} contentEditable>{attack.bonus}</td>
              <td id={`attackDamage-${index}`} contentEditable>{attack.damage}</td>
              <td id={`attackCritic-${index}`} contentEditable>{attack.critic}</td>
              <td id={`attackType-${index}`} contentEditable>{attack.type}</td>
              <td id={`attackRange-${index}`} contentEditable>{attack.range}</td>
              <td id={`attackTest-${index}`} contentEditable>{attack.test}</td>
            </tr>
          )})}
      </Table>
      <AllAttacks>{`${hiddenAttacks} ocultos | `}<em>ver todos</em></AllAttacks>
    </Container>
  )
}