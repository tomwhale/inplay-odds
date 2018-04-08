import * as actionTypes from './actionTypes'
import * as reducers from './reducers'

const initialState = { }

export default (state = initialState, action) => {
  const { type } = action

  switch (type) {
    case actionTypes.GET_EVENTS:
      return reducers.getInPlayEvents({state, action})
    default:
      return state
  }
}
