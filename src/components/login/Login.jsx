import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import { postData } from '../../utils/apiManager';
import useSignUp from '../../utils/CustomHooks';

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
        .then(data => console.log(data));
        // event.preventDefault();
    }
}

export default Login;
