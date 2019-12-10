import React from "react";
import {
  FormControlLabel,
  FormControl,
  FormLabel,
  Card,
  Typography,
  Paper,
  Fade,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  RadioGroup,
  Radio,
  Toolbar,
  AppBar
} from "@material-ui/core";
import { sizing } from "@material-ui/system";
import wondering_cave from "./wonderingcave.jpg";

export default function Quiz3() {
  const [state, setState] = React.useState({
    // wrong1: false,
    // correct1: false,
    // wrong2: false,
    open: false,
    continue: false
  });

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = event => {
    if (value === "correct1") {
      setState({ continue: true });
    }
    console.log(value);
    event.preventDefault();
    handleClickOpen(); // onSubmit, open dialog box for feedback
  };

  const [value, setValue] = React.useState("wrong1");
  const [open, setOpen] = React.useState(false); // for dialog box

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            DigiSafe - Security (Quiz 3)
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
          src={wondering_cave}
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
            <Typography variant="h5">
              Once you have a virus on your computer it can be pretty
              complicated to get rid of it. Even though it might seem that you
              deleted the virus, it could still hide somewhere and gradually
              destroy your computer or erase your data. That is why you should
              never trust unknown senders and hardware. If your computer got
              infected nevertheless you should immediately shut it down to
              prevent it spreading through your computer or, even worse, to
              other of your belongings. You should take it to a computer
              specialist who might be able to restore your computer but if not,
              all your important data could be lost. This is why you should
              always make safety copies on independent hard drives and in a
              cloud.
            </Typography>
          </Card>
        </Fade>
      </div>
      <br />
      <div
        style={{
          //   display: "inline-block",
          margin: "auto",
          width: "50%",
          justifyContent: "center",
          alignItems: "center"
          //   left: "50%"
        }}
      >
        <Paper
          style={{
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <form onSubmit={handleSubmit}>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                <br />
                What can you do when you find out that you have a virus on your
                computer?
              </FormLabel>
              <RadioGroup name="group" value={value} onChange={handleChange}>
                <FormControlLabel
                  control={<Radio />}
                  value="wrong1"
                  label="Just leave it, I don’t care if they get my data. What are they going to do with my age and address anyway?"
                />
                <FormControlLabel
                  control={<Radio />}
                  value="correct1"
                  label="Shut down the computer, disconnect the WIFI and the Internet cable. Don’t touch the computer until you have talked to a specialist."
                />
                <FormControlLabel
                  control={<Radio />}
                  value="wrong2"
                  label="Don’t touch the computer and leave it in standby mode."
                />
                <Button
                  style={{ float: "right" }}
                  type="submit"
                  variant="outlined"
                  color="secondary"
                >
                  Submit
                </Button>
                <Dialog open={open} keepMounted onClose={handleClose}>
                  <DialogTitle id="correct-answers">
                    {"Quiz Summary"}
                  </DialogTitle>
                  <DialogContent>
                    {state.continue && (
                      <DialogContentText id="correct-answer-text">
                        Congratulations, you finished the lesson with 100%
                        accuracy!
                      </DialogContentText>
                    )}
                    {value === "wrong1" && (
                      <DialogContentText id="incorrect-answer-text">
                        Scammers might sell your data to bad people. Your
                        personal data is way more valuable than you might
                        believe
                      </DialogContentText>
                    )}
                    {value === "wrong2" && (
                      <DialogContentText id="wrong2-answer-text">
                        Even if your computer is not actively used, data can
                        still travel via the internet and between devices.
                        Always make sure to shut down the whole thing and
                        disconnect everything.
                      </DialogContentText>
                    )}
                  </DialogContent>
                  <DialogActions>
                    {!state.continue && (
                      <Button
                        onClick={handleClose}
                        color="primary"
                        size="small"
                      >
                        Continue
                      </Button>
                    )}
                    {state.continue && (
                      <Button
                        width={1 / 4}
                        onClick={handleClose}
                        color="primary"
                        href="/"
                      >
                        Select Avatar
                      </Button>
                    )}
                    {state.continue && (
                      <Button
                        width={1 / 4}
                        onClick={handleClose}
                        color="primary"
                        href="/select-lesson"
                      >
                        Select Lesson
                      </Button>
                    )}
                  </DialogActions>
                </Dialog>
              </RadioGroup>
            </FormControl>
          </form>
          <br />
        </Paper>
      </div>
      {/* </Fade> */}
    </div>
  );
}
