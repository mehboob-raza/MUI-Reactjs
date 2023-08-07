import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import { GoHistory } from "react-icons/go";
import { IoIosArrowDown, IoMdSwap } from "react-icons/io";
import bnb from "../../assets/bnb.png";
import eth from "../../assets/eth.png";
import Button1 from "../../components/Button1";
import { useState } from "react";
import Trades from "./Trades";
import { TbBook } from "react-icons/tb";
import SelectToken from "./SelectToken";
import ConnectWallet from "./ConnectWallet";
import Setting from "../../Setting";

const Limit = () => {
  const [open, setOpen] = useState(false);
  const [openConnect, setOpenConnect] = useState(false);
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
  const limitData = [
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
  const limitCard = [
    {
      p: "Rate",
      dt: "0.032974",
      rgt: "0% abovemarket",
      blnc: "ETH per BNB",
      swp: <IoMdSwap />,
    },
  ];

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
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <SelectToken />
      </Dialog>
      <Dialog
        onClose={handleConnectClose}
        open={openConnect}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <ConnectWallet handleConnectClose={handleConnectClose} />
      </Dialog>
      <Dialog
        onClose={handleClose}
        open={open}
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
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item md={7} sm={12} xs={12}>
            <Trades />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <Card
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
                    Limit
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: { md: "20px", sm: "22px", xs: "22px" },
                    }}
                  >
                    Trade tokens in an instant
                  </Typography>
                </Box>
                <Box
                  sx={{
                    color: "#fff",
                    display: "flex",
                    gap: 2,
                    fontWeight: "bold",
                  }}
                >
                  <TbBook
                    style={{
                      cursor: "pointer",
                      fontSize: "20px",
                    }}
                  />
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
                {limitData.map((data, i) => {
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
                                ml: 1,
                                // p: 1,
                              }}
                            >
                              <Box component="img" src={data.logo} width={25} />
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

              <Box mt={4}>
                {limitCard.map((limit, i) => {
                  return (
                    <Box key={i}>
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        color="#fff"
                      >
                        <Typography variant="h6"> {limit.p} :</Typography>
                        <Typography sx={{ mx: { md: 8, sm: 4 } }}>
                          {" "}
                          {limit.rgt}{" "}
                        </Typography>
                      </Box>
                      <Box
                        mt={1}
                        position="relative"
                        sx={{
                          height: "84px",
                          width: { md: "100%", sm: "100%", xs: "100%" },
                          display: "flex",
                          backgroundColor: "#222252",
                          borderRadius: "10px",
                          p: 1,
                        }}
                      >
                        <Box display="flex" sx={{ color: "gray" }}>
                          <Typography
                            sx={{
                              display: "flex",
                              position: "absolute",
                              bottom: "10%",
                              left: "10%",
                            }}
                          >
                            {" "}
                            {limit.dt}{" "}
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              position: "absolute",
                              bottom: "10%",
                              right: "10%",
                              alignItems: "center",
                              gap: 2,
                              fontSize: {
                                md: "12px",
                                sm: "18px",
                                xs: "16px",
                              },
                              color: "#fff",
                            }}
                          >
                            <Typography> {limit.blnc}</Typography>
                            <Typography
                              sx={{
                                fontSize: {
                                  md: "16px",
                                  sm: "18px",
                                  xs: "16px",
                                },
                              }}
                            >
                              {limit.swp}
                            </Typography>
                          </Box>
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
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Limit;
