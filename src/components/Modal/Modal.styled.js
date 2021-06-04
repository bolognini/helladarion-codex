import styled from 'styled-components'

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  padding: 34px;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  place-content: center;
  place-items: center;
`

export const Container = styled.div`
  border: 2px solid var(--red);
  background: var(--grey);
  padding: 34px;
  z-index: 1;
  position: relative;
`

export const CloseIcon = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
`
