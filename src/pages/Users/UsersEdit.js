import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Wrapper from '../../components/Wrapper';
import { Role } from '../../models/role';

function UserEdit(props) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [roleId, setRoleId] = useState("");
    const [roles, setRoles] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                const rolesResponse = await axios.get('roles');
                setRoles(rolesResponse.data.data);

                const { data } = await axios.get(`users/${props.match.params.id}`);
                setFirstName(data.firstName);
                setLastName(data.lastName);
                setEmail(data.email);
                setRoleId(data.roleId);

            }
        )()
    }, []);

    async function submit(event) {
        event.preventDefault();
        await axios.put(`users/${props.match.params.id}`, {
            firstName: firstName,
            lastName: lastName,
            email: email,
            roleId: Number(roleId)
        });

        setRedirect(true);
    }

    if (redirect) {
        return (
            <Redirect to="/users" />
        );
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
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
                <div className="mb-3">
                    <label>Role</label>
                    <select className="form-control"
                        value={roleId}
                        onChange={e => setRoleId(e.target.value)}>
                        {roles.map((r) => {
                            return (
                                <option key={r.id} value={r.id}>{r.name}</option>
                            );
                        })}
                    </select>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default UserEdit;