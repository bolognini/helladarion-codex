import styled from 'styled-components'

export const Container = styled.div`
  h2 {
    font-size: 18px;
    color: var(--red);
  }
`

export const Box = styled.div`
  display: grid;
  grid-template-rows: 40px 1fr;
  padding-bottom: 16px;
`

export const Type = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const AllAbilities = styled.span`
  font-size: 14px;
  
  em {
    color: var(--red);
  }
`

export const Ability = styled.ul`
  li {
    display: flex;
    justify-content: space-between;
    padding: 7px 16px;
  }

  li:nth-child(odd) {
    background-color: var(--dark-grey);
  }
`