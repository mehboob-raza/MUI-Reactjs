import { Box, Container, Typography } from "@mui/material";
import MoonarchLogo from "../assets/MoonarchLogo.png";
import image4 from "../assets/image4.png";
const Partners = () => {
  return (
    <Box width="100%">
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            color: "#fff",
            textAlign: "center",
          }}
        >
          Official Partners
        </Typography>
        <Box
          display="flex"
          // gap={6}
          mt={6}
          // mb={6}
          sx={{
            flexDirection: { md: "row", sm: "row", xs: "column" },
            justifyContent: {
              md: "space-between",
              sm: "space-between",
              xs: "center",
            },
            alignItems: "center",
            width: "100%",
            gap: { xs: 4 },
            // ml: { xs: 2 },
          }}
        >
          <Box display="flex" alignItems="center">
            <Box component="img" src={MoonarchLogo} width={100} />
            <Box>
              <Typography
                sx={{ fontWeight: "bold", color: "#fff", fontSize: "20px" }}
              >
                MOONARCH.APP
              </Typography>
              <Typography
                sx={{ fontWeight: "bold", color: "#FEC106", fontSize: "20px" }}
              >
                REIGN OVER DEFI
              </Typography>
            </Box>
          </Box>

          <Box display="flex">
            <Box component="img" src={image4} width={400} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Partners;
