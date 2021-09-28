import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../authConfig";

const useStyles = makeStyles({

    rmaBox: {
        backgroundColor: '#b0c4de',
        margin: '0 auto',
        marginTop: '2.5rem',
        borderRadius: '0.5rem',
        padding: '2.5rem',
        width: '20rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    button: {
        width: '10rem',
        margin: '0.25rem',
    }
})


const LoginPage = ()=> {
    const classes = useStyles();
    const { instance } = useMsal();

    const handleLogin = () => {
            instance.loginPopup(loginRequest).catch(e => {
                console.log(e)
            });
        } 

    return (
        <Box boxShadow={3} m={1} p={1} className={classes.rmaBox}>
                <Typography variant="h6">RMA Generator</Typography>
                <Button variant="contained" color="primary" className={classes.button} onClick={handleLogin}>Sign in</Button>
            </Box>
    )
}

export default LoginPage