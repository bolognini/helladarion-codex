import React from 'react'
import { ShortSeparatorTop, ShortSeparatorBottom } from 'assets'
import { useShowAll } from 'hooks/useShowAll'
import { Editable } from 'components/Editable/Editable'
import { Container, Box, Type, Ability, AllAbilities } from './Abilities.style'

export const Abilities = ({
  title,
  modalType,
  abilitiesList,
  setModalType,
  openModal
}) => {
  const { hiddenItems } = useShowAll({ list: abilitiesList, maxLength: 3 })
  return (
    <Container>
      <ShortSeparatorTop />
      <Box>
        <Type>
          <h2>{title}</h2>
          <AllAbilities>
            {`${hiddenItems} ocultos | `}
            <em
              role='link'
              tabIndex={0}
              onClick={() => {
                setModalType(modalType)
                openModal()
              }}
            >
              ver todos
            </em>
          </AllAbilities>
        </Type>
        <Ability>
          {abilitiesList && abilitiesList.map((ability, index) => {
            if (index > 2) return
            return (
              <li key={index}>
                <Editable
                  as='span'
                  id={`${title}-abilityName-${index}`}
                  text={ability.name}
                  maxLength={18}
                />
                <Editable
                  as='span'
                  id={`${title}-abilityRolling-${index}`}
                  text={ability.rolling}
                  maxLength={16}
                />
              </li>
            )
          })}
        </Ability>
      </Box>
      <ShortSeparatorBottom />
    </Container>
  )
}
