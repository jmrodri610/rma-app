import React, { useContext } from "react";
import Landing from "../../pages/Landing";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import { Route, Switch, withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {
  PATH_HOME,
  PATH_LOGIN,
  PATH_REGISTER,
} from "../../constants";
// import CreateRMA from "../CreateRMA";
// import SearchIcon from "@material-ui/icons/Search";
// import HomeIcon from "@material-ui/icons/Home";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AuthContext } from "../../context/AuthContext";

const useStyles = makeStyles({
  mainContainer: {
    height: "100vh",
    backgroundColor: "#b5babf57",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  
});

const App = ({ history }) => {
  const classes = useStyles();
  const authContext = useContext(AuthContext);

  const handleGoToHome = () => history.push("/");

  // const handleGoToCreateRMA = () => history.push(PATH_CREATE);

  // const handleNavigateToHome = () => history.push("/");

  // const handleNavigateToSearch = () => history.push(PATH_SEARCH);

  // const handleLogout = () => {};

  return (
    <Grid className={classes.mainContainer}>
      <Switch>
        <Route
          exact
          path="/"
          render={() =>
            authContext.isAuthenticated() ? handleGoToHome() : <LoginPage />
          }
        />
        <Route
          path={PATH_HOME}
          render={() =>
            authContext.isAuthenticated() ? <Landing /> : <LoginPage />
          }
        />
        <Route
          path={PATH_LOGIN}
          render={() =>
            authContext.isAuthenticated() ? handleGoToHome() : <LoginPage />
          }
        />
        <Route path={PATH_REGISTER} render={() => <RegisterPage />} />
      </Switch>
    </Grid>
  );
};

export default withRouter(App);
