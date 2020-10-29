import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';

import { useSignUp } from '../../utils/CustomHooks';
import { postData } from '../../utils/apiManager';

const Register = () => {
    const signUp = () => {
        const params = {
            url: 'https://localhost:5001/api/Users',
            data: {
                firstName,
                lastName,
                email,
                password,
            },
        };
        
        postData(params)
        .then(data => console.log(data));
        // event.preventDefault();
    }
    const useStyles = makeStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: '0 auto'
        },
        loginBtn: {
            // marginTop: '0 auto',
            flexGrow: 1
        },
        header: {
            textAlign: 'center',
            background: '#212121',
            color: '#fff'
        },
        card: {
            // marginTop: 'auto 0'
        }
    });
    const { handleInputChange, handleSubmit, inputs } = useSignUp(signUp);
    const classes = useStyles();
    // const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    const [helperText, setHelperText] = useState('');
    const [error, setError] = useState(false);
    const { firstName, lastName, email, password } = inputs;

    // useEffect(() => {
    //     if (inputs.email.trim() && inputs.password.trim()) {
    //       setIsButtonDisabled(false);
    //     } else {
    //       setIsButtonDisabled(true);
    //     }
    // }, [inputs.email, inputs.password]);

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
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    margin="normal"
                    onChange={handleInputChange}
                    placeholder="First Name"
                    type="text"
                />
                <TextField
                    error={error}
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    margin="normal"
                    name="lastName"
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    type="text"
                />
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
                {/* <label htmlFor="firstName">
                    First Name
                    <input type="text" id="firstName" name="firstName" onChange={handleInputChange} value={inputs.fistName} required />
                </label>
                <label htmlFor="lastName">
                    Last Name
                    <input type="text" id="lastName" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
                </label>
                <label htmlFor="email">
                    Email
                    <input type="text" id="email" name="email" onChange={handleInputChange} value={inputs.email} required />
                </label>
                <label htmlFor="password">
                    Password
                    <input type="password" id="password" name="password" onChange={handleInputChange} value={inputs.passWord} required />
                </label>
                <input type="submit" value="Submit" onClick={handleSubmit} /> */}
            </form>
        </React.Fragment>
    );
}

// class Login extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: '',
//             lastName: '',
//             email: '',
//             password: '',
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ [event.target.name]: event.target.value})
//     }

//     handleSubmit(event) {
        // const { firstName, lastName, email, password } = this.state;
        // const params = {
        //     url: 'https://localhost:5001/api/Users',
        //     data: {
        //         firstName,
        //         lastName,
        //         email,
        //         password,
        //     },
        // };
        
        // postData(params)
        // .then(data => console.log(data));
        // event.preventDefault();
//     }

//     render() {
//         return(
//             <div>
//                 <form>
//                     <label for="firstName">
//                         First Name
//                         <input type="text" id="firstName" name="firstName" onChange={this.handleChange} required />
//                     </label>
//                     <label for="lastName">
//                         Last Name
//                         <input type="text" id="lastName" name="lastName" onChange={this.handleChange} required />
//                     </label>
//                     <label for="email">
//                         Email
//                         <input type="text" id="email" name="email" onChange={this.handleChange} required />
//                     </label>
//                     <label for="password">
//                         Password
//                         <input type="password" id="password" name="password" onChange={this.handleChange} required />
//                     </label>
//                     <input type="submit" value="Submit" onClick={this.handleSubmit} />
//                 </form>
//             </div>
//         )
//     }
// }

export default Register;
