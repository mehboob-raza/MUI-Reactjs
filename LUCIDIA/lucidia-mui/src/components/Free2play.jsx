import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import SubtractBar from "./SubtractBar";

const imgsData = [
  {
    id: 1,
    img: img1,
    h1: "zombie outbreak",
  },
  {
    id: 2,
    img: img2,
    h1: "lucid craft",
    text: "Pulse-pounding action, earn $LUCID Tokens crush undead hordes, ultimate survival.",
  },
  {
    id: 3,
    img: img3,
    h1: "cyber city",
  },
  {
    id: 4,
    img: img4,
    h1: "lucidia fps",
  },
  {
    id: 5,
    img: img5,
    h1: "embryo lab",
  },

  {
    id: 6,
    img: img6,
    h1: "eco city",
  },
  {
    id: 7,
    img: img7,
    h1: "tekcidia",
  },
  {
    id: 8,
    img: img8,
    h1: "nft racing",
  },
];
const Free2play = () => {
  return (
    <Box>
      <SubtractBar />
      <Container maxWidth="xl">
        <Typography
          mt={4}
          variant="h3"
          sx={{
            background: "linear-gradient(90deg, white, skyblue)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: { xs: "26px", sm: "42px" },
            fontFamily: "SemiBold",
          }}
        >
          Free2Play Open Worlds
        </Typography>
        <Grid container mt={4} mb={4}>
          {/* <Box display="flex" justifyContent="space-around" gap={6} width="100%"> */}
          {imgsData.map((data, i) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                md={3}
                key={i}
                sx={{
                  display: "flex",
                  position: "relative",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    backgroundImage: `url(${data.img})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "100%",
                    height: "400px",
                    // flexWrap: "wrap",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      position: "absolute",
                      bottom: "10px",
                      p: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "SemiBold",
                        color:
                          i === 1
                            ? "#000"
                            : i === 6 || i === 7
                            ? "#727272"
                            : "#fff",
                        display: "flex",
                        textTransform: "uppercase",
                      }}
                    >
                      {" "}
                      {data.h1}{" "}
                    </Typography>
                    <Typography> {data.text} </Typography>
                  </Box>
                </Box>
              </Grid>
            );
          })}
          {/* </Box> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Free2play;
