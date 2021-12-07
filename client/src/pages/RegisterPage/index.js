import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../../src/assets/logo/logo.png";
import Grid from "@material-ui/core/Grid";
import { Divider, TextField } from "@material-ui/core";
import clsx from "clsx";
import { globalStyles } from "../../styles";
import userApiService from "../../api/userApiService";
import Swal from "sweetalert2";
import { PATH_LOGIN } from "../../constants";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    backgroundColor: "#b5babf57",
    flexDirection: "column",
    justifyContent: "center",
    height: "100vh",
  },
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
  title: {
    marginBottom: 8,
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
    marginTop: "1.25rem",
  },
  linkToSignUp: {
    color: "blue",
    cursor: "pointer",
  },
});

const RegisterPage = ({ history }) => {
  const classes = useStyles();
  const globalClasses = globalStyles();

  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    new Swal({
      title: "Wait a moment, please...",
      allowedOutsideClick: false,
    });

    Swal.showLoading();

    try {
      await userApiService.post("/register", {
        name,
        surname,
        email,
        username,
        password,
      });

      Swal.fire("Saved", "user successfully registered ", "success").then(() =>
        handleGoToLogin()
      );
    } catch (error) {
      Swal.fire("Oops", "something went wrong", "error");
    }
  };
  const handleGoToLogin = () => history.push(PATH_LOGIN);

  return (
    <Grid className={classes.mainContainer}>
      <Box boxShadow={3} m={1} p={1} className={classes.rmaBox}>
        <Grid className={classes.logoContainer}>
          <img src={logo} alt="Assa abloy global solutions" />
        </Grid>
        <Typography className={classes.title} variant="h6">
          Sign up
        </Typography>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleRegister();
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
              label="Name"
              variant="outlined"
              type="text"
              size="small"
              focused
              className={classes.input}
              onChange={(event) => setName(event.target.value)}
              required
            />
            <TextField
              label="Surname"
              variant="outlined"
              type="text"
              size="small"
              focused
              className={classes.input}
              onChange={(event) => setSurname(event.target.value)}
              required
            />
            <TextField
              label="email"
              variant="outlined"
              type="text"
              size="small"
              focused
              className={classes.input}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <TextField
              label="Username"
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
              Register
            </Button>
            <Grid
              className={clsx(globalClasses.flex, globalClasses.justifyCenter)}
            >
              <Divider />
              <Typography variant="caption" className={classes.divideText}>
                {" "}
                or{" "}
                <span
                  onClick={handleGoToLogin}
                  className={classes.linkToSignUp}
                >
                  Login
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

export default withRouter(RegisterPage);
