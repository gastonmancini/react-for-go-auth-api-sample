import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';
import { Role } from '../models/role';
import { connect } from 'react-redux';

// Get the user from the props using redux
function Header({user}) {

    async function Logout() {
      await axios.post('logout', {});
    }

    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="#">React</a>
            <ul className="my-2 my-md-0 mr-md-3">
              <Link to={"/profile"} className="p-2 text-white text-decoration-none" href="#">
                {user.name}
              </Link>
              <Link to={"/login"} className="p-2 text-white text-decoration-none"
                    onClick={Logout}>
                    Sign out
              </Link>
            </ul>
        </nav>
    );
}

function mapStateToProps(state) {
  return {
      user: state.user
  };
}

export default connect(mapStateToProps)(Header);