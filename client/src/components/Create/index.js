import React, { useState, useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { randomBytes } from "crypto";
import Dialog from "@material-ui/core/Dialog";
import { Divider, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomLabeledInput from "../CustomLabeledInput";
import StepLine from "../StepLine";
import rmaApiService from "../../api/rmaApiService";
import { AuthContext } from "../../context/AuthContext";

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
  const authContext = useContext(AuthContext);
  const [technitian] = useState(authContext.getTechnitian());
  const [rmaId] = useState(`RMA-${randomBytes(2).toString("hex")}`);
  const [hotel, setHotel] = useState("");
  const [customer, setCustomer] = useState("");
  const [adress, setAdress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [issueDate, setIssueDate] = useState();
  const [isUnderWarranty, setIsUnderwarranty] = useState(false);
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [purchaseDate, setPurchaseDate] = useState();
  const [description, setDescription] = useState("");
  const [step, setStep] = useState(1);

  const enableStep2 = () => {
    return (
      !!hotel &&
      !!customer &&
      !!adress &&
      !!postalCode &&
      !!phoneNumber &&
      !!email
    );
  };

  const disableCreateRMA = () => {
    return (
      !!issueDate &&
      isUnderWarranty &&
      !!invoiceNumber &&
      !!purchaseDate &&
      !!description
    );
  };

  const createNewRMA = async () => {

    const rma = {
      technitian,
      hotel,
      customer,
      adress,
      postalCode,
      phoneNumber,
      email,
      issueDate,
      isUnderWarranty,
      invoiceNumber,
      purchaseDate,
      description,
      rmaId,
      created: new Date()
    };

    try {
      const token = authContext.getToken();
      await rmaApiService.post("/create", rma, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      onCloseModal()

    } catch (error) {
      
    }
  };

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
            <CustomLabeledInput
              label="Technitian"
              value={technitian}
              disabled
            />
            <CustomLabeledInput
              label="Hotel"
              value={hotel}
              setValue={setHotel}
            />
            <CustomLabeledInput
              label="Customer"
              value={customer}
              setValue={setCustomer}
            />
            <CustomLabeledInput
              label="Adress"
              value={adress}
              setValue={setAdress}
            />
            <CustomLabeledInput
              label="CP"
              value={postalCode}
              setValue={setPostalCode}
            />
            <CustomLabeledInput
              label="Phone number"
              value={phoneNumber}
              setValue={setPhoneNumber}
            />
            <CustomLabeledInput
              label="Email"
              value={email}
              setValue={setEmail}
            />
          </>
        )}
        {step === 2 && (
          <>
            <CustomLabeledInput label="ID" disabled value={rmaId} />
            <CustomLabeledInput
              label="Issue date"
              type="date"
              value={issueDate}
              setValue={setIssueDate}
            />
            <CustomLabeledInput
              label="Under warranty"
              type="checkbox"
              value={isUnderWarranty}
              setValue={setIsUnderwarranty}
            />
            <CustomLabeledInput
              label="Invoice number"
              value={invoiceNumber}
              setValue={setInvoiceNumber}
            />
            <CustomLabeledInput
              label="Purchase date"
              type="date"
              value={purchaseDate}
              setValue={setPurchaseDate}
            />
            <CustomLabeledInput
              label="Description"
              multiline
              rows={4}
              value={description}
              setValue={setDescription}
            />
          </>
        )}
        <Divider />
        <Grid className={classes.actionButtonsContainer}>
          <Button
            variant="outlined"
            onClick={() => onCloseModal()}
            style={{ marginRight: 8 }}
          >
            <Typography variant="subtitle2">Cancel</Typography>
          </Button>
          {step === 2 && (
            <Button
              variant="contained"
              color="warning"
              style={{ marginRight: 8 }}
            >
              <Typography variant="subtitle2" onClick={() => setStep(1)}>
                Back{" "}
              </Typography>
            </Button>
          )}
          {step === 1 && (
            <Button variant="contained" disabled={!enableStep2()}>
              <Typography variant="subtitle2" onClick={() => setStep(2)}>
                Next{" "}
              </Typography>
            </Button>
          )}
          {step === 2 && (
            <Button variant="contained" disabled={!disableCreateRMA()}>
              <Typography variant="subtitle2" onClick={() => createNewRMA()}>
                Create{" "}
              </Typography>
            </Button>
          )}
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default CreateRMA;
