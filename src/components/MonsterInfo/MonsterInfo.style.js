import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  justify-items: start;
  align-items: center;
  color: var(--red);
`

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 90px;
  background-image: ${({ icon }) => `url(${icon})`};
  background-repeat: no-repeat;

  span:first-child {
    padding-top: 8px;
  }
`

export const Value = styled.span`
  font-size: 64px;
`

export const Description = styled.span`
  font-size: 16px;
`

export const Level = styled.div`
  font-size: 64px;
  justify-self: end;

  span:first-child {
    font-size: 48px;
  }
`
