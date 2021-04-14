import styled from 'styled-components'

export const Container = styled.div`
  color: var(--red);
`

export const PointsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const Description = styled.span`
  font-size: 24px;
`

export const Points = styled.div`
  span:nth-child(odd) {
    font-size: 32px;
  }

  span:nth-child(even) {
    font-size: 48px;
    color: var(--dark-grey);
  }
`

export const HealthBar = styled.progress`
  margin-bottom: 8px;

  &[value] {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    width: 100%;
    height: 18px;
  }

  &[value]::-webkit-progress-bar {
    background-color: var(--dark-grey);
  }

  &[value]::-webkit-progress-value {
    background-color: var(--red);
  }
`

export const HealthControllers = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 16px;

  button {
    justify-self: center;
    width: 56px;
    height: 38px;
    border: 2px solid var(--red);
    background: var(--red);
    color: var(--yellow);
    font-size: 18px;
    font-family: "Vollkorn SC", serif;
    cursor: pointer;
    transition: 0.1s ease-in;

    &:hover {
      border: 2px solid var(--yellow);
      transition: 0.1s ease-in;
    }
  }

  button:first-child {
    justify-self: start;
  }

  button:last-child {
    justify-self: end;
  }
`
