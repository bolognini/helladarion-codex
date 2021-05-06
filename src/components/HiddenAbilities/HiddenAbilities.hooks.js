import { useState, useEffect } from 'react'

export const useHiddenAbilities = ({ type, id, monsterData }) => {
  const [list, setList] = useState([])
  const [typeKeys, setTypeKeys] = useState({})

  const onSaveAbilities = () => {
    const updatedAbilities = list.reduce((acc, cur, index) => {
      const name = localStorage.getItem(`${id}-${typeKeys.localStorageKey}-abilityName-${index}`)
      const rolling = localStorage.getItem(`${id}-${typeKeys.localStorageKey}-abilityRolling-${index}`)

      if (name === '' && rolling === '') return acc

      return {
        ...acc,
        [index]: {
          name: name || cur.name,
          rolling: rolling || cur.rolling
        }
      }
    }, [])
    return Object.values(updatedAbilities)
  }

  useEffect(() => {
    setList(monsterData[type])
    if (type === 'senses') {
      setTypeKeys({
        localStorageKey: 'Sentidos',
        newName: '[Novo Sentido]',
        title: '— Todos os Sentidos —',
        buttonText: 'Novo Sentido'
      })
    } else {
      setTypeKeys({
        localStorageKey: 'Resistências',
        newName: '[Nova Resistência]',
        title: '— Todas as Resistências —',
        buttonText: 'Nova Resistência'
      })
    }
  }, [])

  const onAddInput = () => setList([
    ...list,
    { name: typeKeys.newName, rolling: '[Rolagem]' }
  ])

  return {
    list,
    typeKeys,
    onAddInput,
    onSaveAbilities
  }
}
