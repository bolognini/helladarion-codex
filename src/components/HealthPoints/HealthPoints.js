import React from 'react'
import { useHealthPoints } from './HealthPoints.hooks'
import {
  Container,
  PointsWrapper,
  Description,
  Points,
  HealthBar,
  HealthControllers
} from './HealthPoints.style'

export const HealthPoints = ({ healthpoints, currentHp, setModalType, openModal }) => {
  const {
    currentHealth,
    removeOnePoint,
    removeTenPoints,
    addOnePoint,
    addTenPoints,
    updateHealthPoints
  } = useHealthPoints({ healthpoints, currentHp, setModalType, openModal })

  return (
    <Container>
      <PointsWrapper>
        <Description>Pontos de Vida</Description>
        <Points>
          <span>{currentHealth}</span>
          <span>{` / ${healthpoints}`}</span>
        </Points>
      </PointsWrapper>
      <HealthBar value={currentHealth} max={healthpoints} />
      <HealthControllers>
        <button type='button' onClick={removeTenPoints}>-10</button>
        <button type='button' onClick={removeOnePoint}>-1</button>
        <button type='button' onClick={updateHealthPoints}>set</button>
        <button type='button' onClick={addOnePoint}>+1</button>
        <button type='button' onClick={addTenPoints}>+10</button>
      </HealthControllers>
    </Container>
  )
}
