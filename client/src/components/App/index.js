import React, { useContext } from "react";
// import Landing from "../../pages/Landing";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import PersistentDrawerLeft from "../../components/PersistentDrawerLeft";
import List from "../../pages/List";
// import CreateRMA from "../../pages/Create";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  // PATH_CREATE,
  PATH_HOME,
  PATH_LIST,
  PATH_LOGIN,
  PATH_REGISTER,
} from "../../constants";
import { AuthContext } from "../../context/AuthContext";


const useStyles = makeStyles({
  mainContainer: {
    height: "100vh",
    backgroundColor: "#b5babf57",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

const App = () => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);

  return (
      <Grid className={classes.mainContainer}>
        <Switch>
          <Route
            path={PATH_LOGIN}
            render={() =>
              authContext.isAuthenticated() ? (
                Redirect(PATH_HOME)
              ) : (
                <LoginPage />
              )
            }
          />
          <Route
            path={PATH_REGISTER}
            render={() =>
              authContext.isAuthenticated() ? (
                Redirect(PATH_HOME)
              ) : (
                <RegisterPage />
              )
            }
          />
          <PersistentDrawerLeft title="RMA Manager Tool for business">
            <Route
              exact
              path="/"
              render={() =>
                authContext.isAuthenticated()
                  ? Redirect(PATH_HOME)
                  : Redirect(PATH_LOGIN)
              }
            />
            <Route
              path={PATH_HOME}
              render={() =>
                authContext.isAuthenticated() ? <List /> : Redirect(PATH_LOGIN)
              }
            />
            <Route
              path={PATH_LIST}
              render={() =>
                authContext.isAuthenticated() ? <List /> : Redirect(PATH_LOGIN)
              }
            />
            {/* <Route
              path={PATH_CREATE}
              render={() =>
                authContext.isAuthenticated() ? (
                  <CreateRMA />
                ) : (
                  Redirect(PATH_LOGIN)
                )
              } */}
          </PersistentDrawerLeft>
        </Switch>
      </Grid>
  );
};

export default withRouter(App);
