import { Box, Container, Grid, Typography } from "@mui/material";
import Group1 from "../assets/Group1.png";
import Group2 from "../assets/Group2.png";
import Group3 from "../assets/Group3.png";
import Group4 from "../assets/Group4.png";
import g1 from "../assets/g1.png";
import g2 from "../assets/g2.png";
import g3 from "../assets/g3.png";
import g4 from "../assets/g4.png";
import Banner from "./Banner";
import ImgMarquee from "./ImgMarquee";

const cardsData = [
  {
    bg: Group1,
    logo: g1,
    h2: "PLay2Earn",
    p: "Earn $LUCID by participating in Lucidia games and achieving high scores",
  },
  {
    bg: Group2,
    logo: g2,
    h2: "Learn2Earn",
    p: "Earn $LUCID by completing short courses offered by top universities and corporations in Lucidia",
  },
  {
    bg: Group3,
    logo: g3,
    h2: "Train2Earn",
    p: "Earn $LUCID by contributing to the development of AI within the Lucidia Metaverse",
  },
  {
    bg: Group4,
    logo: g4,
    h2: "Fit2Earn",
    p: "Earn $LUCID by tracking calories burned through workout and competing in the leaderboard",
  },
];
const LUCIDTokens = () => {
  return (
    <Box mb={6}>
      <Container maxWidth="xl">
        <Typography
          sx={{
            textAlign: "center",
            background: "linear-gradient(90deg, white, skyblue)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontFamily: "SemiBold",
            fontSize: { md: "52px", sm: "36px", xs: "30px" },
            letterSpacing: "1.4px",
            mb: 3,
          }}
        >
          Earn $LUCID Tokens
        </Typography>
        {/* <Container maxWidth="md"> */}
        <Grid container spacing={3}>
          {cardsData.map((data, i) => {
            return (
              <Grid item md={6} sm={12} xs={12} key={i}>
                <Box
                  sx={{
                    background: `url(${data.bg})`,
                    backgroundSize: "100% 100%",
                    backgroundRepeat: "no-repeat",
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "250px",
                    p: 2,
                  }}
                >
                  <Box
                    component="img"
                    src={data.logo}
                    sx={{
                      mt: 4,
                      width: { md: "10%", sm: "14%", xs: "20%" },
                    }}
                  />
                  <Typography
                    sx={{
                      fontFamily: "SemiBold",
                      color: "#fff",
                      mt: i === 3 ? 1 : 4,
                      fontSize: { md: "16px", xs: "20px" },
                      letterSpacing: "2px",
                    }}
                  >
                    {data.h2}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Light",
                      color: "#B4B6BF",
                      mt: 1,
                      fontSize: { md: "18px", xs: "18px" },
                      letterSpacing: "1px",
                    }}
                  >
                    {" "}
                    {data.p}{" "}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        {/* </Container> */}
      </Container>
      <Box
        sx={{
          mt: 8,
          display: "flex",
          backgroundColor: "#0ED4FF",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          gap: 4,
        }}
      >
        <ImgMarquee style={{ color: "#000", overflow: "hidden" }} />
      </Box>
    </Box>
  );
};

export default LUCIDTokens;
