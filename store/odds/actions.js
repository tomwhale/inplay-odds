import * as actionTypes from './actionTypes'
import { fetchInPlayEvents } from "./services"

export const getInPlay = ({ results }) => {
  return ({
  type: actionTypes.GET_EVENTS,
  payload: results
})}

export const getInPlayEvents = () => async (dispatch) => {
  const { results } = await fetchInPlayEvents();
  return dispatch(getInPlay({results}));
}
