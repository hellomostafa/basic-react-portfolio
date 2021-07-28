import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
            <h1>404</h1>
            <h4>Page Not Found</h4>

            <Link to="/">
             <button>Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;