import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../../src/assets/logo/logo.png";
import Grid from "@material-ui/core/Grid";
import { Divider, TextField } from "@material-ui/core";
import clsx from 'clsx';
import { globalStyles } from "../../styles";

const useStyles = makeStyles({
  rmaBox: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    borderRadius: "0.5rem",
    padding: "2.5rem",
    height: "30rem",
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
  divideText: {

  },
  button: {
    marginBottom: "3.25rem",
  },
  linkToSignUp:{
      color: 'blue',
      cursor: 'pointer'
  }
});

const LoginPage = () => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  const handleLogin = () => {};
  const handleGoToRegister = ()=> {};

  return (
    <Box boxShadow={3} m={1} p={1} className={classes.rmaBox}>
      <Grid className={classes.logoContainer}>
        <img src={logo} alt="Assa abloy global solutions" />
      </Grid>
      <Typography variant="h6">Login</Typography>
      <form>
        <div className={clsx(classes.form, globalClasses.flex, globalClasses.flexColumn)}>
          <TextField
            label="email"
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
          <Button variant="contained" color="secondary" className={classes.button} onClick={handleLogin} >Sign in</Button>
          <Grid className={clsx(globalClasses.flex, globalClasses.justifyCenter)}>
            <Divider />
            <Typography variant="caption" className={classes.divideText} > or <span onClick={handleGoToRegister} className={classes.linkToSignUp} >Sign up</span></Typography>
            <Divider />
          </Grid>
        </div>
      </form>
    </Box>
  );
};

export default LoginPage;
