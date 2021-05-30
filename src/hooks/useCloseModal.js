import { useEffect } from 'react'

export const useCloseModal = (ref, onClose) => {
  useEffect(() => {
    const listener = event => {
      if (
        !ref.current || ref.current.contains(event.target) || event.keyCode !== 27
      ) {
        return
      }

      onClose(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    document.addEventListener('keyup', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
      document.removeEventListener('keyup', listener)
    }
  }, [ref, onClose])
}
