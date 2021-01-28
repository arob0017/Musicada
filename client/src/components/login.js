import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardActionArea, CardActions, CardContent, Container, TextField, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import API from "../utils/API"



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        API.login(userData).then((res) => {
            console.log(res);
            // do the same as with the registration component 
            // withRouter and if the login is successful, redirect to "/"
            this.setState({
                user: res.data
            })
        })
    };

    render() {
        const { errors } = this.state;
        return (
            <Container maxWidth="sm">
                <Link to="/">
                    <i className="material-icons left">keyboard_backspace</i> Back to home
                </Link>
                <Typography variant="h2">Login</Typography>
                <Card elevation={3}>
                    <form noValidate onSubmit={this.onSubmit}>
                        <CardActionArea>
                            <CardContent>
                                <Typography htmlFor="email" variant="h5" component="p">Email</Typography>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.email}
                                    error={errors.email}
                                    id="email"
                                    type="email"
                                    placeholder="email@example.com"
                                />

                                <Typography htmlFor="password" variant="h5" component="p">Password</Typography>
                                <TextField
                                    onChange={this.onChange}
                                    value={this.state.password}
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
    }
}
export default Login;