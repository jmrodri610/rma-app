import * as React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({});

export default function Landing() {
  const classes = useStyles();

  return <Grid container spacing={1} className={classes.gridContainer}></Grid>;
}
