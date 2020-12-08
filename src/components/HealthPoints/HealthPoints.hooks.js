import { useState } from 'react'

export const useHealthPoints = ({ healthpoints }) => {
  const [currentHealth, setCurrentHealth] = useState(healthpoints)

  const trimNegativeResult = modifier => {
    const result = currentHealth - modifier
    if (result < 0) {
      return setCurrentHealth(0)
    }
    setCurrentHealth(result)
  }

  const trimMaximunResult = modifier => {
    const result = currentHealth + modifier
    if (result > healthpoints) {
      return setCurrentHealth(healthpoints)
    }
    setCurrentHealth(result)
  }

  const removeOnePoint = () => trimNegativeResult(1)
  const removeTenPoints = () => trimNegativeResult(10)
  const addOnePoint = () => trimMaximunResult(1)
  const addTenPoints = () => trimMaximunResult(10)

  return {
    currentHealth,
    removeOnePoint,
    removeTenPoints,
    addOnePoint,
    addTenPoints
  }
}
