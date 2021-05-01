import axios from 'axios'

export const useUpdateData = ({ monsterData, key, onSaveData, onGetData, closeModal }) => {
  const onUpdateData = () => {
    const updatedData = { ...monsterData, [key]: onSaveData() }
    axios
      .put('https://helladarion.herokuapp.com/monster/update', updatedData)
      .then(onGetData)
      .then(closeModal)
      .catch(error => console.error(error))
  }

  return {
    onUpdateData
  }
}
