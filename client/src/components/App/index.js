import React from 'react';
import Landing from '../../pages/Landing';
import LoginPage from '../../pages/LoginPage';
import RegisterPage from '../../pages/RegisterPage';
import { Route, withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../../../src/assets/logo/logo.png';
import { PATH_CREATE, PATH_SEARCH } from '../../constants';
import CreateRMA from '../CreateRMA';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useIsAuthenticated, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";

const useStyles = makeStyles({
  mainContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b5babf57'
  },
  logoContainer: {
    margin: '1.25rem',
    width: '90%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  box: {
    height: '90vh',
    width: '85vw',
    borderRadius: '0.5rem',
    backgroundColor: '#fafafa',
  },
  icon: {
    color: '#4cb4d3',
    margin: '0.25rem',
    cursor: 'pointer',
  }
})

const App = ({ history }) => {


  const classes = useStyles();

  const handleGoToCreateRMA = () => history.push(PATH_CREATE)

  const handleNavigateToHome = () => history.push('/')

  const handleNavigateToSearch = () => history.push(PATH_SEARCH)

  const handleLogout = () => {

  }
  
  {/* <Grid className={classes.logoContainer}>
    <img src={logo} alt="Assa abloy global solutions" />
  
    
  </Grid> */}

  return (
    <Grid className={classes.mainContainer}>
      <RegisterPage />
    </Grid >
  )
}

export default withRouter(App);
