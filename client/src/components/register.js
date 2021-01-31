import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useUserContext } from './UserContext'
import { Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Select, TextField, Typography } from '@material-ui/core';
import 'fontsource-roboto';

import API from "../utils/API";


const Register = withRouter((props) => {

    const [state, setState] = useState({
        name: "",
        email: "",
        DOB: "",
        password: "",
        password2: "",
        instrumentMain: "",
        otherInstrument: "",
        genre: "",
        jam: ["yes", "no"],
        band: ["Find a Band", "Recruit for a Band"],


        errors: {},
        redirect: false
    })

    const { setUser } = useUserContext();

    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value });
    };

    const onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: state.name,
            email: state.email,
            DOB: state.DOB,
            password: state.password,
            password2: state.password2,
            instrumentMain: state.instrumentMain,
            otherInstrument: state.otherInstrument,
            genre: state.genre,
            jam: state.jam,
            band: state.band,
        };
        console.log(newUser);

        API.register(newUser).then(res => {


            setUser(res.data)
            props.history.push("/")
        })
    }
    const { errors } = state;
    return (
        <Container>
            <Card elevation={3}>
                <form noValidate onSubmit={onSubmit}>
                    <CardActionArea>
                        <CardContent>
                            <Grid container spacing={3}>
                                <Grid item xs={6}>
                                    <Typography htmlFor="name" variant="h5" component="p">Name:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={onChange}
                                        value={state.name}
                                        error={errors.name}
                                        id="name"
                                        type="text"
                                        placeholder="John Smith"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography htmlFor="DOB" variant="h5" component="p">DOB:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={onChange}
                                        value={state.DOB}
                                        error={errors.DOB}
                                        id="DOB"
                                        type="text"
                                        placeholder="01/01/2021"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography htmlFor="email" variant="h5" component="p">Email:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={onChange}
                                        value={state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                        placeholder="example@email.com"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography htmlFor="password" variant="h5" component="p">Password:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={onChange}
                                        value={state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                        placeholder="6 character minimum"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography htmlFor="password2" variant="h5" component="p">Confirm Password:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={onChange}
                                        value={state.password2}
                                        error={errors.password2}
                                        id="password2"
                                        type="password"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography htmlFor="instrumentMain" variant="h5" component="p">Main instrument:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={onChange}
                                        value={state.instrumentMain}
                                        error={errors.instrumentMain}
                                        id="instrumentMain"
                                        type="text"
                                        placeholder="piano"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography htmlFor="instrumentOther" variant="h5" component="p">Other instruments:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={onChange}
                                        value={state.otherInstrument}
                                        error={errors.otherInstrument}
                                        id="otherInstrument"
                                        type="text"
                                        placeholder="guitar"
                                    />
                                </Grid>

                                <Grid item xs={6}>
                                    <Typography htmlFor="genre" variant="h5" component="p">Favourite genres to play:</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        onChange={onChange}
                                        value={state.genre}
                                        error={errors.genre}
                                        id="genre"
                                        type="text"
                                        placeholder="jazz"
                                    />
                                </Grid>


                                <Grid item xs={6}>
                                    <Typography htmlFor="instrumentOther" variant="h5" component="p">Are you looking to Jam?</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Select
                                        native
                                        value={state.jam}
                                        onChange={onchange}
                                    // inputProps={{
                                    //     name: 'age',
                                    //     id: 'age-native-simple',
                                    // }}
                                    >
                                        <option value={0}>Yes</option>
                                        <option value={1}>No</option>
                                    </Select>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography htmlFor="instrumentOther" variant="h5" component="p">Find a band, or recruit members?</Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Select
                                        native
                                        value={state.band}
                                        onChange={onchange}
                                    // inputProps={{
                                    //     name: 'age',
                                    //     id: 'age-native-simple',
                                    // }}
                                    >
                                        <option value={0}>Find a Band</option>
                                        <option value={1}>Recruit members for a band</option>
                                    </Select>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button type="submit" variant="contained" color="primary" className="themeColor"> Sign up</Button>
                        <Typography component="p">Already have an account? <Link to="/">Log in</Link></Typography>
                    </CardActions>
                </form>
            </Card>
        </Container >
    );
})
export default Register;


