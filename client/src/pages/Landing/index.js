import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import logo from '../../../src/assets/logo/logo.png';
import LandingBox from '../../components/LandingBox';
import CreateRMA from '../../components/CreateRMA';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const useStyles = makeStyles({
    mainContainer: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b5babf57'
    },
    logoContainer: {
        margin: '1.25rem'
    },
    box: {
        height: '90vh',
        width: '85vw',
        borderRadius: '0.5rem',
        backgroundColor: '#fafafa',
    },
})

const Landing = () => {

    const [view, setView] = useState('landingBox')

    const classes = useStyles();

    const handleCreateRMA = () => setView('createRMA')

    const handleSearchRMA = () => setView('searchRMA')

    return <Grid className={classes.mainContainer}>
        <Box boxShadow={3} m={1} p={1} className={classes.box}>
            <Grid className={classes.logoContainer}>
                <img src={logo} alt="Assa abloy global solutions" />
            </Grid>
            {view === 'landingBox' && <LandingBox onCreateRMA={handleCreateRMA} onSearchRMA={handleSearchRMA} />}
            {view === 'createRMA' && <CreateRMA />}
        </Box>
    </Grid>

}

export default Landing