import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import hero_laugh from "./hero_laugh.png";

export default function AvatarSelect() {
  return (
    <div>
      {/* <img src={hero_laugh} alt="hero orb" height="300" width="250"></img>
      <br /> */}
      <Grid container direction="row" justify="center" spacing={1}>
        <Grid item>
          <Paper>
            <Link to="/select-lesson">Superhero</Link>
            <br />
            <img src={hero_laugh} alt="hero orb" height="150" width="150" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Link to="/select-lesson">Scientist</Link>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Link to="/select-lesson">Sloth</Link>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Link to="/select-lesson">Astronaut</Link>
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Link to="/select-lesson">Mermaid</Link>
          </Paper>
        </Grid>
      </Grid>
      <br></br>
      <br></br>
    </div>
    // <div>
    //   <Link to="/select-lesson">Scientist</Link>
    //   <img src={Beastmode} alt="hero orb" height="100" />
    // </div>
    // <br></br>
    // <br></br>
    // <div>
    //   <Link to="/select-lesson">Sloth</Link>
    //   <img src={hero_laugh} alt="hero orb" height="100" />
    // </div>
    // <br></br>
    // <br></br>
    // <div>
    //   <Link to="/select-lesson">Astronaut</Link>
    //   <img src={Beastmode} alt="hero orb" height="100" />
    // </div>
    // <div>
    //   <Link to="/select-lesson">Mermaid</Link>
    //   <img src={hero_laugh} alt="hero orb" height="100" />
    // </div>
    // <br></br>
    // <br></br>
  );
}
