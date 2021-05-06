import styled from 'styled-components'

export const Container = styled.label`
  display: block;
  width: 100%;
  height: 61.3%;
  margin: 24px 24px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 6px solid var(--red);
  background-image: ${({ image }) => `url(${image})`};
  cursor: pointer;

  input {
    display: none;
  }
`
