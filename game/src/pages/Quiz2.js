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

export default function Quiz2() {
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
            DigiSafe - Security (Quiz 2)
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
              "Hmm, the person just left but they left the package on my
              doorstep. Oh the package is wrapped in gift paper and there’s a
              tag that says ‘Lots of love, your sister. Open the package soon
              before the things inside go bad!’ Well, I don’t have a sister but
              who would send their sibling something bad? And I don’t want the
              things inside to go bad, I should just open it now and see what is
              inside."
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
                Is opening the package a good idea? What would you do if you
                received an eMail with an attachment from an unknown sender?
              </FormLabel>
              <RadioGroup name="group" value={value} onChange={handleChange}>
                <FormControlLabel
                  control={<Radio />}
                  value="wrong1"
                  label="Open the attachment, I am curious to see what is inside."
                />
                <FormControlLabel
                  control={<Radio />}
                  value="wrong2"
                  label="Open the attachment because it seems urgent."
                />
                <FormControlLabel
                  control={<Radio />}
                  value="correct1"
                  label="Don’t open the attachment."
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
                        Great Job, your answer is correct!
                      </DialogContentText>
                    )}
                    {value === "wrong1" && (
                      <DialogContentText id="incorrect-answer-text">
                        Is curiosity more important than your safety?
                      </DialogContentText>
                    )}
                    {value === "wrong2" && (
                      <DialogContentText id="wrong2-answer-text">
                        Bad people often try to scam you into believing it is
                        urgent so you act hastily. Ask your parents if it is
                        legit and don’t click on it!
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
                        href="/Security3"
                      >
                        Continue
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
