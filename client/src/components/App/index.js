import React, { useContext } from "react";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";
import Item from "../../pages/Item";
import List from "../../pages/List";
import NotFoundPage from "../../pages/NotFoundPage";
import { Route, Switch, withRouter } from "react-router-dom";
import CustomAppBar from "../CustomAppBar";
import {
  PATH_HOME,
  PATH_LIST,
  PATH_ITEM,
  PATH_LOGIN,
  PATH_REGISTER,
  PATH_CREATE,
} from "../../constants";
import { AuthContext } from "../../context/AuthContext";

const App = ({ history }) => {
  const authContext = useContext(AuthContext);

  return (
    <>
      <CustomAppBar title="RMA Manager Tool for business" />
      <Switch>
        <Route
          path={PATH_LOGIN}
          render={() =>
            !authContext.isAuthenticated() ? (
              <LoginPage />
            ) : (
              history.push(PATH_LIST)
            )
          }
        />
        <Route
          path={PATH_REGISTER}
          render={() =>
            authContext.isAuthenticated() ? (
              history.push(PATH_LIST)
            ) : (
              <RegisterPage />
            )
          }
        />
        <Route
          exact
          path="/"
          render={() =>
            authContext.isAuthenticated()
              ? history.push(PATH_LIST)
              : history.push(PATH_LOGIN)
          }
        />
        <Route
          path={PATH_HOME}
          render={() =>
            authContext.isAuthenticated() ? <List /> : history.push(PATH_LOGIN)
          }
        />
        <Route
          path={PATH_CREATE}
          render={() =>
            authContext.isAuthenticated() ? <Item /> : history.push(PATH_LOGIN)
          }
        />
        <Route
          path={PATH_LIST}
          render={() =>
            authContext.isAuthenticated() ? <List /> : history.push(PATH_LOGIN)
          }
        />
        <Route
          path={`${PATH_ITEM}/:rmaId`}
          render={(props) =>
            authContext.isAuthenticated() ? (
              <Item id={props.match.params.rmaId} />
            ) : (
              history.push(PATH_LOGIN)
            )
          }
        />
        <Route path="*" render={() => <NotFoundPage />} />
      </Switch>
    </>
  );
};

export default withRouter(App);
