const express = require("express");
const app = express();
const PORT = 3001;

let notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098Z",
    important: true,
  },
  {
    id: 2,
    content: "Browser can execute only Javascript",
    date: "2019-05-30T18:39:34.091Z",
    important: false,
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:14.298Z",
    important: true,
  },
];

//JSON parser
app.use(express.json())

//HOME
app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});
//GET ALL NOTES
app.get("/api/notes", (req, res) => {
  res.json(notes);
});
//GET ONE NOTE
app.get("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id); // ó parseInt(req.params.id)
  const note = notes.find((note) => note.id === id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});
//DELETE NOTE
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)

  notes = notes.filter(note => note.id !== id)

  res.status(204).end()
})
//ADD NOTE
app.post('/api/notes', (req, res) => {
  const body = req.body
  
  //console.log(note)
  //console.log(req.get('Content-Type'))
  //console.log(req.headers)

  if (!body.content) {
    return response.status(400).json({ 
      error: 'content missing' 
    })
  }

  const note = {
    id: generateId(),
    content: body.content,
    date: new Date(),
    important: body.important || false,
  }

  notes = notes.concat(note)

  res.json(note)
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


//FUNCTIONS
const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}