import {
  TextField,
  Typography,
  Grid,
  Checkbox,
  InputAdornment,
} from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  inputContainer: {
    display: "flex",
    alignItems: "center",
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

const CustomLabeledInput = ({
  label,
  disabled,
  rows,
  value,
  setValue,
  isRequired = false,
  multiline = false,
  type = "text",
}) => {
  const classes = useStyles();

  return (
    <Grid className={classes.inputContainer}>
      <Grid className={classes.label}>
        <Typography>{label}</Typography>
      </Grid>
      {type === "checkbox" ? (
        <Checkbox
          checked={value}
          onChange={(event) => setValue(event.target.checked)}
        />
      ) : (
        <Grid className={classes.input}>
          <TextField
            disabled={disabled}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            type={type}
            multiline={multiline}
            rows={rows}
            variant="standard"
            size="small"
            required={isRequired}
            // InputProps={{
            //   endAdornment: (
            //     <InputAdornment position="end">
            //       <CloseIcon />
            //     </InputAdornment>
            //   ),
            // }}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default CustomLabeledInput;
