import React from 'react';

const PersonForm = ({ addPerson, newName, newNumber, handlePersonNameChange, handlePersonNumberChange }) => {
  return(
    <>
      <form onSubmit={addPerson}>
        <div>
          <span className="Element-width">name:</span>
          <input value={newName} onChange={handlePersonNameChange} />
        </div>
        <div>
          <span className="Element-width">number:</span>
          <input value={newNumber} onChange={handlePersonNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm