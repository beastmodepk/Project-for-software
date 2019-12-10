import React from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  AppBar,
  Toolbar
} from "@material-ui/core";
// import { Link } from "react-router-dom";

export default function LessonSelect() {
  return (
    <div className="lesson-selection">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            DigiSafe - Select Lesson
          </Typography>
        </Toolbar>
      </AppBar>
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
              href="/Security1"
              align="center"
            >
              Security
            </Button>
            <br />
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
              Etiquette
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
              Digital Downtime
            </Button>
            <br />
          </Paper>
        </Grid>
      </Grid>

      {/* <Link to="/lesson2">Digital Downtime</Link>
      <Link to="/lesson2">Etiquette</Link>
      <Link to="/lesson2">Health</Link>
      <Link to="/lesson2">Integrity</Link>
      <Link to="/lesson2">Privacy</Link>
      <Link to="/lesson2">Responsibility</Link>
      <Link to="/lesson2">Literacy</Link> */}
    </div>
  );
}
