import React, { useState } from 'react'
import { Modal as RenderedModal } from 'components/Modal/Modal'

export const useModal = () => {
  const [isVisible, setIsVisible] = useState(false)

  const openModal = () => setIsVisible(true)
  const closeModal = () => setIsVisible(false)

  const Modal = ({ children }) => (
    <>{isVisible && <RenderedModal onClose={closeModal}>{children}</RenderedModal>}</>
  )

  return {
    openModal,
    closeModal,
    Modal
  }
}
