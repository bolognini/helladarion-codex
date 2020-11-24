import React from 'react'
import { ShortSeparatorTop, ShortSeparatorBottom } from '@assets'
import { useShowAll } from '@hooks/useShowAll'
import { Editable } from '@components/Editable/Editable'
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
                <Editable as='span' id={`${title}-abilityName-${index}`} text={ability.name} />
                <Editable as='span' id={`${title}-abilityRolling-${index}`} text={ability.rolling} />
              </li>
            )
          })}
        </Ability>
      </Box>
      <ShortSeparatorBottom />
    </Container>
  )
}