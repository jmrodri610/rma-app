import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Context from '../../../context/contextProvider';

const useStyles = makeStyles({
    form: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'scroll',
        '&::-webkit-scrollbar': {
            width: '2px',
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#4cb4d3',
        },
        scrollbarColor: `#4cb4d3 #4cb4d3`,
        scrollbarWidth: 'none',
    },
    formInput: {
        margin: '0.5rem',
        caretColor: '#4cb4d3',
        '& label.Mui-focused': {
            color: '#4cb4d3',
        },
        '& label.Mui-disabled': {
            color: 'green',
        },
        '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: 'green',
            borderWidth: 2,
            borderLeftWidth: 6,
            padding: '4px !important',
        },
        '& .MuiInputBase-input.Mui-disabled': {
            color: 'green',

        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#4cb4d3',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
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
})

const Form = () => {

    const classes = useStyles();
    const { setName, setCif, rmaID } = useContext(Context)

    return (
        <form className={classes.form}>
            <div>
                <TextField
                    disabled
                    id='RMA-ID'
                    variant="outlined"
                    label="Número de RMA"
                    value={rmaID}
                    className={classes.formInput}
                />
                <TextField onChange={(e) => setCif(e.target.value)} variant="outlined" focused label="CIF" className={classes.formInput} />
            </div>
            <TextField
                onChange={(e) => setName(e.target.value)}
                variant="outlined"
                focused
                label="Razón Social"
                className={classes.formInput}
            />
            <div>
                <TextField variant="outlined" focused label="Nombre Hotel" className={classes.formInput} />
                <TextField variant="outlined" focused label="Técnico" className={classes.formInput} />
            </div>
            <TextField variant="outlined" focused label="Material a enviar" multiline rows={2} className={classes.formInput} />
            <TextField variant="outlined" focused label="Problema o avería" multiline rows={5} className={classes.formInput} />
        </form>
    )
}

export default Form