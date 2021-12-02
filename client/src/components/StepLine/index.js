import React from "react";
import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles({
    lineContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '65%'
    },
    step: {
        width: 20,
        height: 20,
        borderRadius: '100%',
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 14
    },
    activeStep: {
        backgroundColor: 'black',
        color: 'white'
    },
    stepLineContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '8rem'
    }

})

const StepLine = ({ step, total }) => {
    const classes = useStyles();


  return (
    <Grid className={classes.lineContainer}>
      <Typography variant="caption">Step {step}/{total}</Typography>
      <Grid className={classes.stepLineContainer}>
            <div className={step === 1 ? clsx(classes.activeStep, classes.step) : classes.step}>1</div>
            <div>-----------</div>
            <div className={step === 2 ? clsx(classes.activeStep, classes.step) : classes.step}>2</div>
      </Grid>
    </Grid>
  );
};

export default StepLine;
