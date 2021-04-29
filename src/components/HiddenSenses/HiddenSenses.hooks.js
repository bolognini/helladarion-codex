import { useState, useEffect } from 'react'
import axios from 'axios'

export const useHiddenSenses = ({ monsterId, monsterData, closeModal }) => {
  const [senseList, setSenseList] = useState([])

  const onSaveSenses = () => {
    const updatedSenses = senseList.reduce((acc, cur, index) => {
      const name = localStorage.getItem(`${monsterId}-Sentidos-abilityName-${index}`)
      const rolling = localStorage.getItem(`${monsterId}-Sentidos-abilityRolling-${index}`)

      if (name === '' && rolling === '') return acc

      return {
        ...acc,
        [index]: {
          name: name || cur.name,
          rolling: rolling || cur.rolling
        }
      }
    }, [])
    return Object.values(updatedSenses)
  }

  const onUpdateSenses = () => {
    const updatedData = { ...monsterData, senses: onSaveSenses() }
    axios
      .put('https://helladarion.herokuapp.com/monster/update', updatedData)
      .then(() => setSenseList(onSaveSenses()))
      .then(closeModal)
      .catch(error => console.error(error))
  }

  useEffect(() => {
    setSenseList(monsterData.senses)
  }, [])

  const onAddInput = () => setSenseList([
    ...senseList,
    { name: '[Novo Sentido]', rolling: '[Rolagem]' }
  ])

  return {
    senseList,
    onAddInput,
    onSaveSenses,
    onUpdateSenses
  }
}
