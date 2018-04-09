import React, { Fragment } from 'react'
import Match from '../../shared-components/Match'
import OddsFetcher from '../../shared-components/OddsFetcher'

export default ({ match, events }) => (
  <Fragment>
    {events.map(match =>
      <OddsFetcher match={match} render={(odds) => {
        return <Match odds={odds} match={match} />
      }} />)}
  </Fragment>
)
