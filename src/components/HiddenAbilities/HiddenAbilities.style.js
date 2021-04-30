import styled from 'styled-components'

export const Container = styled.div`
  width: 600px;
  height: 350px;

  h2 {
    font-size: 24px;
    color: var(--red);
    padding: 16px 0;
    text-align: center;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;
`

export const Abilities = styled.ul`
  overflow: auto;
  max-height: 70%;

  li {
    display: flex;
    justify-content: space-between;
    padding: 7px 16px;
  }

  li:nth-child(odd) {
    background-color: var(--dark-grey);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 8px;
`
