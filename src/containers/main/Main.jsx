import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { ROOT_URL, REGISTER_URL, DASHBOARD_URL } from '../../utils/urls';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import Dashboard from '../../components/dashboard/Dashboard';
const Main = props => {
    const RequiredAuth = ({ children }) => {
        if (Object.keys(props.user).length === 0){
            return <Redirect to={ROOT_URL} />;
        }

        return children;
    };
    return (
        <div className="App">
            <Switch>
                <Route exact path={ROOT_URL} component={Login} />
                <Route exact path={REGISTER_URL} component={Register} />

                <RequiredAuth>
                    <Route exact path={DASHBOARD_URL} component={Dashboard} />
                </RequiredAuth>
            </Switch>
        </div>
    )
};

export default Main;
