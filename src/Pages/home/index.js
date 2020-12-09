import React from 'react'
import {
  Container,
  FirstSection,
  Title,
  SubTitle,
  SecondSection
} from './styles'
import Header from '../../components/header '
import background from '../../assets/illustration-working.svg'
import { ButtonShorter } from '../../components/buttons'
import Shorter from '../../components/shortContainer'

export default function Home() {
  return (
    <Container>
      <Header />
      <FirstSection>
        <div className='TitleContainer'>
          <Title>Mais que um encurtador de links</Title>
          <SubTitle>
            Um encurtador de links bonito e de graça. Use com sabedoria e
            aproveite!
          </SubTitle>
          <ButtonShorter>Encurtar</ButtonShorter>
        </div>
        <img src={background} alt='logo' />
        <Shorter />
      </FirstSection>
      <SecondSection></SecondSection>
    </Container>
  )
}
