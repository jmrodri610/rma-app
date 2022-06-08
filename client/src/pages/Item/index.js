import React, { useState, useEffect, useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { makeStyles } from "@material-ui/core";
import {
  CircularProgress,
  Grid,
  Typography,
  TextField,
} from "@material-ui/core";
import { randomBytes } from "crypto";
import DatePicker from "@mui/lab/DatePicker";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import deLocale from "date-fns/locale/de";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
import Paper from "@mui/material/Paper";
import { AuthContext } from "../../context/AuthContext";
import rmaApiService from "../../api/rmaApiService";
import Checkbox from "@mui/material/Checkbox";
import { Fade, MenuItem, Select, Button } from "@mui/material";
import { withRouter } from "react-router";
import { PATH_LIST } from "../../constants";

const useStyles = makeStyles({
  input: {
    background: "#DFECF2",
    borderRadius: "0.2rem",
    border: "solid 1px gray",
    fontSize: "1rem",
  },
  customerInfo: {
    padding: "10px",
    borderRadius: "8px",
  },
  editIcon: {
    color: "#00a7d1",
    marginLeft: "20px",
    cursor: "pointer",
  },
  saveButton: {
    width: "5rem",
    height: "2rem",
    cursor: "pointer",
  },
  saveText: {
    fontWeight: "bold",
  },
});

const Item = ({ history, id, location }) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [rmaId, setRmaId] = useState();
  const [technitian, setTechnitian] = useState();

  // Contact information
  const [customer, setCustomer] = useState();
  const [email, setEmail] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [hotel, setHotel] = useState();
  const [address, setAddress] = useState();
  const [postalCode, setPostalCode] = useState();

  // Document details
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();
  const [createdDate, setCreatedDate] = useState();
  const [isUnderWarranty, setIsUnderWarranty] = useState(false);
  const [solution, setSolution] = useState();
  const [sent, setSent] = useState();
  const [received, setReceived] = useState();
  const [process, setProcess] = useState();

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const classes = useStyles();

  const isEdit = location.pathname.split("/")[1] === "rma";

  useEffect(() => {
    retrieveRMA();
    // eslint-disable-next-line
  }, [location.pathname]);

  const retrieveRMA = async () => {
    if (isEdit) {
      const token = authContext.getToken();
      try {
        const { data } = await rmaApiService.get(`/retrieve-rma/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const {
          customer,
          hotel,
          address,
          phoneNumber,
          postalCode,
          email,
          createdDate,
          received,
          sent,
          process,
          description,
          solution,
          isUnderWarranty,
          status,
          technitian,
          rmaId,
        } = data;

        setRmaId(rmaId);
        setTechnitian(technitian);
        setCustomer(customer);
        setHotel(hotel);
        setAddress(address);
        setPhoneNumber(phoneNumber);
        setPostalCode(postalCode);
        setEmail(email);
        setReceived(received);
        setSent(sent);
        setProcess(process);
        setDescription(description);
        setSolution(solution);
        setIsUnderWarranty(isUnderWarranty);
        setStatus(status);
        setCreatedDate(createdDate);

        setTimeout(() => setIsLoading(false), 1000);
      } catch (error) {
        console.log(error);
      }
    } else {
      setRmaId(`RMA-${randomBytes(2).toString("hex")}`);
      setTechnitian(authContext.getTechnitian());
      setCustomer("");
      setHotel("");
      setAddress("");
      setPhoneNumber("");
      setPostalCode("");
      setEmail("");
      setReceived(null);
      setSent(null);
      setProcess(null);
      setDescription("");
      setSolution("");
      setIsUnderWarranty(false);
      setStatus("Pending reception");
      setCreatedDate(null);
      setTimeout(() => setIsLoading(false), 200);
    }
  };

  const getStatusUpdateDatePicker = (_status) => {
    const statusOptions = {
      Received: {
        date: "Reception date",
        value: received,
        onChange: (value) => setReceived(value),
      },
      "In process": {
        date: "Start processing date",
        value: process,
        onChange: (value) => setProcess(value),
      },
      Sent: {
        date: "Sent date",
        value: sent,
        onChange: (value) => setSent(value),
      },
      "Pending reception": {
        date: "",
        value: null,
        onChange: null,
      },
    };

    if (
      _status === "Received" ||
      _status === "In process" ||
      _status === "Sent"
    ) {
      return (
        <Fade in>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              width: "15rem",
              marginBottom: "1rem",
            }}
          >
            <Typography variant="subtitle1">
              {statusOptions[_status].date}
            </Typography>
            <LocalizationProvider
              dateAdapter={AdapterDateFns}
              locale={deLocale}
            >
              <DatePicker
                value={statusOptions[_status].value}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    className={classes.input}
                    style={{ padding: "0.5rem" }}
                  />
                )}
                onChange={(newValue) =>
                  statusOptions[_status].onChange(newValue)
                }
              />
            </LocalizationProvider>
          </Grid>
        </Fade>
      );
    }
  };

  const saveDocument = async () => {
    const rma = {
      customer,
      email,
      phoneNumber,
      hotel,
      address,
      postalCode,
      status,
      description,
      createdDate,
      isUnderWarranty,
      solution,
      sent,
      process,
      received,
      technitian,
      rmaId,
    };
    try {
      const token = authContext.getToken();
      const endpoint = isEdit ? "/update" : "/create";
      await rmaApiService.post(endpoint, rma, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      history.push(PATH_LIST);
    } catch (error) {
      console.log(error);
    }
  };

  const DocumentEditor = React.forwardRef((_, ref) => {
    return (
      <Grid ref={ref}>
        <h1 style={{ padding: "10px" }}>{rmaId}</h1>
        <Grid className={classes.customerInfo}>
          <Typography variant="h5" style={{ marginBottom: "1rem" }}>
            Contact Information
          </Typography>
          <Grid container style={{ marginBottom: "0.5rem" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20rem",
                marginRight: "1rem",
              }}
            >
              <Typography variant="subtitle1">Contact person</Typography>
              <TextField
                className={classes.input}
                value={customer}
                size="small"
                variant="outlined"
                onChange={(event) => setCustomer(event.target.value)}
              />
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "25rem",
                marginRight: "3rem",
              }}
            >
              <Typography variant="subtitle1">Email Address</Typography>
              <TextField
                className={classes.input}
                value={email}
                size="small"
                variant="outlined"
                onChange={(event) => setEmail(event.target.value)}
              />
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20rem",
              }}
            >
              <Typography variant="subtitle1">Phone number</Typography>
              <TextField
                className={classes.input}
                style={{ width: "10rem" }}
                value={phoneNumber}
                size="small"
                variant="outlined"
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </Grid>
          </Grid>
          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              width: "20rem",
              marginBottom: "0.5rem",
            }}
          >
            <Typography variant="subtitle1">Hotel</Typography>
            <TextField
              className={classes.input}
              value={hotel}
              size="small"
              variant="outlined"
              onChange={(event) => setHotel(event.target.value)}
            />
          </Grid>
          <Grid container style={{ marginBottom: "1rem" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20rem",
                marginRight: "3rem",
              }}
            >
              <Typography variant="subtitle1">Address</Typography>
              <TextField
                className={classes.input}
                value={address}
                size="small"
                variant="outlined"
                onChange={(event) => setAddress(event.target.value)}
              />
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20rem",
              }}
            >
              <Typography variant="subtitle1">Postal code</Typography>
              <TextField
                className={classes.input}
                value={postalCode}
                size="small"
                variant="outlined"
                onChange={(event) => setPostalCode(event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.customerInfo}>
          <Typography
            variant="h5"
            style={{
              marginBottom: "0.5rem",
            }}
          >
            RMA Details
          </Typography>

          <Grid container>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20rem",
                marginRight: "3rem",
              }}
            >
              <Typography variant="subtitle1">Created by</Typography>
              <TextField
                className={classes.input}
                value={technitian}
                size="small"
                variant="filled"
                disabled
              />
            </Grid>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "10rem",
                marginBottom: "1rem",
              }}
            >
              <Typography variant="subtitle1">Create date</Typography>
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                locale={deLocale}
              >
                <DatePicker
                  value={createdDate}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      className={classes.input}
                      style={{ padding: "0.5rem" }}
                    />
                  )}
                  onChange={(newValue) => setCreatedDate(newValue)}
                />
              </LocalizationProvider>
            </Grid>
            <Grid
              style={{
                display: "flex",
                alignItems: "center",
                marginLeft: "3rem",
              }}
            >
              <Typography variant="subtitle1">Has warranty</Typography>
              <Checkbox
                checked={isUnderWarranty}
                onChange={() => setIsUnderWarranty((prev) => !prev)}
              />
            </Grid>
          </Grid>

          <Grid container style={{ marginBottom: "1rem" }}>
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                width: "20rem",
                marginRight: "3rem",
              }}
            >
              <Typography variant="subtitle1">Status</Typography>
              <Select
                value={status}
                className={classes.input}
                onChange={(event) => setStatus(event.target.value)}
              >
                <MenuItem value="Pending reception">Pending reception</MenuItem>
                <MenuItem value="Received">Received</MenuItem>
                <MenuItem value="In process">In process</MenuItem>
                <MenuItem value="Sent">Sent</MenuItem>
              </Select>
            </Grid>
            {getStatusUpdateDatePicker(status)}
          </Grid>

          <Grid
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: "3rem",
            }}
          >
            <Typography variant="subtitle1">Description</Typography>
            <TextField
              className={classes.input}
              value={description}
              size="small"
              variant="filled"
              multiline
              minRows={4}
              fullWidth
              onChange={(event) => setDescription(event.target.value)}
            />
          </Grid>
          {isEdit && (
            <Grid
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "3rem",
              }}
            >
              <Typography variant="subtitle1">Solution</Typography>
              <TextField
                className={classes.input}
                value={solution}
                size="small"
                variant="filled"
                multiline
                minRows={4}
                fullWidth
                onChange={(event) => setSolution(event.target.value)}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    );
  });

  const ableToSave =
    !!customer &&
    !!email &&
    !!phoneNumber &&
    !!hotel &&
    !!address &&
    !!postalCode &&
    !!createdDate &&
    !!status &&
    !!description;

  return (
    <Grid container justifyContent="center">
      {!isLoading && (
        <Paper
          sx={{
            padding: "1rem",
            borderRadius: "0.5rem",
            marginTop: 10,
            width: "95%",
          }}
        >
          <Grid>
            <Grid
              style={{
                marginBottom: "0.5rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1>
                {isEdit ? "Edit " : "New "}
                Document
              </h1>
              <Grid>
                <Button
                  variant="contained"
                  color="warning"
                  endIcon={<SaveRoundedIcon />}
                  style={{ height: "fit-content", marginRight: "5rem" }}
                  onClick={handlePrint}
                >
                  Print
                </Button>
                <Button
                  variant="contained"
                  color="warning"
                  endIcon={<SaveRoundedIcon />}
                  style={{ height: "fit-content", marginRight: "5rem" }}
                  onClick={() => saveDocument()}
                  disabled={!ableToSave}
                >
                  Save document
                </Button>
              </Grid>
            </Grid>
            <Grid>
              <DocumentEditor ref={componentRef} />
            </Grid>
          </Grid>
        </Paper>
      )}
      {isLoading && (
        <CircularProgress
          style={{ position: "absolute", top: "50%", left: "50%" }}
        />
      )}
    </Grid>
  );
};

export default withRouter(Item);
