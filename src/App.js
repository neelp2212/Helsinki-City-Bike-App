import React from "react";
import { CssBaseline } from '@material-ui/core'
import { Grid } from "@material-ui/core";
import Header from "./Components/Header/header";
import StationList from "./Components/StationList/stationList";
import Search from "./Components/Search/Search";

const App = () => {
  return (
    <>
      <CssBaseline>
        <Header/>
          <Grid container spacing={3} style ={{ width: '100%' }}>
            <Grid item xs = {12} md = {4}>
              <StationList />
          </Grid>
          <Grid item xs = {12} md = {4}>
            <Search />
          </Grid>
        </Grid>
      </CssBaseline>
    </>
  );
}

export default App;




























