import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

function Wrapper(props) {

    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('me');
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

export default Wrapper;