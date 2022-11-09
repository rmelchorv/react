import React, { useState } from 'react';
import Note from './components/Note'

const App = ({ notes }) => {
  const [noteList, setNoteList] = useState(notes)
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)
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