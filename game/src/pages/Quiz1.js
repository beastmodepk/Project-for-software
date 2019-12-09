import React from "react";
import {
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormGroup,
  Card,
  Typography,
  Paper,
  Fade,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import wondering_cave from "./wonderingcave.jpg";

export default function Quiz1() {
  const [state, setState] = React.useState({
    wrong1: false,
    correct1: false,
    correct2: false,
    wrong2: false,
    open: false,
    continue: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    // console.log(state);
  };

  const handleSubmit = event => {
    if (state.correct1 && state.correct2 && !state.wrong1 && !state.wrong2) {
      setState({ continue: true });
      console.log(state);
    }
    event.preventDefault();
    handleClickOpen(); // onSubmit, open dialog box for feedback
  };

  const { wrong1, correct1, correct2, wrong2 } = state;

  const [open, setOpen] = React.useState(false); // for dialog box

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
              "I just went into my secret hideout and opened my research laptop,
              but I am afraid people will steal what I found out. I want to
              create a password for my laptop. I will take the first letter of
              every word in this sentence to make an acronym. I want to create a
              password for my laptop - so the password will be Iwtcapfml. To
              make it even more secure, I will add an exclamation mark and the
              current year. So my new password is Iwtcapfml!2019."
            </Typography>
          </Card>
        </Fade>
      </div>
      <br />
      {/* <Fade in="true" timeout={8000}> */}
      <Paper>
        <form onSubmit={handleSubmit}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              What makes a strong password? (Select all that apply)
            </FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wrong1}
                    onChange={handleChange("wrong1")}
                    value="wrong1"
                  />
                }
                label="Short and easy to remember"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={correct1}
                    onChange={handleChange("correct1")}
                    value="correct1"
                  />
                }
                label="Use a phrase and incorporate shortcut codes or acronyms"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={correct2}
                    onChange={handleChange("correct2")}
                    value="correct2"
                  />
                }
                label="Includes Numbers, Symbols, Capital Letters, and Lower-Case Letters"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={wrong2}
                    onChange={handleChange("wrong2")}
                    value="wrong2"
                  />
                }
                label="Your name or birthdays or used passwords"
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
                <DialogTitle id="correct-answers">{"Quiz Summary"}</DialogTitle>
                <DialogContent>
                  {state.continue && (
                    <DialogContentText id="correct-answer-text">
                      Great Job, all answers are correct!
                    </DialogContentText>
                  )}
                  {state.wrong1 && (
                    <DialogContentText id="incorrect-answer-text">
                      It cannot be too short and easy because there are programs
                      that can guess password really quickly. The longer the
                      password, the longer it takes to guess it. Nine letters
                      take a few days, eleven letters can already take years to
                      guess.
                      <br />
                    </DialogContentText>
                  )}
                  {state.wrong2 && (
                    <DialogContentText id="wrong2-answer-text">
                      If someone tries to guess your password the first thing
                      they would do is type in your name and birthday because it
                      is so easy for you to remember. Don’t do that!
                    </DialogContentText>
                  )}
                </DialogContent>
                <DialogActions>
                  {!state.continue && (
                    <Button onClick={handleClose} color="primary">
                      Continue
                    </Button>
                  )}
                  {state.continue && (
                    <Button
                      onClick={handleClose}
                      color="primary"
                      href="/Security2"
                    >
                      Continue
                    </Button>
                  )}
                </DialogActions>
              </Dialog>
            </FormGroup>
          </FormControl>
        </form>
      </Paper>
      {/* </Fade> */}
    </div>
  );
}
