import { React, useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext'
import { Card, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

import "../components/style.css"

function ProfileTab() {
    const { user } = useUserContext()
    console.log(user);
    return (
        <>
            <Grid container item xs={12} justify="center">
                <div key={user.email}>
                    <Card className="root" >
                        <CardContent className="content">
                            <Grid container spacing={3}>
                                <Grid item xs={5}>
                                    <CardMedia href="https://placeholder.com">
                                        <img src="https://via.placeholder.com/400" alt="profile" />
                                    </CardMedia>
                                </Grid>

                                <Grid item xs={7} align="center">
                                    <Typography component="h3" variant="h3">
                                        {user.name}: {user.instrumentMain}
                                    </Typography>
                                    <Typography variant="subtitle3" color="textSecondary">
                                        <a href={`mailto:${user.email}`}>{user.email}</a> - {user.DOB}
                                    </Typography>
                                    <Typography component="h5" variant="h6">
                                        Also can play:
                                    </Typography>
                                    {user.otherInstrument.map(instrument => (

                                        <Typography component="h5" variant="h6">
                                            {instrument}
                                        </Typography>
                                    ))}

                                    <Typography component="h5" variant="h6">
                                        Fave genres to play:
                                    </Typography>
                                    {user.genre.map(newGenre => (

                                        <Typography component="h5" variant="h6">
                                            {newGenre}
                                        </Typography>
                                    ))}
                                </Grid>
                            </Grid>
                        </CardContent>

                    </Card>
                </div>
            </Grid>
        </>
    )
}

export default ProfileTab;


