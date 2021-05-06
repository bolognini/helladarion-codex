import { useState } from 'react'
import { onGetQueryParams } from 'utils'

export const useHealthPoints = ({ healthpoints, currentHp, setModalType, openModal }) => {
  const id = onGetQueryParams()
  const [currentHealth, setCurrentHealth] = useState(currentHp || healthpoints)

  const trimNegativeResult = modifier => {
    const result = currentHealth - modifier
    if (result < 0) {
      setCurrentHealth(0)
      localStorage.setItem(`${id}-currentHealth`, 0)
      return
    }
    setCurrentHealth(result)
    localStorage.setItem(`${id}-currentHealth`, result)
  }

  const trimMaximunResult = modifier => {
    const result = Number(currentHealth) + modifier
    if (result > healthpoints) {
      setCurrentHealth(healthpoints)
      localStorage.setItem(`${id}-currentHealth`, healthpoints)
      return
    }
    setCurrentHealth(result)
    localStorage.setItem(`${id}-currentHealth`, result)
  }

  const removeOnePoint = () => trimNegativeResult(1)
  const removeTenPoints = () => trimNegativeResult(10)
  const addOnePoint = () => trimMaximunResult(1)
  const addTenPoints = () => trimMaximunResult(10)

  const updateHealthPoints = () => {
    setModalType('healthpoints')
    openModal()
  }

  return {
    currentHealth: localStorage.getItem(`${id}-currentHealth`) || currentHealth,
    removeOnePoint,
    removeTenPoints,
    addOnePoint,
    addTenPoints,
    updateHealthPoints
  }
}
