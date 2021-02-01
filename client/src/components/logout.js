import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';

import musicBand from "../assets/musicBand.png";
import "./style.css";
function Logout() {

    return (
        <Grid item xs={12} justify="center">
            <Card align="center" className="logoutCard">
                <CardMedia
                    component="img"
                    alt="Music Band"
                    image={musicBand}
                    title="Music Band"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Come Back Soon
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )

}
export default Logout;
