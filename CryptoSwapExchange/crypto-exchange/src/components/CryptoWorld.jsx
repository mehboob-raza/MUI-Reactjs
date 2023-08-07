import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Button1 from "./Button1";
import coin_stack from "../assets/coin-stack.png";
import block from "../assets/block.png";
import trading from "../assets/trading.png";
import calendar from "../assets/calendar.png";
import Group7 from "../assets/Group7.png";

const cardsData = [
  {
    id: 1,
    p: "Total supply",
    h6: "284,800,395",
    img: coin_stack,
  },
  {
    id: 2,
    p: "Burned to date",
    h6: "384,800,395",
    img: calendar,
  },
  {
    id: 3,
    p: "Market cap",
    h6: "$1.9 billion",
    img: trading,
  },
  {
    id: 4,
    p: "Current emissions",
    h6: "14.25/block",
    img: block,
  },
];
const CryptoWorld = () => {
  return (
    <Box mt={10} mb={6}>
      <Container>
        <Grid container spacing={8}>
          <Grid item md={6} sm={12} xs={12}>
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  textAlign: { xs: "center" },
                }}
              >
                cRYPTO makes our world go round.
              </Typography>
              <Typography
                mt={1}
                sx={{
                  color: "gray",
                  fontSize: { md: "14px", sm: "16px", xs: "18px" },
                  textAlign: { xs: "center" },
                }}
              >
                Crypto token is at the heart of the Crypto Swap ecosystem. Buy
                it, win it, farm it, spend it, stake it... heck, you can even
                vote with it!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  mb: 2,
                  mt: 4,
                  justifyContent: { xs: "center" },
                }}
              >
                <Button1>Buy Crypto</Button1>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 2,
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {cardsData.map((data) => {
                  return (
                    // <Box
                    //   key={data.id}
                    //   sx={{
                    //     display: "flex",
                    //   }}
                    // >
                    <Card
                      key={data.id}
                      sx={{
                        display: "flex",
                        position: "relative",
                        backgroundColor: "#222252",
                        width: { md: "45%", sm: "100%", xs: "100%" },
                        height: "139px",
                        mt: 2,
                      }}
                    >
                      <img
                        src={data.img}
                        alt="img"
                        width="40px"
                        height="30px"
                        style={{
                          display: "flex",
                          position: "absolute",
                          right: "6px",
                          top: "6px",
                        }}
                      />
                      <CardContent
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          mt: 2,
                        }}
                      >
                        <Typography
                          mt={1}
                          sx={{ fontSize: "18px", color: "gray" }}
                        >
                          {data.p}
                        </Typography>
                        <Typography variant="h6" sx={{ color: "#fff" }}>
                          {data.h6}
                        </Typography>
                      </CardContent>
                    </Card>
                    // </Box>
                  );
                })}
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box component="img" src={Group7} width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CryptoWorld;
