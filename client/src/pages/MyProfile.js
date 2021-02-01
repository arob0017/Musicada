import { React, useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext'
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';

import "../components/style.css"

function ProfileTab() {
    const { user } = useUserContext()
    console.log(user);
    return (
        <>
            <Container align="center">
                <div key={user.email}>
                    <Card className="root" >
                        <CardContent className="content">
                            <Typography component="h3" variant="h3">
                                {user.name}: {user.instrumentMain}
                            </Typography>
                            <Typography variant="subtitle3" color="textSecondary">
                                <a href={`mailto:${user.email}`}>{user.email}</a> - {user.DOB}
                            </Typography>
                            <CardMedia href="https://placeholder.com" className="placeholerImage">
                                <img src="https://via.placeholder.com/400" alt="profile" />
                            </CardMedia>


                            <Typography component="h5" variant="h6">
                                Fave genres to play:
                                    </Typography>
                            <div className="togetherCenter">
                                {user.genre.map(newGenre => (
                                    <Typography component="p" variant="p" className="togetherLine">
                                        {newGenre}&#160;-&#160;
                                    </Typography>
                                ))}
                            </div>
                            <br></br>
                            <Typography component="h5" variant="h6">
                                Other Instruments that {user.name} can play:
                                            </Typography>
                            <div className="togetherCenter">
                                {user.otherInstrument.map(instrument => (

                                    <Typography component="p" variant="p" className="togetherLine">
                                        {instrument}&#160;-&#160;
                                    </Typography>
                                ))}
                            </div>
                        </CardContent>

                    </Card>
                </div>
            </Container>
        </>
    )
}

export default ProfileTab;


