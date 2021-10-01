import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../../src/assets/logo/logo.png";
import Grid from "@material-ui/core/Grid";
import { Divider, TextField } from "@material-ui/core";
import clsx from "clsx";
import { globalStyles } from "../../styles";

const useStyles = makeStyles({
  rmaBox: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    borderRadius: "0.5rem",
    padding: "2.5rem",
    height: "40rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoContainer: {
    marginBottom: "2.5rem",
  },
  form: {
    width: "100%",
  },
  input: {
    marginBottom: 8,
  },
  divideText: {},
  button: {
    marginBottom: "3.25rem",
  },
  linkToSignUp: {
    color: "blue",
    cursor: "pointer",
  },
});

const RegisterPage = () => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  const handleRegister = () => {};
  const handleGoToLogin= () => {};

  return (
    <Box boxShadow={3} m={1} p={1} className={classes.rmaBox}>
      <Grid className={classes.logoContainer}>
        <img src={logo} alt="Assa abloy global solutions" />
      </Grid>
      <Typography variant="h6">Sign up</Typography>
      <form>
        <div
          className={clsx(
            classes.form,
            globalClasses.flex,
            globalClasses.flexColumn
          )}
        >
          <TextField
            label="Name"
            variant="outlined"
            type="text"
            size="small"
            focused
            className={classes.input}
          />
          <TextField
            label="Surname"
            variant="outlined"
            type="password"
            size="small"
            focused
            className={classes.input}
          />
          <TextField
            label="email"
            variant="outlined"
            type="text"
            size="small"
            focused
            className={classes.input}
          />
          <TextField
            label="Username"
            variant="outlined"
            type="text"
            size="small"
            focused
            className={classes.input}
          />
          <TextField
            label="password"
            variant="outlined"
            type="password"
            size="small"
            focused
            className={classes.input}
          />
          <TextField
            label="Confirm password"
            variant="outlined"
            type="password"
            size="small"
            focused
            className={classes.input}
          />
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={handleRegister}
          >
            Register
          </Button>
          <Grid
            className={clsx(globalClasses.flex, globalClasses.justifyCenter)}
          >
            <Divider />
            <Typography variant="caption" className={classes.divideText}>
              {" "}
              or{" "}
              <span onClick={handleGoToLogin} className={classes.linkToSignUp}>
                Login
              </span>
            </Typography>
            <Divider />
          </Grid>
        </div>
      </form>
    </Box>
  );
};

export default RegisterPage;
