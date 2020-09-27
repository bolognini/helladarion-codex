import { useEffect } from 'react'
import { onLoadEditableElements, onSaveEditable } from '@utils'

export const useSheet = () => {
  useEffect(() => {
    onLoadEditableElements()
    onSaveEditable()
  }, [])
}