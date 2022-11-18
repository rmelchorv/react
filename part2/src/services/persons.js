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
const update = (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson)
  return request.then(response => response.data)
}
const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

const personService = { create, deletePerson, readAll, update }

export default personService