import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { onLoadEditableElements, onSaveEditable, onGetQueryParams } from 'utils'
import { Loot, Notes, HiddenAbilities, HiddenAttacks, HealthPointsModal } from 'components'
import { SHEET_DATA } from './Sheet.mock'

export const useSheet = () => {
  const [modalType, setModalType] = useState(null)
  const [monsterData, setMonsterData] = useState(null)
  const id = onGetQueryParams()

  const onGetData = () => {
    axios.get(`https://helladarion.herokuapp.com/monster/${id}`)
      .then(res => {
        if (res.status === 200) {
          setMonsterData(res.data.monster)
        } else {
          setMonsterData(SHEET_DATA)
        }
      })
      .catch(error => console.error(error))
  }

  useEffect(() => {
    if (id) {
      onGetData({ id })
    } else {
      setMonsterData(SHEET_DATA)
    }

    setTimeout(() => {
      onLoadEditableElements()
    }, 1000)

    onSaveEditable()
  }, [])

  const renderModal = ({ closeModal }) => {
    const data = monsterData && monsterData
    switch (modalType) {
      case 'senses':
        return <HiddenAbilities type='senses' monsterData={data} closeModal={closeModal} onGetData={onGetData} />
      case 'resistances':
        return <HiddenAbilities type='resistances' monsterData={data} closeModal={closeModal} onGetData={onGetData} />
      case 'attacks':
        return <HiddenAttacks monsterData={data} closeModal={closeModal} onGetData={onGetData} />
      case 'loot':
        return <Loot monsterData={data} closeModal={closeModal} onGetData={onGetData} />
      case 'notes':
        return <Notes monsterData={data} closeModal={closeModal} onGetData={onGetData} />
      case 'healthpoints':
        return <HealthPointsModal monsterData={data} closeModal={closeModal} onGetData={onGetData} />
      default:
    }
  }

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
      .catch(error => console.error(error))
  }

  return {
    renderModal,
    setModalType,
    monsterData,
    onUpdateMonster,
    onGetData
  }
}
