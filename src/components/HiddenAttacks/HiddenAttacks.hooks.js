import { useState, useEffect } from 'react'

export const useHiddenAttacks = ({ id, monsterData }) => {
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
      const name = localStorage.getItem(`${id}-attackName-${index}`)
      const damage = localStorage.getItem(`${id}-attackDamage-${index}`)
      const bonus = localStorage.getItem(`${id}-attackBonus-${index}`)
      const test = localStorage.getItem(`${id}-attackTest-${index}`)
      const critic = localStorage.getItem(`${id}-attackCritic-${index}`)
      const range = localStorage.getItem(`${id}-attackRange-${index}`)
      const type = localStorage.getItem(`${id}-attackType-${index}`)

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
    onSaveAttacks,
    onAddInput,
    tableHeaders
  }
}
