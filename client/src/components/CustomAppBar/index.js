import React from "react";
import { withRouter } from "react-router";
import AppBar from "@mui/material/AppBar";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { AuthContext } from "../../context/AuthContext";
import { Grid } from "@mui/material";
import { PATH_CREATE, PATH_LIST, PATH_LOGIN } from "../../constants";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";

const CustomAppBar = (props) => {
  const { title } = props;
  const authContext = React.useContext(AuthContext);

  const logout = () => {
    authContext.logout();
    props.history.push(PATH_LOGIN);
  };

  const token = authContext.getToken();

  return (
    <AppBar
      style={{ backgroundColor: "#00a7d1" }}
      position="fixed"
      sx={{
        width: { sm: "100%" },
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" noWrap component="div">
          {title}
        </Typography>
        <Grid style={{ display: "flex" }}>
          {token && (
            <>
              {" "}
              <IconButton
                aria-label="Create"
                edge="start"
                onClick={() => props.history.push(PATH_CREATE)}
                style={{
                  color: "whitesmoke",
                }}
              >
                <AddCircleOutlineIcon />
              </IconButton>
              <IconButton
                aria-label="List"
                edge="start"
                onClick={() => props.history.push(PATH_LIST)}
                style={{
                  color: "whitesmoke",
                }}
              >
                <ListAltIcon />
              </IconButton>
              <IconButton
                aria-label="Logout"
                edge="start"
                onClick={() => logout()}
                style={{
                  color: "whitesmoke",
                }}
              >
                <MeetingRoomIcon />
              </IconButton>
            </>
          )}
          <Avatar
            style={{
              backgroundColor: "whitesmoke",
              cursor: "pointer",
              color: "#FF5722",
            }}
          >
            {authContext.getInitials()}
          </Avatar>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(CustomAppBar);
