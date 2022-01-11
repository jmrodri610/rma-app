import React, { useState, useEffect, useContext } from "react";
import PersistentDrawerLeft from "../../components/PersistentDrawerLeft";
import Element from "./Element";
import { makeStyles } from "@material-ui/core";
import {
  CircularProgress,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import Paper from "@mui/material/Paper";
import { AuthContext } from "../../context/AuthContext";
import rmaApiService from "../../api/rmaApiService";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { Button } from "@mui/material";

const useStyles = makeStyles({
  customerInfoInputs: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    marginTop: 8,
  },
  customerInfo: {
    padding: "10px",
    border: "dotted 1px #00a7d1",
    borderRadius: "8px",
    backgroundColor: "#b5babf57",
  },
  editIcon: {
    color: "#00a7d1",
    marginLeft: "20px",
    cursor: "pointer",
  },
  saveButton: {
    width: '5rem',
    height: '2rem',
    cursor: 'pointer'
  },
  saveText: {
    fontWeight: 'bold',
  }
});

const Item = ({ id }) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [editInput, setEditInput] = useState(false);
  const [rmaId, setRmaId] = useState();
  const [personalInfo, setPersonalInfo] = useState({});
  const [rmaInfo, setRmaInfo] = useState({});
  const [editingElement, setEditingElement] = useState();
  const [editedInput, setEditedInput] = useState({});

  const classes = useStyles();

  useEffect(() => {
    retrieveRMA();
  }, []);

  const retrieveRMA = async () => {
    const token = authContext.getToken();
    try {
      const {
        data: { rmaId, personalInfo, rmaInfo },
      } = await rmaApiService.get(`/retrieve-rma/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRmaId(rmaId);
      setEditedInput(personalInfo);
      setPersonalInfo(personalInfo);
      setRmaInfo(rmaInfo);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSetEdit = (edit, index) => {
    setEditInput(edit);
    setEditingElement(index);
  };

  const handleSaveInfo = (edit, index, editedValue) => {
    setEditedInput({ ...editedInput, [index]: editedValue });
    setEditInput(edit);
    setEditingElement(index);
  };

  const isEdited = JSON.stringify(personalInfo) !== JSON.stringify(editedInput)

  return (
    <PersistentDrawerLeft title="RMA Manager Tool for business">
      {!isLoading && (
        <Paper
          sx={{
            width: "100%",
            padding: "1rem",
            overflow: "hidden",
            borderRadius: "1rem",
            marginTop: 10,
          }}
        >
          <Grid style={{ display: "flex", width: '30%', alignItems: 'center', justifyContent: 'space-around', marginBottom: '0.5rem' }}>
            <h1>{rmaId}</h1>
            <Button disabled={!isEdited} className={classes.saveButton} variant="contained" color="success">
              <Typography variant="body2" className={classes.saveText}>Save</Typography>
            </Button>
          </Grid>
          <Grid container justifyContent="space-around">
            <Grid item xs={3} className={classes.customerInfo}>
              <Typography variant="h6">Contact Information</Typography>
              {Object.entries(personalInfo).map(([key, value]) => {
                return (
                  <Element
                    editInput={editInput}
                    value={value}
                    label={key}
                    handleSetEdit={handleSetEdit}
                    handleSaveInfo={handleSaveInfo}
                    editingElement={editingElement}
                    editable
                  />
                );
              })}
            </Grid>
            <Grid item xs={8} className={classes.customerInfo}></Grid>
          </Grid>
        </Paper>
      )}
      {isLoading && <CircularProgress />}
    </PersistentDrawerLeft>
  );
};

export default Item;
