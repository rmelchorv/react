import React from 'react';

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? '!important' : 'important'
  return (
    <>
      <li className='note'>
        <button className="Element-width" onClick={toggleImportance}>{label}</button>
        {` ${note.content}`}
      </li>
    </>
  )
}

export default Note