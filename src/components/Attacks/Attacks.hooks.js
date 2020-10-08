import { useState, useEffect } from 'react'

export const useAttacks = ({ attacksList }) => {
  const [hiddenAttacks, setHiddenAttacks] = useState(0)
  useEffect(() => {
    if (attacksList.length > 4) setHiddenAttacks(attacksList.length - 4)
  }, [])

  return {
    hiddenAttacks
  }
}