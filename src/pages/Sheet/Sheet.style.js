import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--red);
  background-color: var(--grey);
  height: 100vh;

  h1 {
    font-size: 68px;
  }

  small {
    padding-top: 48px;
    font-family: 'Volkhov', serif;
  }
`