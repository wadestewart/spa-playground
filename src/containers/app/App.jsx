import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Main from '../main/Main';
import NavBar from '../navbar/NavBar';
import './App.css';

const App = () => {
  const [user, setUser] = useState({});
  const handleSetUser = loggedInUser => {
    setUser(loggedInUser)
  }
  return(
    <div>
      <Route exact path='/' render={props => <NavBar {...props} user={user} />} />
      <Main handleSetUser={handleSetUser} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
