import axios from 'axios'
import { onGetQueryParams } from 'utils'

const id = onGetQueryParams()

export const useUpdateData = ({ monsterData, key, onSaveData, onGetData, closeModal }) => {
  const onUpdateData = () => {
    const updatedData = { ...monsterData, [key]: onSaveData() }
    axios
      .put('https://helladarion.herokuapp.com/monster/update', updatedData)
      .then(onGetData)
      .then(closeModal)
      .catch(error => console.error(error))
  }

  const onUpdateHealthPoints = ({ healthpoints, currentHealth }) => {
    const updatedData = { ...monsterData, healthpoints, currentHealth }
    axios
      .put('https://helladarion.herokuapp.com/monster/update', updatedData)
      .then(() => localStorage.removeItem(`${id}-currentHealth`))
      .then(onGetData)
      .then(closeModal)
      .catch(error => console.error(error))
  }

  return {
    onUpdateData,
    onUpdateHealthPoints
  }
}
