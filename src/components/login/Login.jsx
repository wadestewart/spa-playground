import React, { useState, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getUser } from '../../utils/apiManager';

import { ROOT_URL, DASHBOARD_URL } from '../../utils/urls';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import { postData } from '../../utils/apiManager';
import { useLoginForm } from '../../utils/CustomHooks';
import Dashboard from '../dashboard/Dashboard';

const Login = props => {
    const handleSetUser = props.handleSetUser;
    const [user, setUser] = useState({});
    const [name, setName] = useState('');

    useEffect(() => {
        handleSetUser(user);
    });

    const login = () => {
        const params = {
            url: 'https://localhost:5001/api/Users/authenticate',
            data: {
                email,
                password,
            },
        };
        
        postData(params)
        .then(data =>
            // console.log(data)
            // set the user state
            setUser(data)
            // set the token on the cookie
            // document.cookie = `token=${data.tokenString.token}`
        ).catch(err => {
            console.log(err);
        });
        // event.preventDefault();
    };
    const useStyles = makeStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: '0 auto'
        },
        loginBtn: {
            marginTop: '0 auto',
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            marginTop: 'auto 0'
        }
    });

    // const RequiredAuth = ({ children }) => {
    //     console.log(user);
    //     console.log({ children });
    //     if (Object.keys(user).length === 0 && user.constructor === Object){
    //         return <Redirect to={ROOT_URL} />;
    //     }

    //     return children;
    // };

    // useEffect(() => {
    //     const params = {
    //       url: 'https://localhost:5001/api/Users',
    //       id: '5f945f3996324e7ea3ff9a3f',
    //     };
    //     getUser(params)
    //       .then(data => {
    //         setName(data.firstName);
    //       })
    //       .catch(error => console.log(error));
    // });
    const { handleInputChange, handleSubmit, inputs } = useLoginForm(login);
    const classes = useStyles();
    // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);
    const { email, password } = inputs;

    return (
        <React.Fragment>
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title="Login App" />
                    <CardContent>
                        <div>
                            <TextField
                                error={error}
                                fullWidth
                                id="email"
                                label="Email"
                                margin="normal"
                                name="email"
                                onChange={handleInputChange}
                                placeholder="Email"
                                type="email"
                            />
                            <TextField
                                error={error}
                                fullWidth
                                helperText={helperText}
                                id="password"
                                label="Password"
                                margin="normal"
                                name="password"
                                onChange={handleInputChange}
                                placeholder="Password"
                                type="password"
                            />
                        </div>
                    </CardContent>
                    <CardActions>
                        <Button
                        id="button"
                        variant="contained"
                        size="large"
                        color="secondary"
                        className={classes.loginBtn}
                        onClick={handleSubmit}>
                        {/* //   disabled={isButtonDisabled}> */}
                        Login
                        </Button>
                    </CardActions>
                </Card>
            </form>
            {/* <RequiredAuth>
                    <Route path={DASHBOARD_URL}>
                        <Dashboard user={user} />
                    </Route >
            </RequiredAuth> */}
        </React.Fragment>
    );
}

export default Login;
