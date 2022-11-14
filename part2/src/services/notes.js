import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_LOCAL_API_BASE_URL}/notes`

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}
const readAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id: 10000,
    content: 'This note is not saved to server',
    date: '2019-05-30T17:30:31.098Z',
    important: true,
  }
  return request.then(response => response.data.concat(nonExisting))
  //return request.then(response => response.data)
}
const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const noteService = { create, readAll, update }

export default noteService