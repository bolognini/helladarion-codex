import styled from 'styled-components'

export const AttributeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 108px);
  grid-column-gap: 16px;
`

export const AdditionalButtons = styled.li`
  display: grid;
  grid-template-rows: 1fr 1fr;
  place-items: center;
`

export const IconButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  background: var(--black);
  transition: all 0.2s ease;
  border: none;

  &:first-of-type {
    border-bottom: 3px solid var(--grey);
    position: relative;

    svg {
      margin-right: 6px;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: -6px;
      left: 4px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid var(--black);
    }
  }

  &:last-of-type {
    border-top: 3px solid var(--grey);
    position: relative;

    &::after {
      content: '';
      display: block;
      position: absolute;
      bottom: -6px;
      right: 4px;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-bottom: 6px solid var(--black);
      transform: rotate(180deg);
    }
  }

  svg {
    width: 36px;
    height: 36px;
    fill: var(--grey);
  }

  &:hover {
    transition: all 0.2s ease;

    svg {
      fill: var(--yellow);
    }
  }
`

export const Attribute = styled.li`
  display: grid;
  grid-template-columns: 18px 1fr;
  border: 2px solid var(--red);
  width: 107px;
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
  grid-template-rows: 2fr 1fr;
  width: 100%;
  align-items: center;
  text-align: center;

  span {
    color: var(--red);
  }

  span:nth-child(1) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    font-size: 52px;
    border-bottom: 2px solid var(--red);
  }

  span:nth-child(2) {
    font-size: 28px;
  }
`
