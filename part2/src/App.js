import React, { useState, useEffect } from 'react';
import Footer from './components/notes/Footer';
import Note from './components/notes/Note';
import Notification from './components/notes/Notification';
import noteService from './services/notes';
import "./App.css";
import "./index.css";

const App = () => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const notesToShow = showAll ? notes : notes.filter(note => note.important)

  const hook = () => {
    noteService
      .readAll()
      .then(initialNotes => {
        setNotes(initialNotes)
    })}
  useEffect(hook, [])

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = { ...note, important: !note.important }

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(note => note.id !== id ? note : returnedNote))
      })
      .catch(error => {
        setErrorMessage(`Note '${note.content}' was already removed from server`)
        setTimeout(() => {
          setErrorMessage(null)}, 2500
        )
        setNotes(notes.filter(n => n.id !== id))
      })
  }
  const addNote = (e) => {
    e.preventDefault()
    
    const note = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    noteService
      .create(note)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewNote('')
      })
  }
  const handleNoteChange = (e) => {
    setNewNote(e.target.value)
  }
  return(
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage} />
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
      <Footer />
    </div>
  )
}

export default App