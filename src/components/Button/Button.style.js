import styled from 'styled-components'

export const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  font-weight: 700;
  color: ${({ secondary }) => (secondary ? 'var(--black)' : 'var(--grey)')};
  border: 2px solid var(--red);
  background-color: ${({ secondary }) => (secondary ? 'transparent' : 'var(--red)')};
  cursor: pointer;
`
