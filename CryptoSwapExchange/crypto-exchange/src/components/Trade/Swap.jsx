import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import { GoHistory } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import bnb from "../../assets/bnb.png";
import eth from "../../assets/eth.png";
import Button1 from "../../components/Button1";
import { useState } from "react";
import Trades from "./Trades";
import ShowWelcome from "./ShowWelcome";
import SelectToken from "./SelectToken";
import ConnectWallet from "./ConnectWallet";
import { makeStyles } from "@mui/styles";
import { AddBoxRounded } from "@mui/icons-material";
import Setting from "../../Setting";

const useStyles = makeStyles(() => ({
  dialogPaper: {
    borderRadius: 20, // Adjust the value as per your preference
  },
}));
const swapData = [
  {
    id: 1,
    p: "Swap From",
    h: "ETH",
    logo: eth,
    dt: 0.0,
    blnc: "Balance:0",
    arrDown: <IoIosArrowDown />,
  },
  {
    id: 2,
    p: "Swap To",
    h: "BNB",
    logo: bnb,
    arrDown: <IoIosArrowDown />,
    dt: 0.0,
    blnc: "Balance:0",
  },
];

const Swap = () => {
  const [open, setOpen] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
  // const classes = useStyles();
  const [openSetting, setOpenSetting] = useState(false);

  const handleCloseSetting = () => {
    setOpenSetting(false);
  };
  const handleConnectClose = () => {
    setOpenConnect(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={8}>
      <Dialog
        onClose={handleCloseSetting}
        open={openSetting}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Setting handleCloseSetting={handleCloseSetting} />
      </Dialog>
      <Dialog
        onClose={handleClose}
        open={open}
        // classes={{ paper: classes.dialogPaper }}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <SelectToken
          // handleConnectClose={handleConnectClose}
          setOpenConnect={setOpen}
          // openConnect={openConnect}
        />
      </Dialog>

      <Dialog
        onClose={handleConnectClose}
        open={openConnect}
        // classes={{ paper: classes.dialogPaper }}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <ConnectWallet handleConnectClose={handleConnectClose} />
      </Dialog>
      <ShowWelcome />
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item md={7} sm={12} xs={12}>
            <Trades />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <Box
              sx={{
                minWidth: "345px",
                background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
                p: 2,
                borderRadius: "20px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  // alignItems: "center",
                  mb: 2,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: "#fff",
                      fontSize: { md: "30px", sm: "26px", xs: "28px" },
                    }}
                  >
                    Swap
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { md: "18px", sm: "22px", xs: "22px" },
                    }}
                  >
                    Trade tokens in an instant
                  </Typography>
                </Box>
                <Box sx={{ color: "#fff", display: "flex", gap: 2 }}>
                  <GoHistory
                    style={{
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  />
                  <AiOutlineSetting
                    style={{
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                    onClick={() => setOpenSetting(true)}
                  />
                </Box>
              </Box>
              <Divider
                light
                sx={{
                  borderColor: "#fff",
                }}
              />

              <Box
                mt={6}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                {swapData.map((data, i) => {
                  return (
                    <Box key={i}>
                      <Typography variant="v6" sx={{ color: "#fff" }}>
                        {" "}
                        {data.p} :{" "}
                      </Typography>
                      <Box
                        mt={1}
                        position="relative"
                        sx={{
                          height: "134px",
                          width: { md: "100%", sm: "100%", xs: "100%" },
                          display: "flex",
                          backgroundColor: "#222252",
                          borderRadius: "10px",
                          p: 1,
                        }}
                      >
                        <Box>
                          <Button
                            id="basic-button"
                            aria-controls={open ? "basic-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                            onClick={() => setOpen(true)}
                            sx={{
                              fontSize: "14px",
                              color: "#fff",
                              backgroundColor: "#10102D",
                              border: "1px solid transparent",
                              borderRadius: "130px",
                            }}
                          >
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                // p: 1,
                                ml: 1,
                              }}
                            >
                              <Box component="img" src={data.logo} width={18} />
                              <Typography> {data.h} </Typography>
                              <IconButton sx={{ color: "#fff" }}>
                                {data.arrDown}
                              </IconButton>
                            </Box>
                          </Button>
                          {/* <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                              "aria-labelledby": "basic-button",
                            }}
                          >
                            <MenuItem>ETH</MenuItem>
                            <MenuItem>BTC</MenuItem>
                            <MenuItem>ARB</MenuItem>
                          </Menu> */}
                        </Box>
                        <Box display="flex" sx={{ color: "#fff" }}>
                          <Typography
                            sx={{
                              display: "flex",
                              position: "absolute",
                              bottom: "10%",
                              left: "10%",
                            }}
                          >
                            {" "}
                            {data.dt}{" "}
                          </Typography>
                          <Typography
                            sx={{
                              display: "flex",
                              position: "absolute",
                              bottom: "10%",
                              right: "10%",
                            }}
                          >
                            {" "}
                            {data.blnc}{" "}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box
                mt={2}
                mb={2}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button1 onClick={() => setOpenConnect(true)}>
                  Connect To Wallet
                </Button1>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Swap;
