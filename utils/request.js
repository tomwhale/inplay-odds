import superagent from "superagent"

export default ( { url } = {} ) => {
  return superagent.get(url)
}
