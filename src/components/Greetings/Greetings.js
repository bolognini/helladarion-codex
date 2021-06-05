import React from 'react'
import { Button } from '../Button/Button'
import { useSaveModal } from './Greetings.hooks'
import { Container, ButtonWrapper, Footer } from './Greetings.style'

export const Greetings = ({ closeModal }) => {
  const { closeGreetingsModal } = useSaveModal({ closeModal })
  return (
    <Container>
      <h2>Oi 👋</h2>
      <p>
        <span>Helladarion</span> é um projeto open-source que desenvolvi para
        estudar algumas tecnologias e para auxiliar minhas campanhas de T20.
      </p>
      <hr />
      <p>
        Há muitas coisas para adicionar, melhorar e consertar. Caso tenha uma
        sugestão, pode me mandar uma DM lá no&nbsp;
        <a
          href='https://twitter.com/bolognini'
          rel='noreferrer'
          target='_blank'
        >
          @bolognini
        </a>
        , abrir uma&nbsp;
        <a
          href='https://github.com/bolognini/helladarion-codex/issues/new'
          rel='noreferrer'
          target='_blank'
        >
          issue
        </a>
        &nbsp;no repositório do projeto ou ainda enviar uma&nbsp;
        <a
          href='https://github.com/bolognini/helladarion-codex/issues/new'
          rel='noreferrer'
          target='_blank'
        >
          Pull Request
        </a>
        &nbsp;caso você queira contribuir com o código
      </p>
      <hr />
      <p>
        Se você gostou do projeto, considere dar uma estrelinha nos repositórios do
        GitHub
      </p>
      <Footer>
        <ul>
          <li>
            ⭐️&nbsp;
            <a
              href='https://github.com/bolognini/helladarion-codex'
              rel='noreferrer'
              target='_blank'
            >
              Helladarion Codex
            </a>
          </li>
          <li>
            ⭐️&nbsp;
            <a
              href='https://github.com/bolognini/helladarion-form'
              rel='noreferrer'
              target='_blank'
            >
              Helladarion Form
            </a>
          </li>
          <li>
            ⭐️&nbsp;
            <a
              href='https://github.com/bolognini/helladarion'
              rel='noreferrer'
              target='_blank'
            >
              Helladarion
            </a>
          </li>
        </ul>
        <span>obrigado 😄</span>
      </Footer>
      <ButtonWrapper>
        <Button secondary text='Fechar' onClick={closeGreetingsModal} />
      </ButtonWrapper>
    </Container>
  )
}
