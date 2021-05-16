import React from 'react'
import logo from 'assets/icon.png'
import { Container } from './ResponsiveFallback.style'

export const ResponsiveFallback = () => (
  <Container>
    <img src={logo} alt='Tormenta20 Logo' />
    <h2>eita! :(</h2>
    <p>
      Tanto a ficha virtual, Helladarion Codex, quanto o formulário,&nbsp;
      <a href='https://helladarion-form.netlify.app/'>Helladarion Form</a>,
      foram desenvolvidos para funcionarem apenas em telas maiores.
    </p>
    <p>
      <b>Talvez</b> no futuro seja adicionado responsividade nas duas
      aplicações. Por enquanto é recomendado usar um dispositivo com tela maior
      do que a de um celular.
    </p>
    <p>
      Qualquer dúvida ou sugestão em relação a isso ou outro assunto relacionado
      a essa aplicação, pode mandar uma issue&nbsp;
      <a href='https://github.com/bolognini/helladarion-codex/issues/new'>
        aqui
      </a>
      . Obrigado!
    </p>
  </Container>
)
