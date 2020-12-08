import { useState, useEffect } from 'react'

export const useShowAll = ({ list, maxLength }) => {
  const [hiddenItems, setHiddenItems] = useState(0)
  useEffect(() => {
    if (list.length > maxLength) setHiddenItems(list.length - maxLength)
  }, [])

  return {
    hiddenItems
  }
}
