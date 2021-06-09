import '../Register.css';
import React, { useState} from 'react';

function Register() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    function Submit(event) {
        event.preventDefault();
        console.log({
            firstName,
            lastName,
            email,
            password,
            passwordConfirm
        })
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