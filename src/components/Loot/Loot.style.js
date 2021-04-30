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

  textarea {
    height: 70%;
    width: 100%;
    resize: none;
    padding: 14px 24px;
    background: transparent;
    font-size: 18px;
    font-family: 'Vollkorn SC', serif;
    color: var(--black);
    border: 2px solid var(--black);
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 8px;
`
