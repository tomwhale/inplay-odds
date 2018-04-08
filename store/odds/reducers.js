export const getInPlayEvents = ({ state, action: { payload = [] } } ) => ({
  ...state,
  events: payload
})
