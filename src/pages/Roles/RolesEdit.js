import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import Wrapper from '../../components/Wrapper';
import { Permission } from '../../models/permission';
import axios from 'axios';

function RoleEdit(props) {

    const [name, setName] = useState("");
    const [permissions, setPermissions] = useState([]);
    const [selectedPermissions, setSelectedPermissions] = useState([]);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('permissions');
                setPermissions(response.data.data);

                const { data } = await axios.get(`roles/${props.match.params.id}`);

                setName(data.name);
                setSelectedPermissions(data.permissions.map((p) => p.id));

            }
        )()
    }, []);

    async function checkPermissions(id) {
        if (selectedPermissions.some(s => s === id)) {
            setSelectedPermissions(selectedPermissions.filter(s => s !== id));
            return;
        }
        setSelectedPermissions([...selectedPermissions, id]);
    }

    async function submit(event) {
        event.preventDefault();
        await axios.put(`roles/${props.match.params.id}`, {
            name,
            permissions: selectedPermissions
        });

        setRedirect(true);
    }

    if (redirect) {
        return (
            <Redirect to="/roles" />
        );
    }

    return (
        <Wrapper>
            <form onSubmit={submit}>
                <div className="mb-3 mt-3 row">
                    <label className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input className="form-control"
                            defaultValue={name}
                            onChange={e => setName(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label className="col-sm-2 col-form-label">Permissions</label>
                    <div className="col-sm-10">
                        {
                            permissions.map((p) => {
                                return (
                                    <div className="form-check- form-check-inline col_3" key={p.id}>
                                        <input className="form-check-input" type="checkbox"
                                            value={p.id}
                                            checked={selectedPermissions.some(s => s === p.id)}
                                            onChange={() => checkPermissions(p.id)}
                                        />
                                        <label className="form-check-label">{p.name}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button className="btn btn-outline-secondary">Save</button>
            </form>
        </Wrapper>
    );
};

export default RoleEdit;