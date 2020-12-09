import React from 'react'
import { Header } from './styles'
import { ButtonSignUp } from '../buttons'
import logo from '../../assets/logo.svg'
import Menu from '../menu'

function header() {
  return (
    <Header>
      <div>
        <img src={logo} alt='logo' />
        <Menu />
      </div>
      <ButtonSignUp>Cadastrar</ButtonSignUp>
    </Header>
  )
}

export default header
