import React from "react";
import MaterialUIForm from "react-material-ui-form";
import JssProvider from "react-jss/lib/JssProvider";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { Card, Typography, Paper, Fade, Button } from "@material-ui/core";
import wondering_cave from "./wonderingcave.jpg";
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

// const MaterialUiForm = props => {
//   const { handleSubmit, pristine, reset, submitting, classes } = props;
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <Field
//           name="firstName"
//           component={renderTextField}
//           label="First Name"
//         />
//       </div>
//       <div>
//         <Field name="lastName" component={renderTextField} label="Last Name" />
//       </div>
//       <div>
//         <Field name="email" component={renderTextField} label="Email" />
//       </div>
//       <div>
//         <Field name="sex" component={radioButton}>
//           <Radio value="male" label="male" />
//           <Radio value="female" label="female" />
//         </Field>
//       </div>
//       <div>
//         <Field
//           classes={classes}
//           name="favoriteColor"
//           component={renderSelectField}
//           label="Favorite Color"
//         >
//           <option value="" />
//           <option value={"ff0000"}>Red</option>
//           <option value={"00ff00"}>Green</option>
//           <option value={"0000ff"}>Blue</option>
//         </Field>
//       </div>
//       <div>
//         <Field name="employed" component={renderCheckbox} label="Employed" />
//       </div>
//       <div />
//       <div>
//         <Field
//           name="notes"
//           component={renderTextField}
//           label="Notes"
//           multiline
//           rowsMax="4"
//           margin="normal"
//         />
//       </div>
//       <div>
//         <button type="submit" disabled={pristine || submitting}>
//           Submit
//         </button>
//         <button type="button" disabled={pristine || submitting} onClick={reset}>
//           Clear Values
//         </button>
//       </div>
//     </form>
//   );
// };

export default function Quiz1() {
  // const classes = useStyles();
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
        <Fade in="true" timeout={8000}>
          <Paper>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">
                What makes a strong password? (Select all that apply)
              </FormLabel>
              <RadioGroup>
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Short and easy to remember"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Fade>
      </div>

      <Button
        style={{ float: "right" }}
        variant="outlined"
        color="secondary"
        href="/Security1a"
      >
        Continue
      </Button>
    </div>
  );
}
