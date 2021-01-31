import { React, useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext'

import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';


import "../components/style.css"

function ProfileTab() {
    const { user } = useUserContext()
    return (

        <div key={user.email}>
            <Card className="root">
                <CardContent className="content">
                    <Grid container spacing={3}>
                        <Grid item xs={5}>
                            <CardMedia href="https://placeholder.com">
                                <img src="https://via.placeholder.com/400" alt="profile" />
                            </CardMedia>
                        </Grid>

                        <Grid item xs={7} align="center">
                            <Typography component="h2" variant="h2">
                                {user.name}: {user.instrumentMain}
                            </Typography>
                            <Typography variant="subtitle3" color="textSecondary">
                                <a href='mailto:{user.email}'>{user.email}</a> - {user.DOB}
                            </Typography>
                            <Typography component="h5" variant="h6">
                                Also can play: {user.otherInstrument}
                            </Typography>
                            <Typography component="h5" variant="h6">
                                {user.otherInstrument}
                            </Typography>
                            <Typography component="h5" variant="h6">
                                Fave genres to play: {user.genre}
                            </Typography>
                            <Typography component="h5" variant="h6">
                                {user.genre}
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>

            </Card>
        </div>
    )
}

export default ProfileTab;


