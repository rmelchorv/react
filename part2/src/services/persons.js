import axios from 'axios';

const baseUrl = `${process.env.REACT_APP_LOCAL_API_BASE_URL}/persons`

const create = newPerson => {
  const request = axios.post(baseUrl, newPerson)
  return request.then(response => response.data)
}
const readAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const update = () => {
  return null
}
const deletePerson = newPerson => {
  return null
}

const personService = { create, deletePerson, readAll, update }

export default personService