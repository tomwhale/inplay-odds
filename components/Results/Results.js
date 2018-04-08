import React, { Fragment } from 'react'
import OddsFetcher from '../../shared-components/OddsFetcher'

export default ({ events }) => (
  <Fragment>
    {events.map(i => <OddsFetcher render={(odds) => {
      return <p>{JSON.stringify(odds)}</p>
    }} />)}
  </Fragment>
)
