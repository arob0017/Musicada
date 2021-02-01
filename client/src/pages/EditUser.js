import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useUserContext } from '../components/UserContext'
import { Button, Card, CardActions, CardContent, Container, Divider, Grid, TextField, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import AddIcon from '@material-ui/icons/Add';

import API from "../utils/API";

function EditUser() {
    const { user, setUser } = useUserContext()
    const [userDetails, setUserDetails] = useState(user)

    const onSubmit = e => {
        e.preventDefault();

        API.updateUser(userDetails.id, userDetails).then(() =>
            setUser(userDetails)
        )
    }
    const onChange = e =>
        setUserDetails({ ...userDetails, [e.target.id]: e.target.value });

    return (
        <Container>
            <Card elevation={3}>
                <form noValidate onSubmit={onSubmit}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item xs={6}>
                                <Typography htmlFor="name" variant="h5" component="p">Name:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={onChange}
                                    value={userDetails.name}
                                    // error={errors.name}
                                    id="name"
                                    type="text"
                                    placeholder="John Smith"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <Typography htmlFor="email" variant="h5" component="p">Email:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={onChange}
                                    value={userDetails.email}
                                    // error={errors.email}
                                    id="email"
                                    type="email"
                                    placeholder="example@email.com"
                                />
                            </Grid>
                            {/* <Grid item xs={6}>
                                <Typography htmlFor="DOB" variant="h5" component="p">DOB:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={onChange}
                                    value={user.DOB}
                                    // error={errors.DOB}
                                    id="DOB"
                                    type="text"
                                    placeholder="01/01/2021"
                                />
                            </Grid> */}


                            {/* 
                            <Grid item xs={6}>
                                <Typography htmlFor="instrumentMain" variant="h5" component="p">Main instrument:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={onChange}
                                    value={user.instrumentMain}
                                    error={errors.instrumentMain}
                                    id="instrumentMain"
                                    type="text"
                                    placeholder="piano"
                                />
                            </Grid>

                            <Divider />


                            <Grid item xs={6}>
                                <Typography htmlFor="instrumentOther" variant="h5" component="p">Other instruments:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={onChange}
                                    value={user.otherInstrument}
                                    error={errors.otherInstrument}
                                    id="otherInstrument"
                                    type="text"
                                    placeholder="guitar"
                                />
                                <Button variant="contained" color="primary" onClick={addInstrument}><AddIcon /></Button>
                            </Grid>
                            <Grid item xs={12}>
                                {user.otherInstruments.map(instrument => (

                                    <Typography>
                                        {instrument}
                                    </Typography>
                                ))}
                            </Grid>
                            <br></br>
                            <Grid item xs={6}>
                                <Typography htmlFor="genre" variant="h5" component="p">Favourite genres to play:</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    onChange={onChange}
                                    value={user.genre}
                                    error={errors.genre}
                                    id="genre"
                                    type="text"
                                    placeholder="jazz"
                                />
                                <Button variant="contained" color="primary" onClick={addGenre}><AddIcon /></Button>
                            </Grid>
                            <br></br>
                            <Grid item xs={12}>
                                {user.genres.map(newGenre => (

                                    <Typography>
                                        {newGenre}
                                    </Typography>
                                ))}
                            </Grid> */}
                        </Grid>
                    </CardContent>
                    <CardActions>
                        <Button type="submit" variant="contained" color="primary" className="themeColor" onClick={onSubmit}> Update User</Button>
                    </CardActions>

                </form>
            </Card>
        </Container >
    )
}

export default EditUser;