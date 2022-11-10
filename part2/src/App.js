import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './components/notes/Note';

const App = () => {
  const [noteList, setNoteList] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  const hook = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        setNoteList(response.data)
    })}
  useEffect(hook, [])

  const notesToShow = showAll ? noteList : noteList.filter(note => note.important) // === true)
  const addNote = (e) => {
    e.preventDefault()
    
    const note = {
      id: noteList.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNoteList(noteList.concat(note))
    setNewNote('')
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
            <Note key={note.id} note={note} />
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