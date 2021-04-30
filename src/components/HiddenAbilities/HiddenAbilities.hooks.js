import { useState, useEffect } from 'react'
import axios from 'axios'

export const useHiddenAbilities = ({ type, monsterId, monsterData, closeModal }) => {
  const [list, setList] = useState([])
  const [typeKeys, setTypeKeys] = useState({})

  const onSaveAbilities = () => {
    const updatedAbilities = list.reduce((acc, cur, index) => {
      const name = localStorage.getItem(`${monsterId}-${typeKeys.localStorageKey}-abilityName-${index}`)
      const rolling = localStorage.getItem(`${monsterId}-${typeKeys.localStorageKey}-abilityRolling-${index}`)

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

  const onUpdateAbilities = () => {
    const updatedData = { ...monsterData, [type]: onSaveAbilities() }
    axios
      .put('https://helladarion.herokuapp.com/monster/update', updatedData)
      .then(() => setList(onSaveAbilities()))
      .then(closeModal)
      .catch(error => console.error(error))
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
    onUpdateAbilities
  }
}
