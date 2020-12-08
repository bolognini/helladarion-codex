import styled from 'styled-components'
import defaultImage from 'assets/default.png'

export const Container = styled.div`
  display: block;
  width: 100%;
  height: 442px;
  margin: 24px 24px 0 0;
  background-repeat: no-repeat;
  background-size: cover;
  border: 6px solid var(--red);
  background-image: ${({ image }) => (image ? `url(${image})` : `url(${defaultImage})`)};
`
