import React from "react";
import {CssBaseline, Grid} from '@material-ui/core'
import Header from "./Components/Header/header";
import StationList from "./Components/StationList/stationList";
import Map from "./Components/Map/map";

const App = () => {
  return (
    <>
      <CssBaseline>
        <Header>
          <Grid container spacing={3} style ={{ width: '100%' }}>
          <Grid item xs = {12} md = {4}>
            <StationList />
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Map />
          </Grid>
          </Grid>
        </Header>
      </CssBaseline>
    </>
  );
}

export default App;




























// API key = Oz10B6pu2CztGnKIjhNFDks1SVxfivApn7tHx7pfjeoKYFO6g55NwKavJyt6xZ0b


/* curl --location --request POST 'https://data.mongodb-api.com/app/data-iftrm/endpoint/data/v1/action/findOne' \
--header 'Content-Type: application/json'   \
--header 'api-key: <API_KEY>' \
--data-raw '{
    "collection":"Address",
    "database":"Helsinki-City-Bike-App",
    "dataSource":"Cluster0",
    "projection": {"_id": 1}
}' */

