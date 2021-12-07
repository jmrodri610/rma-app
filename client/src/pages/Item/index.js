import React, { useState, useEffect, useContext } from "react";
import PersistentDrawerLeft from "../../components/PersistentDrawerLeft";
import { makeStyles } from '@material-ui/core'
import { CircularProgress, Grid, Typography, TextField } from "@material-ui/core";
import Paper from "@mui/material/Paper";
import { AuthContext } from "../../context/AuthContext";
import rmaApiService from "../../api/rmaApiService";

const useStyles = makeStyles({
    title: {}
})

const Item = ({ id }) => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [rma, setRMA] = useState({});

  const classes = useStyles();

  useEffect(() => {
    retrieveRMA();
  }, []);

  const retrieveRMA = async () => {
    const token = authContext.getToken();
    try {
      const { data } = await rmaApiService.get(`/retrieve-rma/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setRMA(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <PersistentDrawerLeft title="RMA Manager Tool for business">
      {!isLoading && (
        <Paper
          sx={{
            width: "100%",
            padding: "1rem",
            overflow: "hidden",
            borderRadius: "1rem",
            marginTop: 10
          }}
        >
          <h1>Details</h1>
          <Grid style={{ display: "flex", justifyContent: "space-between" }}>
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <TextField>Hotel: {rma.hotel}</TextField>
              <p>Customer name: {rma.customer}</p>
              <p>Adress: {rma.adress}</p>
              <p>Postal code: {rma.postalCode}</p>
              <p>Phone number: {rma.phoneNumber}</p>
              <p>e-mail: {rma.email}</p>
            </Grid>
            <Grid style={{ display: "flex", flexDirection: "column" }}>
              <Grid style={{ display: "flex" }}>
                <p style={{ margin: "0 0.5rem 0 0.5rem" }}>{rma.rmaId}</p>
                <p style={{ margin: "0 0.5rem 0 0.5rem" }}>
                  Opened by: {rma.technitian}
                </p>
                <p style={{ margin: "0 0.5rem 0 0.5rem" }}>
                  Issue date: {rma.created}
                </p>
              </Grid>
              <Grid>
                <Grid style={{ display: "flex" }}>
                  <p style={{ margin: "0 0.5rem 0 0.5rem" }}>Purchase info</p>
                  <p style={{ margin: "0 0.5rem 0 0.5rem" }}>
                    Purchase date: {rma.purchaseDate}
                  </p>
                  <p style={{ margin: "0 0.5rem 0 0.5rem" }}>
                    Invoice: {rma.invoiceNumber}
                  </p>
                </Grid>
                <Grid>
                    <p>{rma.description}</p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
      {isLoading && <CircularProgress />}
    </PersistentDrawerLeft>
  );
};

export default Item;
