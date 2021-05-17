import styled from 'styled-components'
import { breakpoint } from 'styles/GlobalStyle'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 16px;
  color: var(--black);

  img {
    width: 20%;
    padding-bottom: 24px;

    ${breakpoint.medium} {
      width: 10%;
    }
  }

  h2 {
    font-size: 32px;
    padding-bottom: 32px;
  }

  p {
    font-size: 16px;
    padding-bottom: 32px;

    &:last-of-type {
      padding-bottom: 0;
    }
  }

  b {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: var(--red);
  }

  ${breakpoint.medium} {
    padding: 0 80px;
  }

  ${breakpoint.large} {
    display: none;
  }
`
