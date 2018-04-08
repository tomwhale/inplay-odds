import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Results from './components/Results'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/results" component={Results} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>)
  }

export default Routes
