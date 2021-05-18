import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ secondary }) => (secondary ? 'var(--black)' : 'var(--red)')};
  margin: 8px 0;

  button {
    border: none;
    background: ${({ secondary }) => (secondary ? 'var(--black)' : 'var(--red)')};
    color: ${({ secondary }) => (secondary ? 'var(--grey)' : 'var(--yellow)')};

    &:hover {
      color: ${({ secondary }) => (secondary ? 'var(--yellow)' : 'var(--grey)')};
      transition: 0.1s ease-in;
    }
  }
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
    font-size: 24px;
  }

  span:nth-child(even) {
    font-size: 32px;
    color: var(--dark-grey);
  }
`

export const PointsBar = styled.progress`
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
    background-color: ${({ secondary }) => (secondary ? 'var(--black)' : 'var(--red)')};
  }
`

export const Controllers = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 16px;

  button {
    justify-self: center;
    width: 56px;
    height: 38px;
    font-size: 18px;
    font-family: "Vollkorn SC", serif;
    cursor: pointer;
    transition: 0.1s ease-in;
  }

  button:first-child {
    justify-self: start;
  }

  button:last-child {
    justify-self: end;
  }
`
