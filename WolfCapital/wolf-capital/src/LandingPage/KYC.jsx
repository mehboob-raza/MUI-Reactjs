import { Box, Container, Grid, Typography } from "@mui/material";
import AnonyDoxx from "../assets/AnonyDoxx.png";
import Button1 from "../Button/Button1";
import { RiArrowRightSLine } from "react-icons/ri";

const KYC = () => {
  return (
    <Box mt={8}>
      <Container maxWidth="md">
        <Grid
          container
          spacing={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid item md={6} sm={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box component="img" src={AnonyDoxx} width="100%" />
            </Box>
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  textAlign: { md: "start", sm: "start", xs: "center" },
                }}
              >
                KYC
              </Typography>
              <Typography
                sx={{
                  mt: 4,
                  fontSize: "20px",
                  color: "#fff",
                }}
              >
                Investor confidence is our top priority at Wolf Capital. In our
                commitment to uphold the highest standards of transparency and
                trust, our team has completed a rigorous identity verification
                process with Anonydoxx.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <Button1 color="#fff" border="none">
                  KYC <RiArrowRightSLine />
                </Button1>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default KYC;
