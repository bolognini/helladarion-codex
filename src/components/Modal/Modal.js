import React, { useRef } from 'react'
import { useCloseModal } from 'hooks/useCloseModal'
import { Overlay, Container, CloseIcon } from './Modal.styled'

export const Modal = ({ onClose, children }) => {
  const ref = useRef()

  useCloseModal(ref, onClose)

  return (
    <Overlay>
      <Container ref={ref}>
        <CloseIcon
          onClick={() => {
            localStorage.setItem('isFirstAccess', false)
            onClose()
          }}
        >
          ✕
        </CloseIcon>
        <aside>{children}</aside>
      </Container>
    </Overlay>
  )
}
