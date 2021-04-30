import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { onLoadEditableElements, onSaveEditable } from 'utils'
import { Loot, Notes, HiddenAbilities, HiddenAttacks } from 'components'
import { SHEET_DATA } from './Sheet.mock'

export const useSheet = () => {
  const [modalType, setModalType] = useState(null)
  const [monsterData, setMonsterData] = useState(null)

  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('id')

    if (id) {
      axios.get(`https://helladarion.herokuapp.com/monster/${id}`)
        .then(res => {
          if (res.status === 200) {
            setMonsterData(res.data.monster)
          } else {
            setMonsterData(SHEET_DATA)
          }
        })
        .catch(error => console.error(error))
    } else {
      setMonsterData(SHEET_DATA)
    }

    setTimeout(() => {
      onLoadEditableElements()
    }, 1000)

    onSaveEditable()
  }, [])

  const renderModal = ({ closeModal }) => {
    switch (modalType) {
      case 'senses':
        return <HiddenAbilities type='senses' monsterData={monsterData && monsterData} closeModal={closeModal} />
      case 'resistances':
        return <HiddenAbilities type='resistances' monsterData={monsterData && monsterData} closeModal={closeModal} />
      case 'attacks':
        return <HiddenAttacks monsterData={monsterData && monsterData} closeModal={closeModal} />
      case 'loot':
        return <Loot loot={monsterData && monsterData.treasury} closeModal={closeModal} />
      case 'notes':
        return <Notes notes={monsterData && monsterData.notes} closeModal={closeModal} />
      default:
    }
  }

  return {
    renderModal,
    setModalType,
    monsterData
  }
}
