import React, { useRef } from 'react'
import { useCloseModal } from 'hooks/useCloseModal'
import { Container } from './Modal.styled'

export const Modal = ({ onClose, children }) => {
  const ref = useRef()

  useCloseModal(ref, onClose)

  return (
    <Container ref={ref}>
      <aside>
        {children}
      </aside>
    </Container>
  )
}
