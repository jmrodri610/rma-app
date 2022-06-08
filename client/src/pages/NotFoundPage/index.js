import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { PATH_HOME } from "../../constants";

const useStyles = makeStyles({
  container: {
    width: "100%",
    textAlign: "center",
    marginTop: "10rem",
  },
  button: {
    marginTop: "3rem",
    height: "2.625rem",
    width: "10rem",
    color: "white",
    fontWeight: "bold",
  },
});

function NotFoundPage({ history }) {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container direction="column">
      <Grid item>
        <Typography variant="h4" align="center">
          Oops!
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h1" align="center">
          404
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1" align="center">
          Sorry! This page does'nt exists
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          disableRipple
          className={classes.button}
          onClick={() => {
            history.push(PATH_HOME);
          }}
        >
          Go Home
        </Button>
      </Grid>
    </Grid>
  );
}

export default withRouter(NotFoundPage);
