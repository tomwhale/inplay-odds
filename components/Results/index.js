import * as R from 'ramda'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Results from './Results'
import getInPlayEvents from '../../store/odds/actions'

@connect(state => ({
  state: state
}))
export default class ResultsContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      comments: []
    };
  }

  componentDidMount() {
    getInPlayEvents();
  }

  _generateProps = () => ({
    ...this.props
  })

  render () {
    const props = this._generateProps()
    console.log(props)
    return (
      <Results {...props} />
    )
  }
}
