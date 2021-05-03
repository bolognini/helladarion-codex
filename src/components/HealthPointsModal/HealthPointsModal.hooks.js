import { useState } from 'react'
import { onGetQueryParams } from 'utils'

const id = onGetQueryParams()

export const useHealthPointsModal = ({ monsterData }) => {
  const [maximumHealth, setMaximumHealth] = useState(monsterData.healthpoints)
  const [currentHealth, setCurrentHealth] = useState(
    localStorage.getItem(`${id}-currentHealth`) || monsterData.currentHealth
  )

  const trimValue = (value, setter) => {
    if (value < 0) setter(0)
    else if (value > 9999) setter(9999)
    else setter(value)
  }

  const updateHealth = ({ value, type }) => {
    if (type === 'healthpoints') {
      trimValue(value, setMaximumHealth)
    } else {
      trimValue(value, setCurrentHealth)
    }
  }

  return {
    maximumHealth,
    currentHealth,
    updateHealth
  }
}
