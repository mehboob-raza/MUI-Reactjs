import { Box, Container, Grid, Typography } from "@mui/material";
import image7 from "../assets/image7.png";
import Button1 from "../Button/Button1";
import { RiArrowRightSLine } from "react-icons/ri";
import telegram from "../assets/telegram.png";

const cardsData = [
  {
    h: "TRADING BOTS",
    img: image7,
    p: "Our trading bots leverage market data and advanced algorithms to execute profitable trades, generating external revenue for the project.",
  },
];
const rightCards = [
  {
    p: "TRANSPARENCY",
    h: "Track all trades in real-time.",
    button: (
      <Button1 color="gray" border="none">
        Telegram Channel <RiArrowRightSLine />
      </Button1>
    ),
  },
];

const smallCards = [
  {
    p: "LONGEVITY",
    h: "Longevity secured by Efficientrevenue generation.",
  },
  {
    p: "SECURITY",
    h: "Advanced security measures to secure assets.",
  },
];
const ExternalRevenue = () => {
  return (
    <Box mb={4}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Powered by external revenue.
        </Typography>
        <Box
          mt={4}
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexDirection: { md: "row", sm: "row", xs: "column" },
          }}
        >
          <Box>
            {cardsData.map((data, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    width: { md: 400, sm: "100%", xs: "100%" },
                    height: 540,
                    background: "linear-gradient(45deg, #101010, #242424)",
                    border: "1.5px solid #3E3E3E",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    borderRadius: 2,
                    p: 2,
                  }}
                >
                  <Typography
                    sx={{
                      color: "gray",
                    }}
                  >
                    {" "}
                    {data.h}{" "}
                  </Typography>
                  <Box
                    component="img"
                    src={data.img}
                    width="60%"
                    sx={{
                      // boxShadow: "2px 4px 1px #DB230F",
                      objectFit: "cover",
                    }}
                  />
                  <Typography
                    mt={4}
                    sx={{
                      color: "#fff",
                      fontSize: "24px",
                    }}
                  >
                    {" "}
                    {data.p}{" "}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          {/* <Box> */}
          <Box display="flex" flexDirection="column" gap={1}>
            <Box
              sx={{
                width: { md: 400, sm: "100%", xs: "100%" },
                height: 270,
                background: "linear-gradient(45deg, #101010, #242424)",
                border: "1.5px solid #3E3E3E",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography sx={{ color: "gray" }}>TRANSPARENCY</Typography>
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  width: "60%",
                  mt: 2,
                }}
              >
                Track all trades in real-time.
              </Typography>
              <Box
                component="img"
                src={telegram}
                width="40%"
                sx={{
                  position: "absolute",
                  right: 0,
                  top: "20%",
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  bottom: "10%",
                }}
              >
                <Button1 color="gray" border="none">
                  Telegram Channel <RiArrowRightSLine />{" "}
                </Button1>
              </Box>
            </Box>

            <Box display="flex" gap={1}>
              <Box
                sx={{
                  width: { md: 200, sm: "50%", xs: "100%" },
                  height: 270,
                  background: "linear-gradient(45deg, #101010, #242424)",
                  border: "1.5px solid #3E3E3E",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Typography sx={{ color: "gray" }}>LONGEVITY</Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", fontWeight: "bold", mt: 2 }}
                >
                  Longevity secured by Efficient revenue generation.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { md: 200, sm: "50%", xs: "100%" },
                  height: 270,
                  background: "linear-gradient(45deg, #101010, #242424)",
                  border: "1.5px solid #3E3E3E",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderRadius: 2,
                  p: 2,
                }}
              >
                <Typography sx={{ color: "gray" }}>SECURITY</Typography>
                <Typography
                  variant="h5"
                  sx={{ color: "#fff", fontWeight: "bold", mt: 2 }}
                >
                  Advanced security measures to secure assets.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* </Box> */}
        </Box>
      </Container>
    </Box>
  );
};

export default ExternalRevenue;
