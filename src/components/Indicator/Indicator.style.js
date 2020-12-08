import styled, { keyframes } from 'styled-components'

const bounce = keyframes`
  0% {
    transform: translateY(0);
    -webkit-transform: translateY(0);
  }

  25% {
    transform: translateY(4px);
    -webkit-transform: translateY(4px);
  }

  50% {
    transform: translateY(8px);
    -webkit-transform: translateY(8px);
  }

  75% {
    transform: translateY(4px);
    -webkit-transform: translateY(4px);
  }

  100% {
    transform: translateY(0%);
    -webkit-transform: translateY(0%);
  }
`

const scaleInsideRing = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.2);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.2);
  }
`

const scaleOutsideRing = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.4);
  }

  50% {
    opacity: 1;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(1.4);
  }
`

export const Container = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  margin-top: 200px;
  position: relative;

  svg {
    position: absolute;
  }
`

export const TopIcons = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  top: -23px;
  left: 10px;
  width: 50px;
  height: 50px;
  animation: ${bounce} 1.5s ease-in-out infinite;

  svg:nth-child(2) {
    bottom: 0;
    left: 9px;
  }
`

export const BottomIcons = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 50px;
  height: 50px;

  svg:nth-child(1) {
    animation: ${scaleInsideRing} 1.2s ease-in-out infinite forwards;
    bottom: 4px;
    left: 8px;
  }

  svg:nth-child(2) {
    animation: ${scaleOutsideRing} 1.2s ease-in-out infinite forwards;
    bottom: 0;
  }
`
