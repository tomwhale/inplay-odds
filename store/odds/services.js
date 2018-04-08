import request from '../../utils/request'

export const fetchInPlayEvents = async () => {
  try {
    const { body } = await request({ url: `/public/inplay.json`})
    return body;
  } catch (err) {
    return Promise.reject(err)
  }
}
