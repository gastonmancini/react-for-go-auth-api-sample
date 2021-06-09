import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const [user, setUser] = useState({ firstName: '' });

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('me');
            setUser(data);
        })();
    }, []);

    async function Logout() {
      await axios.post('logout', {});
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">React for go auth api sample</a>
            <ul className="my-2 my-md-0 mr-md-3">
              <Link to={"/profile"} className="p-2 text-white text-decoration-none" href="#">
                {user?.firstName}
              </Link>
              <Link to={"/login"} className="p-2 text-white text-decoration-none"
                    onClick={Logout}>
                    Sign out
              </Link>
            </ul>
        </nav>
    );
}

export default Header;