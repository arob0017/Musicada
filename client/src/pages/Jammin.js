import { React, useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext'
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import API from "../utils/API";

import "../components/style.css"

function JamminTab() {
    useEffect(() => {
        loadUsers();
    });
    const [users, setUsers] = useState([])

    const { user } = useUserContext()
    function loadUsers() {
        API.getUsers().then(res => {

            setUsers(res.data)
            // .catch(err => console.log(err));
            // console.log(user)
            // setUser(res.data)
            // props.history.push("/")
        })
    }
    return (
        <>
            <ul>
                {users.map((user) =>
                    <li key={user.email}>
                        {user.email}
                    </li>
                )}
            </ul>
            {/* <div key={user.email}>
                <p>{user.email}</p>
                <p>{user.name}</p>
                <p>{user.DOB}</p>
            </div> */}
        </>
    )
}
export default JamminTab;
