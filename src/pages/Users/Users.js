import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Paginator from '../../components/Paginator';

function Users() {
    
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        (
            async () => {
                const { data } = await axios.get(`users?page=${page}`)
                setUsers(data.data);
                setLastPage(data.pagination.lastPage);
            }
        )()
    }, [page]);

    async function remove(id) {
        if (window.confirm('Are you sure you want to delete this record?')) {
            await axios.delete(`users/${id}`);
            setUsers(users.filter((u) => u.id !== id));
        }
    }

    return(
        <Wrapper>
            <div className="pt-3 pb-2 mb-3 border-button">
                <Link to={"/users/create"} className="btn btn-sm btn-outline-secondary" href="#">Add</Link>
            </div>
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
                                        <td>
                                            <div className="btn-group mr-2">
                                            <Link to={`/users/${user.id}/edit`} className="btn btn-sm btn-outline-secondary">Edit</Link>
                                            </div>
                                            <div className="btn-group mr-2">
                                                <a href="#" className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => remove(user.id)}>Delete</a>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <Paginator page={page} lastPage={lastPage} pageChanged={setPage} />
        </Wrapper>
    );
}

export default Users;