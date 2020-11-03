import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT_URL, REGISTER_URL, DASHBOARD_URL } from '../../utils/urls';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
const Main = props => {
    const handleSetUser = props.handleSetUser;
    return (
        <div className="App">
            <Switch>
                <Route exact path={ROOT_URL} render={props => <Login {...props} handleSetUser={handleSetUser} />} />
                <Route exact path={REGISTER_URL} component={Register} />
            </Switch>
        </div>
    )
};

export default Main;
