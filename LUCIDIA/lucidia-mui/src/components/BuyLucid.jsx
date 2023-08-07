import { PiArrowSquareOutFill } from "react-icons/pi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import image57 from "../assets/image57.png";
import image58 from "../assets/image58.png";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import blockimg from "../assets/blockimg.png";
import { BsDot } from "react-icons/bs";
const BuyLucid = () => {
  return (
    <Box
      mt={2}
      mb={6}
      sx={{
        position: "relative",
      }}
    >
      <Box
        component="img"
        src={image57}
        sx={{
          display: { md: "none", sm: "flex", xs: "flex" },
          position: "absolute",
          top: "-4%",
          right: "0%",
          m: 0,
          p: 0,
        }}
      />
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={5} sm={12} xs={12} p={2}>
            <Box
              sx={{
                color: "#fff",
                mt: { md: 5, sm: 10, xs: 16 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Bold",
                  fontSize: { xs: "26px", sm: "36px", md: "36px" },
                }}
              >
                How to buy $ LUCID
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Light",
                  mt: 2,
                  lineHeight: "28px",
                  mb: 2,
                  fontSize: { md: "24px", sm: "22px", xs: "16px" },
                  letterSpacing: "1px",
                }}
              >
                Have more questions? Send them to our Telegram Chat and the
                Community Managers will answer them in a matter of minutes!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                  justifyContent: { md: "start", sm: "center", xs: "center" },
                }}
              >
                <Box
                  mt={3}
                  className="styleFrame"
                  // width="257px"
                  height="64px"
                  sx={{
                    cursor: "pointer",
                    width: { md: "257px", sm: "100%", xs: "100%" },
                    background: "linear-gradient(to right, #fff, #0ED4FF)",
                  }}
                >
                  <Box
                    className="styleFrameInner"
                    //  width="251px"
                    height="58px"
                    sx={{
                      width: { md: "251px", sm: "99%", xs: "98%" },
                      background: "black",
                    }}
                  >
                    <Box
                      // px={2}
                      // py={0.5}
                      height="60px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      Token Allocation
                    </Box>
                  </Box>
                </Box>
                <Box
                  mt={3}
                  className="styleFrame"
                  // width="257px"
                  height="64px"
                  sx={{
                    cursor: "pointer",
                    width: { md: "257px", sm: "100%", xs: "100%" },
                    background: "linear-gradient(to right, #fff, #0ED4FF)",
                  }}
                >
                  <Box
                    className="styleFrameInner"
                    //  width="251px"
                    height="58px"
                    sx={{
                      width: { md: "251px", sm: "99%", xs: "98%" },
                      background: "black",
                    }}
                  >
                    <Box
                      // px={2}
                      // py={0.5}
                      height="60px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      Vedio Instructions
                    </Box>
                  </Box>
                </Box>
                <Box
                  mt={3}
                  className="styleFrame"
                  // width="257px"
                  height="64px"
                  sx={{
                    cursor: "pointer",
                    width: { md: "257px", sm: "100%", xs: "100%" },
                    background: "linear-gradient(to right, #fff, #0ED4FF)",
                  }}
                >
                  <Box
                    className="styleFrameInner"
                    //  width="251px"
                    height="58px"
                    sx={{
                      width: { md: "251px", sm: "99%", xs: "98%" },
                      background: "black",
                    }}
                  >
                    <Box
                      // px={2}
                      // py={0.5}
                      height="60px"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      Buy $LUCID
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Box
                component="img"
                src={blockimg}
                width="70%"
                mt={4}
                sx={{ display: { md: "flex", sm: "none", xs: "none" } }}
              />
            </Box>
            {/* <Box
              component="img"
              src={image57}
              sx={{ display: { md: "none", sm: "flex", xs: "flex" } }}
            /> */}
          </Grid>

          <Grid
            item
            md={7}
            sm={12}
            xs={12}
            sx={{ mt: { md: 5, sm: 16, xs: 18 }, p: 2 }}
          >
            <Card
              sx={{
                minWidth: "sm",
                borderLeft: { md: "8px solid #C0FF0E", sm: "none", xs: "none" },
                background: "#26272B",
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Bai Jamjuree",
                    fontWeight: "700",
                    color: "#C0FF0E",
                  }}
                >
                  Step #01
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    mb: 1.5,
                    color: "Cyan",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                  color="text.secondary"
                >
                  Visit <PiArrowSquareOutFill style={{ color: "#fff" }} />{" "}
                  finance.lucidia.io
                </Typography>
                <Typography
                  variant="body2"
                  mt={5}
                  sx={{
                    color: "#fff",
                    fontSize: { md: "12px", sm: "16px", xs: "18px" },
                    letterSpacing: "1.4px",
                  }}
                >
                  Click the{" "}
                  <Button
                    sx={{
                      color: "#C0FF0E",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    Connect Wallet
                  </Button>{" "}
                  button in the top right corner and log in using your preferred
                  wallet.Make sure you have a browser extension wallet like
                  MetaMask installed on your desktop or usea supported mobile
                  wallet like Trust Wallet.
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    fontFamily: "Light",
                    color: "#fff",
                    fontSize: { md: "12px", sm: "16px", xs: "18px" },
                    mt: 2,
                    gap: 1,
                    letterSpacing: "1.4px",
                    // alignItems: "center",
                  }}
                >
                  <AiOutlineInfoCircle />
                  We recommend using MetaMask on desktop for a smoother
                  experience, or Trust Wallet on mobile.
                </Typography>
              </CardContent>
              <CardActions>
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: { md: "12px", sm: "16px", xs: "18px" },
                    letterSpacing: "1.4px",
                  }}
                >
                  Click the
                  <Button
                    sx={{
                      color: "#C0FF0E",
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                  >
                    {" "}
                    BUY $LUCID{" "}
                  </Button>
                  button.
                </Typography>
              </CardActions>
            </Card>

            <Card
              sx={{
                minWidth: "sm",
                borderLeft: { md: "8px solid #C0FF0E", sm: "none", xs: "none" },
                background: "#26272B",
                mt: 4,
              }}
            >
              <CardContent sx={{ lineHeight: "2px" }}>
                <Typography
                  sx={{
                    fontFamily: "Bai Jamjuree",
                    fontWeight: "700",
                    color: "#C0FF0E",
                  }}
                >
                  Step #02
                </Typography>

                <Typography
                  sx={{
                    mt: 1.5,
                    // mb: 1.5,
                    color: "#fff",
                    fontSize: { md: "12px", sm: "16px", xs: "18px" },
                    letterSpacing: "1.4px",
                  }}
                  color="text.secondary"
                >
                  Option 1: Buy ETH or BNB with a Card
                </Typography>
                <List>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot style={{}} />
                      Go to{" "}
                      <Button
                        sx={{
                          color: "#C0FF0E",
                          textTransform: "lowercase",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        https://moonpay.com/buy
                      </Button>
                      and purchase ETH or BNB using your card. The purchased ETH
                      or BNB will be sent to your wallet. It is recommended to
                      buy a minimum of $20 worth of ETH or $5 worth of BNB to
                      cover the minimum purchase of $LUCID tokens
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot />
                      Enter the amount you wish to invest
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot />
                      Choose your bonus option - it will be available one month
                      after TGE
                    </ListItemText>
                  </ListItem>
                </List>

                <Typography
                  sx={{
                    mt: 1.5,
                    // mb: 1.5,
                    color: "#fff",
                    fontSize: { md: "12px", sm: "16px", xs: "18px" },
                    letterSpacing: "1.4px",
                  }}
                  color="text.secondary"
                >
                  Option 2: Buy $LUCID with ETH or BNB
                </Typography>
                <List>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot style={{}} />
                      Ensure you have enough ETH or BNB in your wallet (if not,
                      refer to option 1). Enter the amount of $LUCID you want to
                      purchase (minimum $15) and click "Buy with ETH" or "Buy
                      with BNB". Confirm the transaction in your wallet and
                      review the gas cost
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot />
                      Enter the amount you wish to invest
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot />
                      Choose your bonus option - it will be available one month
                      after TGE
                    </ListItemText>
                  </ListItem>
                </List>

                <Typography
                  sx={{
                    mt: 1.5,
                    // mb: 1.5,
                    color: "#fff",
                    fontSize: { md: "12px", sm: "16px", xs: "18px" },
                    letterSpacing: "1.4px",
                  }}
                  color="text.secondary"
                >
                  Option 3: Buy $LUCID with USDT
                </Typography>
                <List>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot style={{}} />
                      Make sure you have at least $20 worth of USDT in your
                      wallet.
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot />
                      Enter the amount you wish to invest
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot />
                      Choose your bonus option - it will be available one month
                      after TGE
                    </ListItemText>
                  </ListItem>

                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                      p: 0,
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontFamily: "Light",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot />
                      You will need to approve the purchase twice. The first
                      approval is for the USDT contract, and the second is for
                      the transaction amount. Complete both approval steps to
                      finalize the transaction.
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>

            <Card
              sx={{
                minWidth: "sm",
                borderLeft: { md: "8px solid #C0FF0E", sm: "none", xs: "none" },
                background: "#26272B",
                mt: 4,
              }}
            >
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: "Bai Jamjuree",
                    fontWeight: "700",
                    color: "#C0FF0E",
                  }}
                >
                  Step #03
                </Typography>

                <List>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot style={{ fontSize: "24px" }} />
                      Go to Enter your Telegram username to receive an
                      additional{" "}
                      <Button
                        sx={{
                          color: "#C0FF0E",
                          fontSize: { md: "12px", sm: "16px", xs: "18px" },
                          letterSpacing: "1.4px",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        5% bonus
                      </Button>{" "}
                      for each user you refer. A referral link will be generated
                      after this step.
                    </ListItemText>
                  </ListItem>
                  <ListItem
                    sx={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <ListItemText
                      sx={{
                        color: "#fff",
                        fontSize: { md: "12px", sm: "16px", xs: "18px" },
                        letterSpacing: "1.4px",
                      }}
                    >
                      <BsDot style={{ fontSize: "24px", p: 2 }} />
                      Copy your referral link from the bottom of the page, and
                      you're all set!
                    </ListItemText>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      {/* <Box
            sx={{
              display: "flex",
              position: "relative",
            }}
          > */}
      <Box
        component="img"
        src={image58}
        sx={{
          display: { md: "none", sm: "flex", xs: "flex" },
          position: "absolute",
          top: { sm: "26%", xs: "640px" },
          right: "0",
          width: { sm: 200, xs: 140 },
        }}
      />
      {/* </Box> */}
    </Box>
  );
};

export default BuyLucid;
