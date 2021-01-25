import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, FormControl, TextField, Typography } from '@material-ui/core';
import 'fontsource-roboto';

import API from "../utils/API";
// const classes = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
// });

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
            redirect: false
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);

        API.register(newUser).then(res => {
            console.log(res);
            this.setState({
                redirect: true
            })
        })

    };
    render() {
        const { errors } = this.state;
        if (this.state.redirect) {
            return <Redirect to="/" />

        }
        return (
            <Container>

                <Link to="/" className="btn-flat waves-effect">
                    <i className="material-icons left">keyboard_backspace</i> Back to home
                </Link>

                <Typography variant="h2">Register</Typography>


                <Card elevation={3}>
                    <form noValidate onSubmit={this.onSubmit}>
                        <CardActionArea>
                            <CardContent>
                                <Typography htmlFor="name" variant="h5" component="p">Name</Typography>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.name}
                                    error={errors.name}
                                    id="name"
                                    type="text"
                                    placeholder="John Smith"
                                />
                                <Typography htmlFor="email" variant="h5" component="p">Email</Typography>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    placeholder="example@email.com"
                                />
                                <Typography htmlFor="password" variant="h5" component="p">Password</Typography>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.password}
                                    error={errors.password}
                                    id="password"
                                    type="password"
                                    placeholder="6 character minimum"
                                />
                                <Typography htmlFor="password2" variant="h5" component="p">Confirm Password</Typography>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.password2}
                                    error={errors.password2}
                                    id="password2"
                                    type="password"
                                />
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button type="submit" variant="contained" color="primary"> Sign up</Button>
                            <Typography component="p">Already have an account? <Link to="/">Log in</Link></Typography>
                        </CardActions>
                    </form>
                </Card>
            </Container>
        );
    }
}
export default Register;