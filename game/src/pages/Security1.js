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
import "../index.css";
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

export default function Security1() {
  // const classes = useStyles();
  return (
    <div className="bg">
      {/* <ImageBackground
        source={universe}
        style={{ width: "100%", height: "100%" }}
      /> */}
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            DigiSafe - Security (Part 1)
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
              "Look, I just reached my secret hideout! Only I have the key so
              nobody else can get in and steal my secret research and my
              precious treasures!"
            </Typography>
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
              In the digital world, your folders and personal data are contained
              in a secret hideout too, usually on your computer or in an online
              account. Only people who have the right key, a password that you
              set, can open it and access your data. For example in order to
              open your phone, you have to type in 4 numbers. If they are
              correct, you get to use the phone. Usually, you need a more secure
              password, for example for your eMail account. A data thief could
              easily guess these numbers, so never use your name or birthday as
              part of the password. A good and secure password should contain
              numbers, symbols, capital letters and lower-case letters. This can
              be difficult to remember - this is why you should incorporate a
              phrase or sequences that are familiar to you.
            </Typography>
          </Paper>
        </Fade>
      </div>
      <br />
      <Button
        style={{ float: "right" }}
        variant="outlined"
        color="secondary"
        href="/Quiz1"
      >
        Continue
      </Button>
    </div>
  );
}
