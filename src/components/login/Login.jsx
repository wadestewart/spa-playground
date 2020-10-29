import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import { postData } from '../../utils/apiManager';
import { useLoginForm } from '../../utils/CustomHooks';

const Login = () => {
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
            console.log(data)
            // set the token on the cookie
            // document.cookie = `token=${data.tokenString.token}`
        );
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
        </React.Fragment>
    );
}

export default Login;
