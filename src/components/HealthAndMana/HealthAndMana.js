import React from 'react'
import { usePoints } from './HealthAndMana.hooks'
import {
  Container,
  PointsWrapper,
  Description,
  Points,
  PointsBar,
  Controllers
} from './HealthAndMana.style'

export const HealthAndMana = ({ type, points, current, setModalType, openModal }) => {
  const {
    title,
    currentPoints,
    removeOnePoint,
    removeTenPoints,
    addOnePoint,
    addTenPoints,
    updatePoints
  } = usePoints({ type, points, current, setModalType, openModal })

  return (
    <Container secondary={type === 'mana'}>
      <PointsWrapper>
        <Description>{title}</Description>
        <Points>
          <span>{currentPoints}</span>
          <span>{` / ${points}`}</span>
        </Points>
      </PointsWrapper>
      <PointsBar
        secondary={type === 'mana'}
        value={currentPoints}
        max={points}
      />
      <Controllers>
        <button type='button' onClick={removeTenPoints}>-10</button>
        <button type='button' onClick={removeOnePoint}>-1</button>
        <button type='button' onClick={updatePoints}>set</button>
        <button type='button' onClick={addOnePoint}>+1</button>
        <button type='button' onClick={addTenPoints}>+10</button>
      </Controllers>
    </Container>
  )
}
