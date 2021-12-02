import { TextField, Typography, Grid, InputAdornment } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  inputContainer: {
    display: "flex",
    alignItems: "flex-end",
    padding: 16,
  },
  label: {
    marginRight: 16,
    width: "35%",
  },
  input: {
    border: "1px solid gray",
    borderRadius: "0.3rem",
    padding: 8,
  },
  "@global": {
    "input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      appearance: "none",
      margin: 0,
    },
    "input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      "-moz-appearance": "none",
      appearance: "none",
      margin: 0,
    },
    "input[type=number]": {
      "-moz-appearance": "textfield",
    },
  },
});

const CustomLabeledInput = ({ label, disabled, rows, type = "text" }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.inputContainer}>
      <Grid className={classes.label}>
        <Typography>{label}</Typography>
      </Grid>
      <Grid className={classes.input}>
        {/* InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <CloseIcon />
                </InputAdornment>
              ),
            }} */}
        <TextField disabled={disabled} type={type} rows={rows} variant="standard" size="small" />
      </Grid>
    </Grid>
  );
};

export default CustomLabeledInput;
