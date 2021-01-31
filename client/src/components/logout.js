import React from 'react';
import { Link } from 'react-router-dom';

function Logout() {

    return (
        <div>
            <h1>You have logged out</h1>
            <Link to="/">To log back in click this link</Link>
        </div>
    )

}
export default Logout;