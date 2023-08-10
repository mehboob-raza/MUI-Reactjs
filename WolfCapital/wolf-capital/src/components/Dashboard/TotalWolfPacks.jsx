import { Box, Container, Grid, Typography } from "@mui/material";
import WolfPack from "../../assets/WolfPack.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button1 from "../../Button/Button1";
import Frame21 from "../../assets/Frame21.png";

const TotalWolfPacks = () => {
  return (
    <Box mt={8}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: { md: `url(${WolfPack})`, sm: "none", xs: "none" },
            backgroundRepeat: { md: "no-repeat" },
            backgroundSize: { md: "100% 100%" },
            minHeight: "216px",
            width: "100%",
            borderRadius: "30px",
            boxShadow: "0px 10px 10px 10px #000",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Grid item md={8} sm={12} xs={12}>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  background: { md: "none", sm: "#191919", xs: "#191919" },
                }}
              >
                <Box
                  component="img"
                  src={Frame21}
                  sx={{
                    width: { lg: "30%", md: "35%", sm: "50%" },
                    mt: { lg: -7, md: -5, sm: -10, xs: -14 },
                    ml: 2,
                    overflow: "hidden",
                  }}
                />
                <Box color="#fff" width="50%" mt={4}>
                  <Typography sx={{ textAlign: "center", fontWeight: "bold" }}>
                    The Wolfpacks
                  </Typography>
                  <Typography mt={2} sx={{ textAlign: "center" }}>
                    Explore the Wolfpacks and unite with other wolves to stake
                    together and compete in the weekly Wolfpack battles!
                  </Typography>
                  <Box>
                    <Button1 color="#0094FF" border="none">
                      EXPLORE WOLFPACKS{" "}
                      <MdKeyboardArrowRight style={{ color: "#0094FF" }} />{" "}
                    </Button1>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <Box
                color="#fff"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  background: { md: "none", sm: "#3A3BD0", xs: "#3A3BD0" },
                  minHeight: { md: "none", sm: "100px", xs: "100px" },
                  borderRadius: {
                    md: 0,
                    sm: "0px 0px 10px 10px",
                    xs: "0px 0px 10px 10px",
                  },
                }}
              >
                <Typography>Total Wolfpacks</Typography>
                <Typography>90</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TotalWolfPacks;
