import * as R from 'ramda'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Results from './Results'
import { getInPlayEvents } from '../../store/odds/actions'

@connect(state => ({
  events: state.odds.events || []
}),
dispatch => ({
  getInPlayEvents: () => dispatch(getInPlayEvents())
}))
export default class ResultsContainer extends Component {

  componentDidMount() {
    this.props.getInPlayEvents();
  }

  _generateProps = () => ({
    ...this.props
  })

  render () {
    const props = this._generateProps()
    return (
      <Results {...props} />
    )
  }
}
