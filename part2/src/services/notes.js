import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_LOCAL_API_BASE_URL}/notes`

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}
const readAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const noteService = {
  create: create,
  readAll: readAll,
  update: update
}

export default noteService