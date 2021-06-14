import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import { Link } from 'react-router-dom';
import { Role } from '../../models/role';
import axios from 'axios';

function Roles() {

    const [roles, setRoles] = useState([]);

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get('roles');
                setRoles(data.data);
            }
        )()
    }, []);

    async function remove(id) {
        if (window.confirm('Are you sure you want to delete this Role?')) {
            await axios.delete(`roles/${id}`);
            setRoles(roles.filter((r) => r.id !== id));
        }
    }

    return (
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-button">
                <Link to={"/roles/create"} className="btn btn-sm btn-outline-secondary" href="#">Add</Link>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            roles.map((role) => {
                                return (
                                    <tr key={role.id}>
                                        <td>{role.id}</td>
                                        <td>{role.name}</td>
                                        <td>
                                            <div className="btn-group mr-2">
                                                <Link to={`/roles/${role.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                            </div>
                                            <div className="btn-group mr-2">
                                                <a href="#" className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => remove(role.id)}>Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </Wrapper>
    );
}

export default Roles;