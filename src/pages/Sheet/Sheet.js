import React from "react"
import { Indicator } from '@components/Indicator/Indicator'
import { useSheet } from './Sheet.hooks'
import { Container } from './Sheet.style'

const Sheet = () => {
  useSheet()

  return (
    <Container>
      <div>
        <h1 id='name' contentEditable>Verme do Gelo</h1>
        <h2 id='description' contentEditable>
          'Algo está devorando os mamutes. Nós seremos os próximos'. - Espírito-de-Pedra, xamã das Montanhas Uivantes
        </h2>
      </div>
      <div>
        <Indicator />
      </div>
    </Container>
  )
}

export default Sheet
