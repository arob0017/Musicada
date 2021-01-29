import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useUserContext } from '../components/UserContext'

function ProfileTab() {
    const { user } = useUserContext()
    return (
        <div>

            <div key={user.email}>
                <p>hello</p>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <p>{user.DOB}</p>
                <p>{user.instrumentMain}</p>
                <p>{user.otherInstrument}</p>
                <p>{user.genre}</p>

            </div>


        </div>
    )
}

export default ProfileTab;


