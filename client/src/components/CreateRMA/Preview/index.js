import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Context from '../../../context/contextProvider';

const useStyles = makeStyles({
info: {
  display: 'flex',
  marginLeft: '1rem'

}
})


const Preview = () => {

  const classes = useStyles();
  const { name, cif , rmaID} = useContext(Context)

  return (
    <Grid>
      <div className={classes.info}>
        <p>Número de RMA: </p>
        <p>&nbsp;{rmaID}</p>
      </div>
      <div className={classes.info}>
        <p>CIF:</p>
        <p>&nbsp;{cif}</p>
      </div>
      <div className={classes.info}> 
        <p>Razon Social: </p>
        <p>&nbsp;{name}</p>
      </div>
    </Grid>
  )
}

export default Preview