import React, { useEffect, useState } from 'react';
import Wrapper from '../../components/Wrapper';
import axios from 'axios';

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

    function previous() {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    function next() {
        if (page < lastPage) {
            setPage(page + 1);
        }
    }

    async function remove(id) {
        if (window.confirm('Are you sure you want to delete this record?')) {
            await axios.delete(`users/${id}`);
            setUsers(users.filter((u) => u.id !== id));
        }
    }

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
                                        <td>
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
            <nav>
                <ul className="pagination">
                    <li className="page-item">
                        <a href="#" className="page-link"
                            onClick={previous}>Previous</a>
                    </li>
                    <li className="page-item">
                        <a href="#" className="page-link"
                            onClick={next}>Next</a>
                    </li>
                </ul>
            </nav>
        </Wrapper>
    );
}

export default Users;