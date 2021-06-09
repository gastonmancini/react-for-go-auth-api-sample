import '../Register.css';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function Submit(event) {
        event.preventDefault();

        await axios.post('http://localhost:8000/api/register', {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            passwordConfirm: passwordConfirm,
            roleId: 1 // TODO: Allow the user to select the role.
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/login'} />
    }

    return (
        <main className="form-signin">
            <form onSubmit={Submit}>
                <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                <input className="form-control" placeholder="First Name" required
                    onChange={e => setFirstName(e.target.value)} />
                <input className="form-control" placeholder="Last Name" required
                    onChange={e => setLastName(e.target.value)} />
                <input type="email" className="form-control" placeholder="Email" required
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)} />
                <input type="password" className="form-control" placeholder="Password Confirm" required
                    onChange={e => setPasswordConfirm(e.target.value)} />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>
    );
}

export default Register;