import React from 'react';
import { makeStyles } from "@material-ui/core";
import { Grid, TextField, Typography } from '@material-ui/core';
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const useStyles = makeStyles({
    customerInfoInputs: {
      display: "flex",
      width: "100%",
      alignItems: "center",
      marginTop: 8,
    },
    editIcon: {
      color: "gray",
      marginLeft: "20px",
      cursor: "pointer",
      '&:hover': {
          color: "#00a7d1"
      }
    },
  });


function Element ({editInput, value, label, handleSetEdit, handleSaveInfo, editingElement, editable}) {
    const classes = useStyles();

    const [editedValue, setEditedValue] = React.useState();

    return editInput && editingElement === label ? (
        <Grid className={classes.customerInfoInputs}>
          <TextField
            variant="outlined"
            label={label}
            focused
            size="small"
            onChange={(event) => setEditedValue(event.target.value)}
          />
          <SaveAltIcon
            className={classes.editIcon}
            onClick={() => handleSaveInfo(false, label, editedValue)}
          />
        </Grid>
      ) : (
        <Grid className={classes.customerInfoInputs}>
          <Typography variant="subtitle1">{label}: </Typography>
          &nbsp;
          <Typography variant="subtitle1">
            {editedValue || value}
          </Typography>
          {editable && <EditIcon
            className={classes.editIcon}
            onClick={() => handleSetEdit(true, label)}
          />}
          {editedValue && editedValue !== value && (
            <RestartAltIcon
              className={classes.editIcon}
              onClick={() => setEditedValue(null)}
            />
          )}
        </Grid>
      )
}

export default Element;