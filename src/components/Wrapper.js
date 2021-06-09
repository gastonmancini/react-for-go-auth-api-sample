import React from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

function Wrapper(props) {
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