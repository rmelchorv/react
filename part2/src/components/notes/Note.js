import React from 'react';
import '../../App.css';

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? '!important' : 'important'
  return (
    <>
      <li>
        <button className="Element-width" onClick={toggleImportance}>{label}</button>
        {` ${note.content}`}
      </li>
    </>
  )
}

export default Note