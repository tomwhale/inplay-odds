import * as actionTypes from './actionTypes'
import { fetchInPlayEvents } from

export const getInPlayEvents = () => async dispatch => () => {
  const events = await fetchInPlayEvents();
  return dispatch(events);
}
