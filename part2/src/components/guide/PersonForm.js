import React from 'react';

const PersonForm = ({ addPerson, newName, newNumber, handlePersonNameChange, handlePersonNumberChange }) => {
  return(
    <>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handlePersonNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  )
}

export default PersonForm