import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { fadeIn } from "react-animations";

const Greeting = () => {
  return (
    <Grid container>
      <Typography>
        Welcome to my Portfolio. Please click to Enter the Thunderdome.
      </Typography>
    </Grid>
  );
};

export default Greeting;
