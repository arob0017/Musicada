import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import LocationCityIcon from '@material-ui/icons/LocationCity';

import './style.css';

import FavoriteTab from "../pages/Favorites";
import JamminTab from "../pages/Jammin";
import NightOutTab from '../pages/NightOut';
import ProfileTab from "../pages/MyProfile";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function NavBottom() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <footer>
                <Paper square elevation={3}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="fullWidth"
                        indicatorColor="secondary"
                        textColor="secondary"
                        aria-label="simple tabs example"
                    >
                        <Tab icon={<AudiotrackIcon />} label="JAMMIN" {...a11yProps(0)} />
                        <Tab icon={<FavoriteIcon />} label="FAVORITES" {...a11yProps(1)} />
                        <Tab icon={<LocationCityIcon />} label="Night Out" {...a11yProps(2)} />
                        <Tab icon={<PersonPinIcon />} label="My Profile" {...a11yProps(3)} />
                    </Tabs>
                </Paper>
            </footer>
            <TabPanel value={value} index={0}>
                <JamminTab />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <FavoriteTab />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <NightOutTab />
            </TabPanel>
            <TabPanel value={value} index={3}>
                <ProfileTab />
            </TabPanel>
        </div>
    );
}
