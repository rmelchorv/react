import React, { useState, useEffect } from 'react';
import Note from './components/notes/Note';
import axios from 'axios';

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNotes(response.data)
    })}
  useEffect(hook, [])

  const notesToShow = showAll ? notes : notes.filter(note => note.important)
  const addNote = (e) => {
    e.preventDefault()
    
    const note = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    axios
      .post('http://localhost:3001/notes', note)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })
  }
  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    axios
      .put(`http://localhost:3001/notes/${id}`, changedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })
  }
  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }
  return(
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(
          note => (
            <Note key={note.id} note={note}
              toggleImportance={() => toggleImportanceOf(note.id)} />
          )
        )}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>   
    </div>
  )
}

export default App