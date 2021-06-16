import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { User } from '../models/user';
import { connect } from 'react-redux';
import { setUser } from '../redux/actions/setUserAction';

function Wrapper(props) {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('me');
                // This will get the user and dispatch it to the other components using redux
                props.setUser(new User(
                    data.id,
                    data.firstName,
                    data.lastName,
                    data.email,
                    data.role
                ));
            } catch (e) {
                setRedirect(true);
            }
        })();

    }, []);

    if (redirect) {
        return <Redirect to='/login' />
    }

    return (
        <>
            <Header />
            <div className="container-fluid">
                <div className="row">
                    <Nav />
                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        {props.children}
                    </main>
                </div>
            </div>
        </>
    );
}

// Receive events from other components. Where we get the user.
function mapStateToProps(state) {
    return {
        user: state.user
    };
}

// Send the events to other components.
function mapDispatchToProps(dispatch) {
    return {
        setUser: (user) => dispatch(setUser(user))
    };
}

// Connect to use redux
export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);