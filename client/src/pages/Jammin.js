import { React, useState, useEffect } from 'react';
import { useUserContext } from '../components/UserContext'
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, CardMedia, Grid, Typography, Button } from '@material-ui/core';
import API from "../utils/API";

import "../components/style.css"


const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

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
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <>
            <div>
                {users.map((user) =>
                    <div key={user.email}>
                        <Grid item xs={4} justify="center">
                            <div className="jamminCardAll">
                                <Card className="jamminCard">
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                                            <a href={`mailto:${user.email}`}>{user.email}</a> - {user.DOB}
                                        </Typography>
                                        <Typography variant="h5" component="h2">
                                            {user.name}
                                        </Typography>
                                        <Typography className={classes.pos} color="textSecondary">
                                            {user.instrumentMain}
                                        </Typography>
                                        <Typography component="p" variant="p">
                                            Fave genres to play:
                                        </Typography>
                                        {user.genre.map(newGenre => (
                                            <Typography variant="p" component="p" className="togetherRight">
                                                {newGenre} &#160;-&#160;
                                            </Typography>
                                        ))}
                                        <br></br>
                                        <Typography component="p" variant="p">
                                            Also can play:
                                        </Typography>
                                        {user.otherInstrument.map(instrument => (
                                            <div className="togetherCenter">
                                                <Typography component="p" variant="p" className="togetherRight">
                                                    {instrument}&#160;-&#160;
                                            </Typography>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </Grid>
                    </div>
                )}
            </div>
        </>
    )
}
export default JamminTab;
