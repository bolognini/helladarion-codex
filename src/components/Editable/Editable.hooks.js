import { useRef } from 'react'

export const useEditable = ({ maxLength }) => {
  const elementRef = useRef()

  const placeCaretAtEnd = element => {
    if (
      typeof window.getSelection !== 'undefined'
      && typeof document.createRange !== 'undefined'
    ) {
      const range = document.createRange()
      range.selectNodeContents(element)
      range.collapse(false)
      const selection = window.getSelection()
      selection.removeAllRanges()
      selection.addRange(range)
    } else if (typeof document.body.createTextRange !== 'undefined') {
      const textRange = document.body.createTextRange()
      textRange.moveToElementText(element)
      textRange.collapse(false)
      textRange.select()
    }
  }

  const onInput = e => {
    const { textContent } = e.currentTarget
    const overflowedText = maxLength - elementRef.current.innerText.length
    if (overflowedText <= 0) {
      const trimmedText = textContent.slice(0, maxLength)
      elementRef.current.innerText = trimmedText
      placeCaretAtEnd(elementRef.current)
    }
  }

  return {
    elementRef,
    onInput
  }
}
