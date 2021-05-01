import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  justify-items: start;
  align-items: center;
  color: var(--red);

  p {
    display: inline;
    font-size: 52px;
  }
`

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 70px;
  background-image: ${({ icon }) => `url(${icon})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  span:first-child {
    padding-top: 8px;
  }
`

export const Description = styled.span`
  font-size: 16px;
`

export const Level = styled.div`
  font-size: 32px;
  justify-self: end;

  p {
    font-size: 48px;
  }
`
