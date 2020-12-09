import React from 'react'
import { Container, Input } from './styles'
import background from '../../assets/bg-shorten-desktop.svg'
import { ButtonShorte } from '../buttons'

function shortCntainer() {
  return (
    <Container background={background}>
      <Input placeholder='Cola seu link aqui!' />
      <ButtonShorte>Encurte!</ButtonShorte>
    </Container>
  )
}

export default shortCntainer
