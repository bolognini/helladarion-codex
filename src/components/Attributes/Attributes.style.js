import styled from 'styled-components'

export const AttributeList = styled.ul`
  display: flex;
  grid-column-gap: 16px;
`

export const Attribute = styled.li`
  display: grid;
  grid-template-columns: 18px 1fr;
  border: 2px solid var(--red);
  width: 97px;
  height: 115px;
  justify-items: center;
`

export const AttName = styled.span`
  font-size: 18px;
  font-family: 'Vollkorn SC', serif;
  font-weight: 600;
  text-align: end;
  color: var(--yellow);
  background-color: var(--red);
  writing-mode: vertical-lr;
  transform: rotate(180deg);
  padding-bottom: 8px;
  cursor: default;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -3px;
    left: 4px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--grey);
    transform: rotate(180deg);
  }

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -8px;
    left: 4px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid var(--red);
    transform: rotate(180deg);
  }
`

export const Values = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  text-align: center;

  span {
    color: var(--red);
  }

  span:nth-child(1) {
    font-size: 64px;
    border-bottom: 2px solid var(--red);
  }

  span:nth-child(2) {
    font-size: 36px;
  }
`