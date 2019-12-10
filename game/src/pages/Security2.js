import React from "react";
import {
  Card,
  Typography,
  Paper,
  Fade,
  Button,
  AppBar,
  Toolbar
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

export default function Security2() {
  // const classes = useStyles();
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
              "Oh, someone knocked on the door and shouted that they have some
              important mail for me but I don’t expect anyone, I don’t know that
              person and I didn’t order anything! I probably shouldn’t open the
              door and ask my parents first if it safe to open the package…!"
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
              In the digital world, just like in the story, you should never
              trust a source before asking your parents first. There are some
              pretty bad people out there who want to get access to your
              personal data. Some of them create “Viruses”, programs that mess
              around with your data, edit, delete or leak it. The people who
              built your computer usually do a good job protecting it against
              viruses and other malware. But the bad people, “Scammers”, are
              very creative in finding ways to still infect your computer. Most
              of the time, viruses hide in attachments or downloads from
              websites that you should not trust. Never open eMails from an
              unknown sender, especially not the attachments. Scammers are smart
              and try to make their eMail seem urgent or try to seem familiar so
              you trust them.
            </Typography>
          </Paper>
        </Fade>
      </div>
      <br />
      <Button
        style={{ float: "right" }}
        variant="outlined"
        color="secondary"
        href="/Quiz2"
      >
        Continue
      </Button>
    </div>
  );
}
