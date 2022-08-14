import React, { useState } from "react";
import { Typography, InputLabel, MenuItem, FormControl, Select, Grid } from "@material-ui/core";
import StationDetails from '../StationDetails/stationDetails';
import useStyles from './styles';



const StationList = () => {

    const classes = useStyles();
    const [type, setType] = useState('Details');
    
    
    const stationName = [
        {name:'Hirsalantie'},
        {name:'Leppavarah'},
        {name:'Posti'},
        {name:'Hirsalantie'},
        {name:'Leppavarah'},
        {name:'Posti'},
        {name:'Hirsalantie'},
        {name:'Leppavarah'},
        {name:'Posti'},
    ]

      return(
        <div className={classes.container}>
            <Typography variant = "h4">StationLists</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                <MenuItem value ="Details">AllStations</MenuItem>
                <MenuItem value ="Near me">Near Me</MenuItem>    
                </Select>
            </FormControl>

            <Grid container spacing ={3} className={classes.list}>
                {stationName.map((list,i) => (
                    <Grid item key = {i} xs ={12}>
                        <StationDetails list = {list}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}


export default StationList;