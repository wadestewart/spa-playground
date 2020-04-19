import React from 'react';

import useLoginForm from '../utils/CustomHooks';
import { postData } from '../utils/apiManager';

const SignUp = () => {
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
    const { handleInputChange, handleSubmit, inputs } = useLoginForm(signUp);
    const { firstName, lastName, email, password } = inputs;

    return (
        <div>
            <form>
                <label htmlFor="firstName">
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
                <input type="submit" value="Submit" onClick={handleSubmit} />
            </form>
        </div>
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

export default SignUp;
