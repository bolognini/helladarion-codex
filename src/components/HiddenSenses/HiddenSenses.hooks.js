import { useState, useEffect } from 'react'
import axios from 'axios'

export const useHiddenSenses = ({ monsterId, monsterData, closeModal }) => {
  const [senseList, setSenseList] = useState([])

  useEffect(() => {
    setSenseList(monsterData.senses)
  }, [])

  const onAddInput = () => setSenseList([
    ...senseList,
    { name: '[Novo Sentido]', rolling: '[Rolagem]' }
  ])

  const onSaveSenses = () => {
    const updatedSenses = senseList.map((sense, index) => ({
      name: localStorage.getItem(`${monsterId}-Sentidos-abilityName-${index}`) || sense.name,
      rolling: localStorage.getItem(`${monsterId}-Sentidos-abilityRolling-${index}`) || sense.rolling
    }))
    return updatedSenses
  }

  const onUpdateSenses = () => {
    const updatedData = { ...monsterData, senses: onSaveSenses() }
    closeModal()
    axios
      .put('https://helladarion.herokuapp.com/monster/update', updatedData)
      .then(closeModal)
      .catch(error => console.error(error))
  }

  return {
    senseList,
    onAddInput,
    onSaveSenses,
    onUpdateSenses
  }
}
