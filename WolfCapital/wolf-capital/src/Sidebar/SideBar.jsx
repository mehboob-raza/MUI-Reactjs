import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import { Link, Route, Routes } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button } from "@mui/material";
import { MdDashboard, MdToken } from "react-icons/md";
import { FaCommentsDollar } from "react-icons/fa";
import { BsFileWord, BsTrophy } from "react-icons/bs";
import PropTypes from "prop-types";
import { RiWallet2Fill } from "react-icons/ri";
// import Dashboard from "../components/Dashboard/Dashboard";
import LOGOWC from "../assets/LOGOWC.png";

const drawerWidth = 240;

const sidebarData = [
  {
    h: (
      <>
        <Button
          sx={{
            backgroundImage: "linear-gradient(to right, #079BD1 50%, #4526D1)",
            color: "white",
            fontWeight: "bold",
            borderRadius: 1, // Adjust as needed
            p: 2,
          }}
        >
          Connect Wallet
        </Button>
      </>
    ),
    logo: <RiWallet2Fill style={{ color: "#fff", fontSize: "20px" }} />,
  },
  {
    h: "Dashboard",
    logo: <MdDashboard style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp",
  },
  {
    h: "Staking",
    logo: <FaCommentsDollar style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp/staking",
  },
  {
    h: "Wolfpacks",
    logo: <BsFileWord style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp/wolfpacks",
  },
  {
    h: "Weekly Battles",
    logo: <BsTrophy style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp/battles",
  },
  {
    h: "Alpha NFT",
    logo: <MdToken style={{ color: "#fff", fontSize: "20px" }} />,
    link: "/dapp/nft",
  },
];
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function SideBar({ children }) {
  //   const theme = useTheme();
  // const { window, children } = props;

  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const selctedButton = (i) => {
    if (i) {
      setSelected(true);
    }
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        container={container}
        variant="permanent"
        open={open}
        sx={{
          ".MuiDrawer-paper": {
            background: "#191919",
            borderRight: "1px solid #242424",
          },
        }}
      >
        <Box component="img" src={LOGOWC} />
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
          }}
        >
          <IconButton
            onClick={() => handleDrawerOpen()}
            sx={{
              position: "absolute",
              right: "-10px",
              top: "80px",
            }}
          >
            <ChevronRightIcon
              style={{
                color: "#fff",
              }}
            />
          </IconButton>
        </Box>
        <List>
          {sidebarData.map(({ h, logo, link }, i) => (
            <ListItem
              key={i}
              disablePadding
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ListItemButton
                onClick={() => selctedButton(i)}
                sx={
                  {
                    //   minHeight: 48,
                    //   justifyContent: open ? "initial" : "center",
                    //   px: 1.5,
                    //   display: "flex",
                    //   alignItems: "center",
                    //   background: selected ? "blue" : "transparent",
                  }
                }
              >
                <Link
                  to={link}
                  style={{
                    textDecoration: "none",
                    justifyContent: open ? "initial" : "center",
                    px: 1.5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      color: selected ? "blue" : "transparent",
                    }}
                  >
                    <Box
                      sx={{
                        display: i === 0 && open ? "none" : "block",
                      }}
                    >
                      {logo}
                    </Box>
                  </ListItemIcon>
                  <ListItemText
                    primary={h}
                    sx={{ opacity: open ? 1 : 0, color: "#fff" }}
                  />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 2,
          background: "#191919",
          minHeight: "100vh",
          opacity: 1,
          zIndex: 0,
          position: "relative",
        }}
      >
        {children}
        {/* <Dashboard /> */}
      </Box>
    </Box>
  );
}
SideBar.propTypes = {
  window: PropTypes.func,
};
export default SideBar;
