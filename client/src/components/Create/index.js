import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { randomBytes } from "crypto";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import { Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomLabeledInput from "../CustomLabeledInput";
import StepLine from "../StepLine";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    minWidth: "30rem",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 16,
  },
  actionButtonsContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 16,
  },
});

const CreateRMA = ({ onCloseModal }) => {
  const classes = useStyles();
  const [rmaID] = useState(`RMA-${randomBytes(2).toString("hex")}`);
  const [cif, setCif] = useState();
  const [name, setName] = useState();
  const [step, setStep] = useState(1);

  return (
    <Dialog open>
      <Grid className={classes.mainContainer}>
        <Typography variant="h6" className={classes.title}>
          Create a new rma
        </Typography>
        <Divider style={{ marginBottom: 16 }} />
        <StepLine step={step} total={2} />
        {step === 1 && (
          <>
            <CustomLabeledInput label="Hotel" />
            <CustomLabeledInput label="Customer" />
            <CustomLabeledInput label="Adress" />
            <CustomLabeledInput label="CP" />
            <CustomLabeledInput label="Phone number" />
            <CustomLabeledInput label="Email" />
          </>
        )}
        {step === 2 && (
          <>
            <CustomLabeledInput label="ID" disabled/>
            <CustomLabeledInput label="Issue date" type="date"/>
            <CustomLabeledInput label="Under warranty" type="checkbox" />
            <CustomLabeledInput label="Invoice number" />
            <CustomLabeledInput label="Purchase date" type="date" />
            <CustomLabeledInput label="Description" type="textarea" rows={4} />
          </>
        )}
        <Divider />
        <Grid className={classes.actionButtonsContainer}>
          <Button
            variant="outlined"
            onClick={() => onCloseModal()}
            style={{ marginRight: 8 }}
          >
            <Typography variant="subtitle">Cancel</Typography>
          </Button>
          {step === 2 && <Button variant="contained" color="warning" style={{ marginRight: 8 }}>
            <Typography variant="subtitle" onClick={()=> setStep(1)}>Back </Typography>
          </Button>}
          <Button variant="contained">
            <Typography variant="subtitle" onClick={()=> setStep(2)}>Next </Typography>
          </Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CreateRMA;
