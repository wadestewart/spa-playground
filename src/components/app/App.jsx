import React, { useState, useEffect } from 'react';
import { getUser } from '../utils/apiManager';
import './App.css';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const params = {
      url: 'https://localhost:5001/api/Users',
      id: '5e8fd3e0157ffa7af4c63c26',
    };
    getUser(params)
    .then(data => {
      setName(data.firstName);
    })
    .catch(error => console.log(error));
  });

  return(
      <div className="App">
          <h1>Welcome {name}!</h1>
      </div>
  );
}

export default App;
