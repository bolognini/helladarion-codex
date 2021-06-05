import styled from 'styled-components'

export const Container = styled.div`
  width: 650px;

  h2 {
    font-size: 24px;
    color: var(--red);
    padding: 16px 0;
    text-align: center;
  }

  hr {
    border-top: 1px dashed var(--red);
    margin: 16px;
  }

  p {
    text-align: center;
    font-family: 'Vollkorn', serif;

    span {
      font-family: 'Vollkorn SC', serif;
      font-weight: bold;
    }

    a {
      font-family: 'Vollkorn SC', serif;
      font-weight: bold;
    }
  }

  ul {
    margin-top: 16px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 16px;
`

export const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  > span {
    justify-self: end;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`
