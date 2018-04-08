import request from '../../utils/request'

export const fetchInPlayEvents = async () => {
  try {
    const { events: results } = await request(`https://betsapi.com/docs/samples/inplay.json`)
    return { events }
  } catch (err) {
    return Promise.reject(err)
  }
}
