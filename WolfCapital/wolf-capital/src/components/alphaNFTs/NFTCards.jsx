import { Box, Container, Grid, Slider, Typography } from "@mui/material";
import React from "react";
import ALPHANFT from "../../assets/ALPHANFT.png";
import BETANFT from "../../assets/BETANFT.png";
import OMEGANFT from "../../assets/OMEGANFT.png";
import { withStyles, makeStyles } from "@mui/styles";
import Button1 from "../../Button/Button1";
import Group313 from "../../assets/Group313.png";

const GradientSlider = withStyles({
  root: {
    color: "transparent", // Hide the default track color
    height: 10,
    margin: "15px 0",
  },
  rail: {
    borderRadius: 5,
    backgroundImage: "linear-gradient(to right, #FC8BD1, #0B76FD)", // Adjust the gradient colors
    height: 10,
  },
  track: {
    display: "none", // Hide the default track
  },
  thumb: {
    display: "none", // Hide the thumb
  },
})(Slider);

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    width: "50%",
    margin: "0px auto",
  },
}));

const nftCards = [
  {
    img: ALPHANFT,
    p: "$5,000",
    alpha: {
      logo: Group313,
      h: "ALPHA NFT Features",
      op: "Copy Trading",
      op1: "Extended Yield Accumulation",
      op2: "Reduced Off-Ramp Fees",
      op3: "Alpha Debit Card",
      op4: "WolfBets Casino Shares",
    },
  },
  {
    img: BETANFT,
    p: "$2,500",
    alpha: {
      logo: Group313,
      h: "BETA NFT Features",
      op: "Copy Trading",
      op1: "Extended Yield Accumulation",
      op2: "Reduced Off-Ramp Fees",
      op3: "Alpha Debit Card",
    },
  },
  {
    img: OMEGANFT,
    p: "$900",
    alpha: {
      h: "OMEGA NFT Features",
      logo: Group313,
      op: "Copy Trading",
      op1: "Extended Yield Accumulation",
    },
  },
];
const NFTCards = () => {
  const classes = useStyles();
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Box
          // container
          // spacing={4}
          sx={{
            mt: 6,
            display: "flex",
            flexDirection: { md: "row", sm: "row", xs: "column" },
            gap: 1,
            width: "100%",
          }}
        >
          {nftCards.map((data, i) => {
            return (
              <Box
                key={i}
                sx={{
                  background:
                    "linear-gradient(45deg, #1B1B1B 30%, #282828 100%)",
                  borderRadius: "10px",
                  width: { md: "33%", sm: "33%", xs: "100%" },
                  mt: 2,
                }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  alignItems="center"
                  // widht="30%"
                >
                  <Box component="img" src={data.img} width="50%" mt={1} />
                  <Typography
                    variant="h3"
                    sx={{ color: "#fff", textAlign: "center" }}
                  >
                    {data.p}
                  </Typography>
                  <div className={classes.sliderContainer}>
                    <GradientSlider />
                  </div>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button1 background="#393838" width="100px" height="50px">
                      MINT
                    </Button1>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ color: "#fff", fontWeight: "bold", mt: 2 }}
                  >
                    {" "}
                    {data.alpha.h}{" "}
                  </Typography>
                  <Box color="#fff" p={2}>
                    {data.alpha.Group313}
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      {data.alpha.op}{" "}
                    </Typography>
                    {data.alpha.Group313}
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      {data.alpha.op1}{" "}
                    </Typography>
                    {data.alpha.Group313}
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      {data.alpha.op2}{" "}
                    </Typography>
                    {data.alpha.Group313}
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      {data.alpha.op3}{" "}
                    </Typography>
                    {data.alpha.Group313}
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {" "}
                      {data.alpha.op4}{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default NFTCards;
