import * as React from "react";
import { withRouter } from "react-router";
import AppBar from "@mui/material/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SearchIcon from "@mui/icons-material/Search";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import MenuIcon from "@mui/material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {
  PATH_CREATE,
  PATH_HOME,
  PATH_LIST,
  PATH_LOGIN,
  PATH_SEARCH,
  PATH_PROFILE,
  LOGO_BLUE,
} from "../../constants";

import { AuthContext } from "../../context/AuthContext";

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const { children, title } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const authContext = React.useContext(AuthContext);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getIcon = {
    0: <HomeOutlinedIcon />,
    1: <ListAltIcon />,
    2: <SearchIcon />,
    3: <NoteAddIcon />,
    4: <PersonOutlineIcon />,
    5: <MeetingRoomIcon />,
  };

  const handleMenuAction = (index) => {
    const paths = {
      0: PATH_HOME,
      1: PATH_LIST,
      2: PATH_SEARCH,
      3: PATH_CREATE,
      4: PATH_PROFILE,
    };

    if (index === 5) {
      authContext.logout();
      props.history.push(PATH_LOGIN);
    } else props.history.push(paths[index]);
  };

  const drawer = (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <img
          src={LOGO_BLUE}
          alt="Assa abloy global solutions"
          style={{ height: "-webkit-fill-available" }}
        />
      </div>
      <List>
        {["Home", "List", "Search", "Create", "Profile", "Logout"].map(
          (text, index) => (
            <ListItem button key={text} onClick={() => handleMenuAction(index)}>
              <ListItemIcon>{getIcon[index]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        style={{ backgroundColor: "#00a7d1" }}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {title}
          </Typography>
          <Avatar
            style={{ backgroundColor: "#FF5722", cursor: "pointer" }}
            onClick={() => props.history.push(PATH_PROFILE)}
          >
            {authContext.getInitials()}
          </Avatar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}

export default withRouter(ResponsiveDrawer);
