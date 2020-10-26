import styled from 'styled-components'

export const Container = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-column-gap: 24px;
  background-color: var(--grey);
  height: 100vh;
  padding: 24px;
`

export const Perks = styled.div``

export const Name = styled.div`
  margin-bottom: 36px;
  h1 {
    font-size: 68px;
    font-family: var(--tormenta);
    color: var(--red);
  }
`

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Skills = styled.div`

`

export const AbilitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  margin-top: 36px;
  max-width: 660px;
`

export const Misc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${({ lootIcon }) => lootIcon && `
    span {
      margin-right: 6px;
    }
  `}

  svg {
    width: 100px;
  }
`

export const Stats = styled.div`

`