import { useState, useEffect } from 'react'
import axios from 'axios'

export const useHiddenAttacks = ({ monsterId, monsterData, closeModal }) => {
  const [list, setList] = useState([])
  const tableHeaders = [
    '',
    'Bônus',
    'Dano',
    'Crítico',
    'Tipo',
    'Alcance',
    'Teste'
  ]

  const onSaveAttacks = () => {
    const updatedAttacks = list.reduce((acc, cur, index) => {
      const name = localStorage.getItem(`${monsterId}-attackName-${index}`)
      const damage = localStorage.getItem(`${monsterId}-attackDamage-${index}`)
      const bonus = localStorage.getItem(`${monsterId}-attackBonus-${index}`)
      const test = localStorage.getItem(`${monsterId}-attackTest-${index}`)
      const critic = localStorage.getItem(`${monsterId}-attackCritic-${index}`)
      const range = localStorage.getItem(`${monsterId}-attackRange-${index}`)
      const type = localStorage.getItem(`${monsterId}-attackType-${index}`)

      const attackFields = [name, damage, bonus, test, critic, range, type]
      const emptyAttack = attackFields.every(field => field === '')

      if (emptyAttack) return acc

      return {
        ...acc,
        [index]: {
          attackName: name || cur.attackName,
          damage: damage || cur.damage,
          bonus: bonus || cur.bonus,
          test: test || cur.test,
          critic: critic || cur.critic,
          range: range || cur.range,
          attType: type || cur.attType
        }
      }
    }, [])
    return Object.values(updatedAttacks)
  }

  const onUpdateAttacks = () => {
    const updatedData = { ...monsterData, attacks: onSaveAttacks() }
    axios
      .put('https://helladarion.herokuapp.com/monster/update', updatedData)
      .then(() => setList(onSaveAttacks()))
      .then(closeModal)
      .catch(error => console.error(error))
  }

  useEffect(() => {
    setList(monsterData.attacks)
  }, [])

  const onAddInput = () => setList([
    ...list,
    {
      attType: '',
      attackName: '[Novo Ataque]',
      bonus: '',
      critic: '',
      damage: '',
      range: '',
      test: ''
    }
  ])

  return {
    list,
    onAddInput,
    tableHeaders,
    onUpdateAttacks
  }
}
