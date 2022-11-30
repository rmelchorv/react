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

//JSON parser
app.use(express.json())

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
//DELETE PERSON
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  
  persons = persons.filter(p => p.id !== id)
  
  res.status(204).end()
})
//ADD PERSON
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name || !body.number) {
    return res.status(400).json({
      error: 'name or number missing'
    })
  } else if (persons.some(p => p.name === body.name)) {
    return res.status(400).json({
      error: 'name must be unique'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: generateId()
  }

  persons = persons.concat(person)

  res.json(person)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

//------- FUNCTIONS
const generateId = () => {
  const maxId = persons.length > 0
    ? Math.max(...persons.map(p => p.id))
    : 0
  return maxId + 1
}