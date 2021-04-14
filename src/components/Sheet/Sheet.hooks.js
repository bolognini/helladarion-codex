import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { onLoadEditableElements, onSaveEditable } from 'utils'

export const useSheet = () => {
  const [modalType, setModalType] = useState(null)
  const [monsterData, setMonsterData] = useState(null)

  useEffect(() => {
    const monsterId = new URLSearchParams(window.location.search).get('id')

    axios.get(`http://localhost:3333/monster/${monsterId}`)
      .then(({ data: { monster } }) => setMonsterData(monster))
      .catch(error => console.error(error))

    onLoadEditableElements()
    onSaveEditable()
  }, [])

  const renderModal = () => {
    switch (modalType) {
      case 'senses':
        return <div>Todos os Sentidos</div>
      case 'resistances':
        return <div>Todas as Resistências</div>
      case 'attacks':
        return <div>Todas as Habilidades</div>
      case 'loot':
        return <div>Tesouros do Inimigo</div>
      case 'notes':
        return <div>Anotações Gerais</div>
      default:
    }
  }

  return {
    renderModal,
    setModalType,
    monsterData
  }
}
