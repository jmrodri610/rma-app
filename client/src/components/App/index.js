import Landing from '../../pages/Landing';
import { Route, withRouter } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../../../src/assets/logo/logo.png';
import { PATH_CREATE, PATH_SEARH } from '../../constants';
import CreateRMA from '../CreateRMA';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';


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

const App = ({history}) => {

  const classes = useStyles();

  const handleGoToCreateRMA = ()=> history.push(PATH_CREATE)

  const handleNavigateToHome = ()=> history.push('/')

  const handleNavigateToSearch = ()=> history.push(PATH_SEARH)
  
  return (
    <Grid className={classes.mainContainer}>
      <Box boxShadow={3} m={1} p={1} className={classes.box}>
              <Grid className={classes.logoContainer}>
                  <img src={logo} alt="Assa abloy global solutions" />
                  <div className={classes.navigationIcons}>
                    <HomeIcon className={classes.icon} onClick={handleNavigateToHome}/>
                    <SearchIcon className={classes.icon} onClick={handleNavigateToSearch}/>
                  </div>

              </Grid>
          <Route exact path="/" render={() => <Landing  onCreateRMA={handleGoToCreateRMA}/>} />
          <Route path="/create-rma" render={() => <CreateRMA />} />

      </Box >
    </Grid >
  )
}

export default withRouter(App);
