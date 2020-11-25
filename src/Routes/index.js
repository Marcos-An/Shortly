import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Layout from '../Layout'

import Home from '../Pages/home'
import Contact from '../Pages/contact'

export default function routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contato' component={Contact} />
      </Switch>
    </BrowserRouter>
  )
}
