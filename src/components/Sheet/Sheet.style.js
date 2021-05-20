import styled from 'styled-components'
import { breakpoint } from 'styles/GlobalStyle'

export const Container = styled.section`
  max-width: 1280px;
  display: flex;
  place-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 24px;
`

export const Content = styled.div`
  display: none;

  ${breakpoint.large} {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: 48px;
  }
`

export const Perks = styled.div``

export const NameWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    cursor: pointer;
  }
`

export const Name = styled.div`
  margin-bottom: 16px;

  h1 {
    font-size: 56px;
    font-family: var(--tormenta);
    color: var(--red);
    max-width: 834px;
    white-space: nowrap;
  }

  h2 {
    word-wrap: break-word;
    max-width: 850px;
  }
`

export const Details = styled.div`
  display: flex;
  grid-column-gap: 8px;
  font-size: 16px;
  margin-bottom: 16px;

  span {
    color: var(--red);
  }
`

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Skills = styled.div`
  width: 100%;
`

export const AbilitiesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 24px;
  margin-top: 36px;
`

export const Stats = styled.div`
  display: flex;
  flex-direction: column;
`
