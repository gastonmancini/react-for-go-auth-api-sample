import React, { useEffect, useState } from 'react';
import Wrapper from '../components/Wrapper';
import axios from 'axios';

function Profile() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(`me`);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);

            }
        )()
    }, []);

    async function submitAccountInformation(event) {
        event.preventDefault();
        await axios.put("me", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            roleId: 1 // TODO: Add DropDownlist to select a role
        });

    }

    async function submitPasswordChange(event) {
        event.preventDefault();
        await axios.put("me/password", {
            password,
            passwordConfirm
        });

    }

    return (
        <Wrapper>
            <h3>Account Information</h3>
            <form onSubmit={submitAccountInformation}>
                <div className="mb-3">
                    <label>First Name</label>
                    <input className="form-control"
                        defaultValue={firstName}
                        onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Last Name</label>
                    <input className="form-control"
                        defaultValue={lastName}
                        onChange={e => setLastName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input className="form-control"
                        defaultValue={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>

            <h3 className="mt-4">Change Password</h3>
            <form onSubmit={submitPasswordChange}>
                <div className="mb-3">
                    <label>Password</label>
                    <input type="password" className="form-control"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label>Password Confirm</label>
                    <input type="password" className="form-control"
                        onChange={e => setPasswordConfirm(e.target.value)} />
                </div>

                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
}

export default Profile;