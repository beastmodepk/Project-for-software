import React from "react";
// import { Link } from "react-router-dom";
import {
  Button,
  Paper,
  Grid,
  Typography,
  AppBar,
  Toolbar
} from "@material-ui/core";
import hero_laugh from "./hero_laugh.png";

export default function AvatarSelect() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            DigiSafe - Avatar Selection
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <Grid container direction="row" justify="center" spacing={1}>
        <Grid item>
          <Paper
            style={{
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Button
              variant="contained"
              color="primary"
              href="/select-lesson"
              align="center"
            >
              Superhero
            </Button>
            <br />
            <img src={hero_laugh} alt="hero orb" height="225" width="350" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
              Scientist
            </Button>
            <br />
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
              Sloth
            </Button>
            <br />
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
              Astronaut
            </Button>
            <br />
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
              Mermaid
            </Button>
            <br />
          </Paper>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
    </div>
  );
}
