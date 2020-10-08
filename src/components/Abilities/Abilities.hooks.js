import { useState, useEffect } from 'react'

export const useAbilities = ({ abilitiesList }) => {
  const [hiddenAbilities, setHiddenAbilities] = useState(0)
  useEffect(() => {
    if (abilitiesList.length > 3) setHiddenAbilities(abilitiesList.length - 3)
  }, [])

  return {
    hiddenAbilities
  }
}