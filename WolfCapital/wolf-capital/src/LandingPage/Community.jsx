import { Box, Container, Grid, Typography } from "@mui/material";
import Scremingmicrophone from "../assets/Scremingmicrophone.png";
import { FiArrowUpRight } from "react-icons/fi";

const rightData = [
  {
    h: "Telegram Group",
    p: "Join our Telegram community and stay connected with the latest updates and discussions on Wolf Capital.",
    logo: <FiArrowUpRight />,
  },
  {
    h: "Discord",
    p: "Join our Discord community and be a part of our dynamic and vibrant community, where you can engage in discussions and connect with other like-minded individuals.",
    logo: <FiArrowUpRight />,
  },
  {
    h: "Twitter",
    p: "Follow our Pack, Stay Up to Date. Join the Wolf Capital community on Twitter for real-time updates, insights, and engaging discussions. ",
    logo: <FiArrowUpRight />,
  },
];
const Community = () => {
  return (
    <Box
      // mt={6}
      mb={6}
      sx={{
        mt: { md: "20%", sm: "20%", xs: "10%" },
      }}
    >
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          gap={2}
          sx={{
            flexDirection: { md: "row", sm: "column", xs: "column" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              position: "relative",
            }}
          >
            <Box
              component="img"
              src={Scremingmicrophone}
              // width="50%"
              sx={{
                // ml: -20,
                position: "absolute",
                left: { lg: "-14%", md: "-10%", sm: "-12%" },
                top: { lg: "-80%", md: "-80%", sm: "-70%" },
                width: { md: "60%", sm: "50%", xs: "0%" },
                display: { sm: "flex", xs: "none" },
              }}
            />
            <Box
              sx={{
                mt: { lg: 5, md: 3, xs: 4, sm: 12 },
                width: { md: "50%", sm: "100%", xs: "100%" },
                // ml: { md: "18%", sm: "30%" },
                ml: { sm: 18, xs: 0 },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  color: "#fff",
                }}
              >
                Join The Wolfpack Community
              </Typography>
              <Typography sx={{ color: "gray", mt: 2 }}>
                Join our Wolfpack, where alpha minds unite to shape a better
                future for decentralized finance. Experience the power of mutual
                and individual growth as we drive innovation and leave our mark
                in the world of DeFi.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              // mt: { md: 36, xs: 2 },
              display: "flex",
              flexDirection: "column",
              justifyContent: { md: "start", sm: "start", xs: "center" },
              alignItems: "center",
            }}
          >
            {rightData.map((data, i) => {
              return (
                <Box key={i}>
                  <Typography mt={2} sx={{ color: "#fff" }}>
                    {data.h} {data.logo}
                  </Typography>
                  <Typography mt={1} sx={{ color: "gray" }}>
                    {" "}
                    {data.p}{" "}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Community;
