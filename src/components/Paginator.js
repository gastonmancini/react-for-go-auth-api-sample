import React from 'react';

function Paginator(props) {

    function previous() {
        if (props.page > 1) {
            props.pageChanged(props.page - 1);
        }
    }

    function next() {
        if (props.page < props.lastPage) {
            props.pageChanged(props.page + 1);
        }
    }

    return (
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
    );
}

export default Paginator;