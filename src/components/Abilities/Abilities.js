import React from 'react'
import { ShortSeparatorTop, ShortSeparatorBottom } from '@assets'
import { useShowAll } from '@hooks/useShowAll'
import { Container, Box, Type, Ability, AllAbilities } from './Abilities.style'

export const Abilities = ({ title, abilitiesList }) => {
  const { hiddenItems } = useShowAll({ list: abilitiesList, maxLength: 3 })
  return (
    <Container>
      <ShortSeparatorTop />
      <Box>
        <Type>
          <h2>{title}</h2>
          <AllAbilities>{`${hiddenItems} ocultos | `}<em>ver todos</em></AllAbilities>
        </Type>
        <Ability>
          {abilitiesList.map((ability, index) => {
            if (index > 2) return
            return (
              <li>
                <span id={`${title}-abilityName-${index}`} contentEditable>{ability.name}</span>
                <span id={`${title}-abilityRolling-${index}`} contentEditable>{ability.rolling}</span>
              </li>
            )
          })}
        </Ability>
      </Box>
      <ShortSeparatorBottom />
    </Container>
  )
}