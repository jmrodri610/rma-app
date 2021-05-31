import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Form from './Form';
import Context from '../../context/contextProvider';
import Preview from './Preview';
import { randomBytes } from 'crypto';


const useStyles = makeStyles({
  mainContainer: {
    height: '80%',
    display: 'flex'
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '25rem',
  },
  formTitle: {
    marginBottom: '1rem',
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
  const [rmaID] = useState(`RMA-${randomBytes(2).toString('hex')}`);
  const [cif, setCif] = useState();
  const [name, setName] = useState();

  return (
    <Grid className={classes.mainContainer}>
      <Context.Provider value={{
        rmaID,
        name,
        setName,
        cif,
        setCif}}>
        <Grid item xs={5} className={classes.formContainer}>
          <Typography className={classes.formTitle}>Crea un nuevo RMA</Typography>
          <Form />
        </Grid>
        <Divider orientation='vertical' className={classes.divider} />
        <Grid item xs={7}>
          <Preview />
        </Grid>
      </Context.Provider>
    </Grid>
  )
}

export default CreateRMA