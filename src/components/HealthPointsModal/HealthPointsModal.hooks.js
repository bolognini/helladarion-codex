import { useState } from 'react'
import { onGetQueryParams } from 'utils'

const id = onGetQueryParams()

export const useHealthPointsModal = ({ monsterData }) => {
  const [maximumHealth, setMaximumHealth] = useState(monsterData.healthpoints)
  const [currentHealth, setCurrentHealth] = useState(
    localStorage.getItem(`${id}-currentHealth`) || monsterData.currentHealth
  )

  const updateHealth = ({ value, type }) => {
    if (type === 'healthpoints') {
      setMaximumHealth(value)
    } else {
      setCurrentHealth(value)
    }
  }

  return {
    maximumHealth,
    currentHealth,
    updateHealth
  }
}
