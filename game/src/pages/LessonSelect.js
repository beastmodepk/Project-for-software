import React from "react";
import {
  Button,
  Paper,
  Grid,
  Typography,
  AppBar,
  Toolbar
} from "@material-ui/core";

import security_bckg from "./security_bckg.jpg";
import Etiquette from"./etiquette.jpg"
import Downtime from"./downtime.jpg"
import Health from"./Health.jpg"
import Privacy from"./Health.jpg"
import Integrity from"./Integrity.jpg"

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
            <img src={security_bckg} alt="Security background" height="225" width="350" />
          </Paper>
        </Grid>
       
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
              Etiquette
            </Button>
            <br />
            <img src={Etiquette} alt="Security background" height="225" width="350" />
          </Paper>
        </Grid>
        
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
              Digital Downtime
            </Button>
            <br />
            <img src={Downtime} alt="Security background" height="225" width="350" />
          </Paper>
        </Grid>

        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
            Health
            </Button>
            <br />
            <img src={Health} alt="Security background" height="225" width="350" />
          </Paper>
        </Grid>
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
            Integrity
            </Button>
            <br />
            <img src={Integrity} alt="Security background" height="225" width="350" />
          </Paper>
        </Grid>

        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
            Privacy
            </Button>
            <br />
            <img src={Privacy} alt="Security background" height="225" width="350" />
          </Paper>
        </Grid>
        
        <Grid item>
          <Paper>
            <Button variant="contained" color="primary" disabled="true">
           Integrity
            </Button>
            <br />
            <img src={Integrity} alt="Security background" height="225" width="350" />
          </Paper>
        </Grid>

      </Grid>

      {/* 
     
      <Link to="/lesson2">Responsibility</Link>
      <Link to="/lesson2">Literacy</Link> */}
    </div>
  );
}
