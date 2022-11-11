import React from 'react';

const Seeker = ({ filter, handleFilterChange }) => {
  return (
    <div>
      find countries: <input value={filter} onChange={handleFilterChange} />
    </div>
  )
}

export default Seeker