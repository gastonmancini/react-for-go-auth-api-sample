import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import axios from 'axios';

function Users() {
    
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get('users')
                setUsers(data.data);
            }
        )()
    }, [])

    return(
        <Wrapper>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user) => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.firstName} {user.lastName}</td>
                                        <td>{user.email}</td>
                                        <td>{user.Role.name}</td>
                                        <td></td>
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

export default Users;