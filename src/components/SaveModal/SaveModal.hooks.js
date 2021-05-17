import axios from 'axios'

export const useSaveModal = ({ id, monsterData, onGetData, closeModal }) => {
  const onUpdateMonster = () => {
    const newData = Object.keys(localStorage).reduce((acc, cur) => {
      if (cur.includes(`${id}-`)) {
        const key = cur.replace(`${id}-`, '')
        const value = localStorage.getItem(cur)

        if (/(FOR|DES|CON|INT|SAB|CAR)/gm.test(key)) return acc

        return {
          ...acc,
          [key]: value
        }
      }
      return acc
    }, {})

    const attributeList = JSON.parse(localStorage.getItem('attributes')) || monsterData.attributes
    const organizedData = { ...newData, attributes: [...attributeList] }
    const updatedData = { ...monsterData, ...organizedData }

    axios
      .put('https://helladarion.herokuapp.com/monster/update', updatedData)
      .then(() => localStorage.clear())
      .then(onGetData)
      .then(closeModal)
      .catch(error => console.error(error))
      .finally(closeModal)
  }

  return {
    onUpdateMonster
  }
}
