import React from 'react'
import { useShowAll } from 'hooks/useShowAll'
import { tableHeaders } from './constants'
import { Container, AttacksHeader, Table, AllAttacks } from './Attacks.style'

export const Attacks = ({ attacksList, setModalType, openModal }) => {
  const { hiddenItems } = useShowAll({ list: attacksList, maxLength: 4 })
  return (
    <Container>
      <AttacksHeader>
        <h2>Ataques</h2>
        <AllAttacks>{`${hiddenItems} ocultos | `}
          <em
            role='link'
            tabIndex={0}
            onClick={() => {
              setModalType('attacks')
              openModal()
            }}
          >
            editar / ver todos
          </em>
        </AllAttacks>
      </AttacksHeader>
      <Table>
        <thead>
          <tr>
            {tableHeaders.map((theader, index) => (
              <th key={index}>{theader}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {attacksList && attacksList.map((attack, index) => {
            if (index > 3) return
            return (
              <tr key={`attackName-${index}`}>
                <td id={`attackName-${index}`}>{attack.attackName}</td>
                <td id={`attackAction-${index}`}>{attack.action}</td>
                <td id={`attackManaCost-${index}`}>{attack.manaCost}</td>
                <td id={`attackDamage-${index}`}>{attack.damage}</td>
                <td id={`attackBonus-${index}`}>{attack.bonus}</td>
                <td id={`attackCritic-${index}`}>{attack.critic}</td>
                <td id={`attackType-${index}`}>{attack.attType}</td>
                <td id={`attackRange-${index}`}>{attack.range}</td>
                <td id={`attackTest-${index}`}>{attack.test}</td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </Container>
  )
}
