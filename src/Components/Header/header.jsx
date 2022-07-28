import React from "react";
import {Autocomplete} from '@react-google-maps/api'
import {AppBar, Toolbar, Typography, Inputbase, Box} from '@material-ui/core'
const Header = () => {
    return(
        <AppBar position = "static">
            <Toolbar className={classes.Toolbar}>
                <Typography variant = "h5" className = {classes.title}>
                    Helsinki-City-Bike-App
                </Typography>
                <Box display = "flex">
                    <Typography variant = "h6" className ={classes.title}>
                        Search
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar> 
    )
}

export default Header;