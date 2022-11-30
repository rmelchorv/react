//  1. npm install expres
//  1.1   npm update
//  1.2   npm install
//  2. npm install --save-dev nodemon

const express = require('express')
const app = express()
const PORT = 3001

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4
  }
]

//------- ENDPOINTS
//HOME
app.get('/', (req, res) => {
  res.send('<h1>Persons DB</h1>')
})
//INFO
app.get('/info', (req, res) => {
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p>` +
    `<p>${new Date()}</p>`
  )
})
//GET ALL PERSONS
app.get('/api/persons', (req, res) => {
  res.json(persons)
})
//GET PERSON
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(p => p.id === id)
  
  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})
//GET PERSON
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  
  persons = persons.filter(p => p.id !== id)
  
  res.status(204).end()
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})