import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// npx create-react-app <app-name>.
// npx json-server --port 3001 --watch db.json (for run and use a [fake] 'json-server').

// npm install axios (for intalling as a runtime dependency).
// npm install json-server --save-dev (for install a [fake] 'json-server', as a dev dependency):
//    - for run: npm run server

import axios from 'axios'

axios
  .get('http://localhost:3001/notes')
  .then(response => {
    const notes = response.data
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    root.render(
      <React.StrictMode>
        <App notes={notes} />
      </React.StrictMode>
    );
  })