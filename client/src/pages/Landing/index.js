import * as React from "react";
import { makeStyles, Typography, Avatar } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { AuthContext } from "../../context/AuthContext";
import PersistentDrawerLeft from "../../components/PersistentDrawerLeft";

const useStyles = makeStyles({
  gridContainer: {
    width: "50%",
    minWidth: "20rem",
    maxWidth: "30rem",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: 6,
  },
  card: {
    backgroundColor: "white",
    borderRadius: "1rem",
    cursor: "pointer",
  },
  profile: {
    height: "12rem",
    backgroundColor: "white",
    borderRadius: "1rem",
    cursor: "pointer",
  },
});

export default function Landing() {
  const classes = useStyles();
  const authContext = React.useContext(AuthContext);

  return (
    <PersistentDrawerLeft title="RMA Manager Tool for business">
      <Grid container spacing={1} className={classes.gridContainer}>
        <Grid
          style={{ gridColumn: "1 / 3", gridRow: "1 / 3" }}
          className={classes.profile}
        >
          <Grid
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <Avatar style={{ backgroundColor: "#ff5722" }}>
              {authContext.getInitials()}
            </Avatar>
            <Typography variant="caption">Profile</Typography>
          </Grid>
        </Grid>
        <Grid
          style={{ gridColumn: "4 / 5", gridRow: "1 / 2" }}
          className={classes.card}
        >
          Logout
        </Grid>
        <Grid
          style={{ gridColumn: "3 / 4", gridRow: "1 / 2" }}
          className={classes.card}
        >
          Create
        </Grid>
        <Grid
          style={{ gridColumn: "3 / 4", gridRow: "2 / 3" }}
          className={classes.card}
        >
          Search
        </Grid>
        <Grid
          style={{ gridColumn: "4 / 5", gridRow: "2 / 3" }}
          className={classes.card}
        >
          List
        </Grid>
      </Grid>
    </PersistentDrawerLeft>
  );
}
