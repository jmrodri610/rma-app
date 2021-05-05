import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles({
    mainContainer: {
        height: '80%',
        display: 'flex',
        border: 'solid 1px #4cb4d3'
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '30rem',
    },
    formTitle: {
        marginBottom: '1rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll'
    },
    formInput: {
        margin: '0.5rem',
        '& label.Mui-focused': {
            color: '#4cb4d3',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#4cb4d3',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'red',
            },
            '&:hover fieldset': {
              borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#4cb4d3',
            },
        },
        '& input:valid + fieldset': {
          borderColor: '#4cb4d3',
          borderWidth: 2,
        },
        '& input:invalid + fieldset': {
          borderColor: 'red',
          borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
          borderLeftWidth: 6,
          padding: '4px !important', // override inline-style
        },
      },
    divider: {
        width: '2px',
        height: '90%',
        marginLeft: '1rem',
        backgroundColor: '#4cb4d3',
        alignSelf: 'center',
    }
})


const CreateRMA = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.mainContainer}>
            <Grid item xs={5} className={classes.formContainer}>
                <Typography className={classes.formTitle}>Crea un nuevo RMA</Typography>
                <form className={classes.form}>
                        <TextField
                            variant="outlined"
                            focused
                            label="Número de RMA"
                            className={classes.formInput}
                            />
                    <div>
                        <TextField
                            variant="outlined"
                            focused
                            label="Razón Social"
                            className={classes.formInput}
                            />
                        <TextField variant="outlined" focused label="CIF" className={classes.formInput} />
                    </div>
                    <div>
                        <TextField variant="outlined" focused label="Nombre Hotel" className={classes.formInput} />
                        <TextField variant="outlined" focused label="Técnico" className={classes.formInput} />
                    </div>
                    <TextField variant="outlined" focused label="Material a enviar" multiline rows={2} className={classes.formInput} />
                    <TextField variant="outlined" focused label="Problema o avería" multiline rows={5} className={classes.formInput} />
                </form>
            </Grid>
            <Divider orientation='vertical' className={classes.divider} />
            <Grid item xs={7} />
        </Grid>
    )
}

export default CreateRMA