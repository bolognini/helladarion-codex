import React, { useState, useEffect } from 'react'
import { onLoadEditableElements, onSaveEditable } from 'utils'

export const useSheet = () => {
  const [modalType, setModalType] = useState(null)
  useEffect(() => {
    onLoadEditableElements()
    onSaveEditable()
  }, [])

  const renderModal = () => {
    switch (modalType) {
      case 'senses':
        return (
          <div>Todos os Sentidos</div>
        )
      case 'resistances':
        return (
          <div>Todas as Resistências</div>
        )
      case 'attacks':
        return (
          <div>Todas as Habilidades</div>
        )
      case 'loot':
        return (
          <div>Tesouros do Inimigo</div>
        )
      case 'notes':
        return (
          <div>Anotações Gerais</div>
        )
      default:
    }
  }

  return {
    renderModal,
    setModalType
  }
}
