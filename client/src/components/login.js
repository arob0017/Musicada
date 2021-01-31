import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { useUserContext } from './UserContext'
import { Button, Card, CardActionArea, CardActions, CardContent, Container, TextField, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import API from "../utils/API"


const Login = withRouter((props) => {
    const [state, setState] = useState({
        email: "",
        password: "",
        errors: {}
    })
    const { setUser } = useUserContext();
    const onChange = e => {
        setState({ ...state, [e.target.id]: e.target.value });
    };
    const onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: state.email,
            password: state.password,
            DOB: state.DOB,
            instrumentMain: state.instrumentMain,
            otherInstrument: state.otherInstrument,
            genre: state.genre,
        };
        API.login(userData).then((res) => {
            console.log(res);
            // do the same as with the registration component 
            // withRouter and if the login is successful, redirect to "/"
            setUser(res.data)
            // props.history.push("/")
        })
    };


    const { errors } = state;
    return (
        <Container maxWidth="sm">
            {/* <Typography variant="h2" align="center">Login</Typography> */}
            <Card elevation={3} className="notUserCard">
                <form noValidate onSubmit={onSubmit}>
                    <CardActionArea>
                        <CardContent>
                            <Typography htmlFor="email" variant="h5" component="p">Email</Typography>
                            <TextField
                                onChange={onChange}
                                value={state.email}
                                error={errors.email}
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                            />

                            <Typography htmlFor="password" variant="h5" component="p">Password</Typography>
                            <TextField
                                onChange={onChange}
                                value={state.password}
                                error={errors.password}
                                id="password"
                                type="password"
                            />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button type="submit" variant="contained" color="primary" className="themeColor">Login</Button>
                        <Typography component="p"> Don't have an account? <Link to="/register">Register</Link></Typography>
                    </CardActions>
                </form>
            </Card>
        </Container>
    );

});
export default Login;