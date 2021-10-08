import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../../src/assets/logo/logo.png";
import Grid from "@material-ui/core/Grid";
import { Divider, TextField } from "@material-ui/core";
import clsx from "clsx";
import { globalStyles } from "../../styles";
import { withRouter } from "react-router";
import { PATH_REGISTER, PATH_HOME } from "../../constants";
import Swal from "sweetalert2";
import userApiService from "../../api/userApiService";

const useStyles = makeStyles({
  rmaBox: {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    borderRadius: "0.5rem",
    padding: "2.5rem",
    height: "30rem",
    display: "flex",
    width: "20rem",
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

const LoginPage = ({ history }) => {
  const classes = useStyles();
  const globalClasses = globalStyles();
  const authContext = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    new Swal({
      title: "Wait a moment, please...",
      allowedOutsideClick: false,
    });

    Swal.showLoading();
    try {
      const {
        data: { token },
      } = await userApiService.post("/authenticate", {
        username,
        password,
      });

      authContext.setToken(token);

      Swal.fire("Login successful", `Welcome, ${username}!`, "success").then(
        () => history.push(PATH_HOME)
      );
    } catch (error) {
      Swal.fire("Oops", "something went wrong", "error");
    }
  };
  const handleGoToRegister = () => history.push(PATH_REGISTER);

  return (
    <Grid>
      <Box boxShadow={3} m={1} p={1} className={classes.rmaBox}>
        <Grid className={classes.logoContainer}>
          <img src={logo} alt="Assa abloy global solutions" />
        </Grid>
        <Typography variant="h6">Login</Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleLogin();
          }}
        >
          <div
            className={clsx(
              classes.form,
              globalClasses.flex,
              globalClasses.flexColumn
            )}
          >
            <TextField
              label="username"
              variant="outlined"
              type="text"
              size="small"
              focused
              className={classes.input}
              onChange={(event) => setUsername(event.target.value)}
              required
            />
            <TextField
              label="password"
              variant="outlined"
              type="password"
              size="small"
              focused
              className={classes.input}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
              type="submit"
            >
              Sign in
            </Button>
            <Grid
              className={clsx(globalClasses.flex, globalClasses.justifyCenter)}
            >
              <Divider />
              <Typography variant="caption" className={classes.divideText}>
                {" "}
                or{" "}
                <span
                  onClick={handleGoToRegister}
                  className={classes.linkToSignUp}
                >
                  Sign up
                </span>
              </Typography>
              <Divider />
            </Grid>
          </div>
        </form>
      </Box>
    </Grid>
  );
};

export default withRouter(LoginPage);
