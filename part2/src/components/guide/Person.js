import React from 'react';

const Person = ({ person, deletePerson }) => {
  return (
    <>
      <li>
        <button onClick={deletePerson} value={person.id}>delete</button>
        <span> {person.name} | {person.number}</span>
      </li>
    </>
  )
}

export default Person