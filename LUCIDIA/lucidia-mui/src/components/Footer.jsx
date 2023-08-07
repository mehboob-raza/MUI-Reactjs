import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import Vector from "../assets/Vector.svg";
import SubtractBar from "./SubtractBar";

const Footer = () => {
  return (
    <Box mt={6}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item md={5} sm={12} xs={12}>
            <Box display="flex" flexDirection="column">
              <Box component="img" src={Vector} width={100} />
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "Light",
                  fontSize: { md: "14px", xs: "18px" },
                  letterSpacing: "1px",
                  mt: 4,
                }}
              >
                YOUR JURISDICTION MAY NOT REGULATE CRYPTOCURRENCIES. THE VALUE
                OF CRYPTOCURRENCIES MAY RISE AND FALL. PROFITS MAY BE SUBJECT TO
                CAPITAL GAINS TAXES OR OTHER LOCAL TAXES.
              </Typography>
              <Box
                display="flex"
                gap={2}
                mt={2}
                sx={{
                  color: "#fff",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    fontSize: { md: "14px", xs: "18px" },
                    letterSpacing: "1px",
                  }}
                >
                  <AiOutlineMail />
                  hello@lucidia.io
                </Typography>

                <Typography
                  sx={{
                    display: "flex",
                    gap: 1,
                    alignItems: "center",
                    fontSize: { md: "14px", xs: "18px" },
                    letterSpacing: "1px",
                  }}
                >
                  <BsPhone />
                  347-519-5430
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={3.5} sm={12} xs={12}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography
                sx={{
                  fontFamily: "SemiBold",
                  fontSize: { md: "20px", xs: "22px" },
                  letterSpacing: "1px",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                {" "}
                General{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Light",
                  fontSize: { md: "14px", xs: "18px" },
                  letterSpacing: "1px",
                  color: "#fff",
                  textTransform: "uppercase",
                  mt: 2,
                }}
              >
                Privacy Policy
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Light",
                  fontSize: { md: "14px", xs: "18px" },
                  letterSpacing: "1px",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Terms and Conditions
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Light",
                  fontSize: { md: "14px", xs: "18px" },
                  letterSpacing: "1px",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Token sale terms and conditions
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3.5} sm={12} xs={12}>
            <Box display="flex" flexDirection="column" gap={1}>
              <Typography
                sx={{
                  fontFamily: "SemiBold",
                  // fontSize: "20px",
                  color: "#fff",

                  textTransform: "uppercase",
                  fontSize: { md: "20px", xs: "22px" },
                  letterSpacing: "3px",
                }}
              >
                {" "}
                Company{" "}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Light",
                  fontSize: { md: "14px", xs: "18px" },
                  letterSpacing: "1px",
                  color: "#fff",
                  textTransform: "uppercase",
                  mt: 2,
                }}
              >
                contact us
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Light",
                  fontSize: { md: "14px", xs: "18px" },
                  letterSpacing: "1px",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                Frequently asked questions
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Light",
                  fontSize: { md: "14px", xs: "18px" },
                  letterSpacing: "1px",
                  color: "#fff",
                  textTransform: "uppercase",
                }}
              >
                anti-money laundering policys
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <SubtractBar />

      <Box mt={6} mb={4}>
        <Container maxWidth="md">
          <Typography
            sx={{
              fontFamily: "Light",
              color: "#fff",

              fontSize: { md: "12px", xs: "18px" },
              letterSpacing: "1px",
            }}
          >
            © Lucidia 2023 | All rights reserved.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Light",
              color: "#B3B5BC",
              fontSize: { md: "12px", xs: "18px" },
              letterSpacing: "1px",
            }}
          >
            YOUR JURISDICTION MAY NOT REGULATE CRYPTOCURRENCIES. THE VALUE OF
            CRYPTOCURRENCIES MAY RISE AND FALL. PROFITS MAY BE SUBJECT TO
            CAPITAL GAINS TAXES OR OTHER LOCAL TAXES.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
