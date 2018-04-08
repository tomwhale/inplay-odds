import request from 'superagent'
import * as R from 'ramda'
import React, { Component } from 'react'
import Home from './Home'

export default class HomeContainer extends Component {

  _generateProps = () => ({
    ...this.props
  })

  render () {
    const props = this._generateProps()
    return (
      <Home {...props} />
    )
  }
}
