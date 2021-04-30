import React from 'react'
import { ShortSeparatorTop, ShortSeparatorBottom } from 'assets'
import { useShowAll } from 'hooks/useShowAll'
import { Container, Box, Type, Ability, AllAbilities } from './Abilities.style'

export const Abilities = ({
  title,
  modalType,
  abilitiesList,
  setModalType,
  openModal
}) => {
  const { hiddenItems } = useShowAll({ list: abilitiesList, maxLength: 3 })
  const textTypes = {
    title: title === 'Sentidos' ? `${hiddenItems} ocultos | ` : `${hiddenItems} ocultas | `,
    cta: title === 'Sentidos' ? 'editar / ver todos' : 'editar / ver todas'
  }

  return (
    <Container>
      <ShortSeparatorTop />
      <Box>
        <Type>
          <h2>{title}</h2>
          <AllAbilities>
            {textTypes.title}
            <em
              role='link'
              tabIndex={0}
              onClick={() => {
                setModalType(modalType)
                openModal()
              }}
            >
              {textTypes.cta}
            </em>
          </AllAbilities>
        </Type>
        <Ability>
          {abilitiesList && abilitiesList.map((ability, index) => {
            if (index > 2) return
            return (
              <li key={index}>
                <span id={`${title}-abilityRolling-${index}`}>{ability.name}</span>
                <span id={`${title}-abilityRolling-${index}`}>{ability.rolling}</span>
              </li>
            )
          })}
        </Ability>
      </Box>
      <ShortSeparatorBottom />
    </Container>
  )
}
