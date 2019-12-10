import React from "react";
import {
  Card,
  Typography,
  Paper,
  Fade,
  Button,
  Toolbar,
  AppBar
} from "@material-ui/core";
import { sizing } from "@material-ui/system";
import laughing_cave from "./laughingcave.jpg";
// import universe from "./blue-and-purple-cosmic-sky-956999.jpg";

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

export default function Security3() {
  // const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            DigiSafe - Security (Part 3)
          </Typography>
        </Toolbar>
      </AppBar>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <img
          src={laughing_cave}
          // style={classes.innerCenter}
          height="411"
          width="733"
        />
        {/* unknown behavior when changing css directly vs card attribute */}
        <Fade in="true" timeout={4000}>
          <Card
            style={{
              width: "25%",
              padding: 10,
              margin: 10
            }}
          >
            <Typography variant="h4">
              "Oh there are cookies inside! I love cookies, I will try one! Oh…
              I don’t feel so good...Everything is blurry and does it smell like
              cheese in here? I will lay down for a while".
            </Typography>
            <br />
            <Typography variant="h3">*A few hours pass...*</Typography>
          </Card>
        </Fade>
      </div>
      <br />
      <div
        style={{
          padding: 30
        }}
      >
        <Fade in="true" timeout={8000}>
          <Paper>
            <Typography variant="h6">
              "I have been asleep for a while, I drank herbal tea and took some
              medication but I still don’t feel better… I should call my parents
              and ask them for help!"
            </Typography>
          </Paper>
        </Fade>
      </div>
      <br />
      <Button
        style={{ float: "right" }}
        variant="outlined"
        color="secondary"
        href="/Quiz3"
      >
        Continue
      </Button>
    </div>
  );
}
