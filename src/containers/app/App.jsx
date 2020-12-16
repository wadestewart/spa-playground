import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Main from '../main/Main';
import NavBar from '../navbar/NavBar';
import { getJwtToken } from '../../utils/cookieManager';
import './App.css';

const App = () => {
  const [user, setUser] = useState({});
  const [isAuthenticated, setIsaAuthenticated] = useState(false);
  const handleSetUser = loggedInUser => {
    setUser(loggedInUser)
  }
  useEffect(() => {
    const token = getJwtToken();
    if (user && user.tokenString && Object.keys(user.tokenString).length > 0) {
      console.log(user.tokenString)
      if (Object.keys(user.tokenString).length > 0) {
        setIsaAuthenticated(true);
        document.cookie = `token=${user.tokenString.token}`;
      }
    }
    console.log(token);
    if (!token) {
      setIsaAuthenticated(false);
      if (Object.keys(user).length < 0) {
        setUser({});
      }
    }
  }, [user, user.tokenString]);
  return(
    <div>
      <Route
        exact path='/'
        render={
          props =>
            <NavBar
              {...props}
              user={user}
              handleSetUser={handleSetUser}
            />
        }
      />
      <Main
        handleSetUser={handleSetUser}
        isAuthenticated={isAuthenticated} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
