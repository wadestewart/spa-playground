import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Main from '../main/Main';
import NavBar from '../navbar/NavBar';
import { getUser } from '../../utils/apiManager';
import './App.css';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const params = {
      url: 'https://localhost:5001/api/Users',
      id: '5f945f3996324e7ea3ff9a3f',
    };
    getUser(params)
      .then(data => {
        setName(data.firstName);
      })
      .catch(error => console.log(error));
  });

  return(
    <div>
      <Route path='/' component={NavBar} />
      <Main name={name} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
