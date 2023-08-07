import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Buttonn from "./Buttonn";
import Button1 from "./Button1";
import { BiLogoDiscordAlt, BiLogoTwitter } from "react-icons/bi";
import { PiTelegramLogo } from "react-icons/pi";
import audited1 from "../assets/audited1.png";
import audited2 from "../assets/audited2.png";
import homeRight from "../assets/homeRight.png";

const HomePage = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid
            item
            md={6}
            sm={12}
            xs={12}
            sx={{
              mt: { md: 16, sm: 10, xs: 6 },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { md: "row", sm: "column", xs: "column" },
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  width: { sm: "100%" },
                  fontFamily: "Bold",
                  color: "#fff",
                  textAlign: { md: "start", sm: "center", xs: "center" },
                  fontSize: { md: "44px", xs: "30px", sm: "38px" },
                }}
              >
                AI-Driven GameFi  Governed by You
              </Typography>
              <Box
                component="img"
                src={homeRight}
                width="100%"
                sx={{
                  display: { md: "none", sm: "flex", xs: "flex" },
                }}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: "Light",
                color: "#fff",
                lineHeight: "26px",
                mt: { md: 1 },
                fontSize: { md: "24px", sm: "20px", xs: "16px" },
                letterSpacing: "1px",
              }}
            >
              We are not looking to reinvent the wheel of Gamification and game
              plots - just to give you the power and ownership over what you
              have already been doing for years.
            </Typography>
            <Typography
              mt={2}
              sx={{
                fontFamily: "Light",
                color: "#fff",
                lineHeight: "26px",
                fontSize: { md: "24px", sm: "20px", xs: "16px" },
                letterSpacing: "1px",
              }}
            >
              Our goal is to put fun back into GameFi and make the Metaverse
              experience accessible to any user with a mobile device from any
              corner of the world.
            </Typography>

            <Box
              display="flex"
              sx={{
                flexDirection: { md: "row", sm: "column", xs: "column" },
                gap: { md: 4, sm: 0, xs: 0 },
              }}
            >
              <Box
                mt={3}
                className="styleFrame"
                height="64px"
                sx={{
                  width: { md: "157px", sm: "100%", xs: "100%" },
                  "&:hover": {
                    background: "Cyan",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  className="styleFrameInner"
                  // width="152px"
                  height="58px"
                  sx={{
                    width: { md: "152px", sm: "99%", xs: "98%" },
                    "&:hover": {
                      background: "Cyan",
                    },
                  }}
                >
                  <Box
                    // px={2}
                    // py={0.5}
                    height="60px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      "&:hover": {
                        color: "#000",
                      },
                    }}
                  >
                    Buy $LUCID
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
                  "&:hover": {
                    background: "Cyan",
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  className="styleFrameInner"
                  sx={{
                    width: { md: "251px", sm: "99%", xs: "98%" },
                    "&:hover": {
                      background: "Cyan",
                    },
                  }}
                  height="58px"
                >
                  <Box
                    // px={2}
                    // py={0.5}
                    height="60px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                      "&:hover": {
                        color: "#000",
                      },
                    }}
                  >
                    Token Allocation
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              mt={8}
              sx={{
                display: "flex",
                flexDirection: { md: "row", xs: "column" },
              }}
              gap={6}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "0 auto",
                  justifyContent: {
                    md: "flex-start",
                    sm: "center",
                    xs: "center",
                  },
                }}
              >
                <Typography sx={{ fontFamily: "Light", color: "#fff" }}>
                  Join Community of 100+ Lucidians
                </Typography>
                <Box
                  display="flex"
                  sx={{
                    color: "#584F61",
                    fontSize: "20px",
                    gap: 2,
                    mt: 2,
                    justifyContent: "center",
                  }}
                >
                  <PiTelegramLogo />
                  <BiLogoDiscordAlt />
                  <BiLogoTwitter />
                </Box>
              </Box>
              <Box
                sx={{
                  borderRight: "1px solid #707070",
                  display: { md: "block", sm: "none", xs: "none" },
                }}
              ></Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: { xs: "center" },
                  margin: { xs: "0 auto" },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "SemiBold",
                    color: "#fff",
                    textAlign: { xs: "center" },
                  }}
                >
                  Audited by:
                </Typography>
                <Box display="flex" alignItems="center" mt={2} gap={1}>
                  <Box component="img" src={audited1} width={100} />
                  <Box component="img" src={audited2} width={100} />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              component="img"
              src={homeRight}
              width="100%"
              sx={{
                display: { md: "flex", sm: "none", xs: "none" },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
