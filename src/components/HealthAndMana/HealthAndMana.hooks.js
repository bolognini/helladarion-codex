import { useState } from 'react'
import { onGetQueryParams } from 'utils'

export const usePoints = ({ type, points, current, setModalType, openModal }) => {
  const id = onGetQueryParams()
  const key = `current${type.charAt(0).toUpperCase() + type.slice(1)}`
  const [currentPoints, setCurrentPoints] = useState(current || points)

  const trimNegativeResult = modifier => {
    const result = currentPoints - modifier
    if (result < 0) {
      setCurrentPoints(0)
      localStorage.setItem(`${id}-${key}`, 0)
      return
    }
    setCurrentPoints(result)
    localStorage.setItem(`${id}-${key}`, result)
  }

  const trimMaximunResult = modifier => {
    const result = Number(currentPoints) + modifier
    if (result > points) {
      setCurrentPoints(points)
      localStorage.setItem(`${id}-${key}`, points)
      return
    }
    setCurrentPoints(result)
    localStorage.setItem(`${id}-${key}`, result)
  }

  const removeOnePoint = () => trimNegativeResult(1)
  const removeTenPoints = () => trimNegativeResult(10)
  const addOnePoint = () => trimMaximunResult(1)
  const addTenPoints = () => trimMaximunResult(10)

  const updatePoints = () => {
    setModalType(`${type}points`)
    openModal()
  }

  return {
    title: type === 'health' ? 'Pontos de Vida' : 'Pontos de Mana',
    currentPoints: localStorage.getItem(`${id}-${key}`) || currentPoints,
    removeOnePoint,
    removeTenPoints,
    addOnePoint,
    addTenPoints,
    updatePoints
  }
}
