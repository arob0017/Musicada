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
                <div className="jamminCardAll">
                    {users.map((user) =>
                        <div key={user.email}>
                            <Grid item xs={4} >
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
                                        <Typography component="p" variant="p" className="jamminBold">
                                            Fave genres to play:
                                    </Typography>
                                        <div className="togetherCenter">
                                            {user.genre.map(newGenre => (
                                                <Typography variant="p" component="p" className="togetherLine">
                                                    {newGenre} &#160;-&#160;
                                                </Typography>
                                            ))}
                                        </div>
                                        <br></br>
                                        <Typography component="p" variant="p" className="jamminBold">
                                            Also can play:
                                    </Typography>
                                        <div className="togetherCenter">
                                            {user.otherInstrument.map(instrument => (
                                                <div className="togetherCenter">
                                                    <Typography component="p" variant="p" className="togetherLine">
                                                        {instrument}&#160;-&#160;
                                                </Typography>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default JamminTab;
