import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { FaBars } from "react-icons/fa";
import { Menu, MenuItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Button1 from "./components/Button1";

export default function SwipeableTemporaryDrawer() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [state, setState] = React.useState({
    left: false,
  });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}
        <Box display="flex" flexDirection="column" p={2} gap={2}>
          <Typography
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            sx={{ color: "#fff" }}
          >
            Trade :
          </Typography>

          <Link
            to="swap"
            style={{
              color: "#fff",
              textDecoration: "none",
            }}
          >
            <Button1 sx={{ color: "#fff" }} onClick={handleClose}>
              Swap
            </Button1>
          </Link>
          <Link
            sx={{ color: "#fff" }}
            to="limit"
            style={{ color: "#000", textDecoration: "none" }}
          >
            <Button1 onClick={handleClose}>Limit</Button1>
          </Link>
          <Link
            to="add-liquidity"
            style={{ color: "#000", textDecoration: "none" }}
          >
            <Button1 onClick={handleClose}>Liquidity</Button1>
          </Link>
          <Link style={{ color: "#000", textDecoration: "none" }}>
            <Button1 onClick={handleClose}>perpetual</Button1>
          </Link>
        </Box>
        <Box display="flex" flexDirection="column" p={2}>
          <Typography mt={3}>Earn : </Typography>
          <Link to="earn" style={{ textDecoration: "none" }}>
            <Button1 mt={1} sx={{ fontSize: "14px" }}>
              Earn
            </Button1>
          </Link>
          <Typography mt={3}>NFT :</Typography>
          <Link to="nft-main" style={{ textDecoration: "none" }}>
            <Button1 mt={1} sx={{ fontSize: "14px" }}>
              NFT
            </Button1>
          </Link>
        </Box>
      </List>
      {/* <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <Box
      sx={{
        display: { md: "none", sm: "flex", xs: "flex" },
      }}
    >
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <FaBars
            style={{
              color: "#fff",
              cursor: "pointer",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            {anchor}
          </FaBars>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            sx={{
              ".MuiDrawer-paper": {
                background: "linear-gradient(to right, #3D15A8, #A93EEB)  ",
                // width: "100%",
              },
            }}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </Box>
  );
}
