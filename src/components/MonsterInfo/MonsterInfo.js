import React from 'react'
import ShieldIcon from 'assets/shield.svg'
import BootIcon from 'assets/boot.svg'
import { Editable } from 'components/Editable/Editable'
import { Container, Icon, Description, Level } from './MonsterInfo.style'

export const MonsterInfo = ({ defense, distance, challengeLevel }) => (
  <Container>
    <Icon icon={ShieldIcon}>
      <Editable
        as='p'
        id='defense'
        text={defense}
        maxLength={3}
      />
      <Description>Defesa</Description>
    </Icon>
    <Icon icon={BootIcon}>
      <Editable
        as='p'
        id='distance'
        text={distance}
        maxLength={3}
      />
      <Description>Deslocamento</Description>
    </Icon>
    <Level>
      <span>ND </span>
      <Editable
        as='p'
        id='challengeLevel'
        text={challengeLevel}
        maxLength={3}
      />
    </Level>
  </Container>
)
