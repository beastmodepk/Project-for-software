import React from "react";
import { Link } from "react-router-dom";
import { Button, Paper, Grid, Typography } from "@material-ui/core";
import hero_laugh from "./hero_laugh.png";

export default function AvatarSelect() {
  return (
    <div>
      <Typography align="center">
        <h2>Choose Your Avatar</h2>
      </Typography>
      <Grid container direction="row" justify="center" spacing={1}>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" href="/select-lesson">
              Superhero
            </Button>
            <br />
            <img src={hero_laugh} alt="hero orb" height="200" width="300" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary">
              Scientist
            </Button>
            <br />
            Coming Soon!
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary">
              Sloth
            </Button>
            <br />
            Coming Soon!
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary">
              Astronaut
            </Button>
            <br />
            Coming Soon!
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary">
              Mermaid
            </Button>
            <br />
            Coming Soon!
          </Paper>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
    </div>
  );
}
