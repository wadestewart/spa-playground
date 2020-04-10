import React, { Component } from 'react';
import { postData } from '../utils/apiManager';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleSubmit(event) {
        const { firstName, lastName, email, password } = this.state;
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
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form>
                    <label for="firstName">
                        First Name
                        <input type="text" id="firstName" name="firstName" onChange={this.handleChange} required />
                    </label>
                    <label for="lastName">
                        Last Name
                        <input type="text" id="lastName" name="lastName" onChange={this.handleChange} required />
                    </label>
                    <label for="email">
                        Email
                        <input type="text" id="email" name="email" onChange={this.handleChange} required />
                    </label>
                    <label for="password">
                        Password
                        <input type="password" id="password" name="password" onChange={this.handleChange} required />
                    </label>
                    <input type="submit" value="Submit" onClick={this.handleSubmit} />
                </form>
            </div>
        )
    }
}

export default Login;
