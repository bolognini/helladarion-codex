import React from 'react'
import ShieldIcon from 'assets/shield.svg'
import BootIcon from 'assets/boot.svg'
import { Container, Icon, Value, Description, Level } from './MonsterInfo.style'

export const MonsterInfo = ({ defense, distance, level }) => (
  <Container>
    <Icon icon={ShieldIcon}>
      <Value>{defense}</Value>
      <Description>Defesa</Description>
    </Icon>
    <Icon icon={BootIcon}>
      <Value>{distance}</Value>
      <Description>Deslocamento</Description>
    </Icon>
    <Level>
      <span>ND </span>
      <span>{level}</span>
    </Level>
  </Container>
)
