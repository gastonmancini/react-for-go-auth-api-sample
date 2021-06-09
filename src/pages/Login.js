import '../Register.css';
import axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    async function Submit(event) {
        event.preventDefault();
        await axios.post('login', {
            email: email,
            password: password
        });
        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to={'/'} />
    }

    return (
        <main className="form-signin">
            <form onSubmit={Submit}>
                <h1 className="h3 mb-3 fw-normal">Please Sign in</h1>
                <input type="email" className="form-control" placeholder="Email" required
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" className="form-control" placeholder="Password" required
                    onChange={e => setPassword(e.target.value)} />
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
            </form>
        </main>);
}

export default Login;