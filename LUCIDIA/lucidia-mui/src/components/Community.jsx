import { Box, Container, Typography } from "@mui/material";
import {
  PiTelegramLogo,
  PiDiscordLogo,
  PiTwitterLogo,
  PiYoutubeLogo,
  PiTiktokLogo,
  PiInstagramLogo,
} from "react-icons/pi";
import { AiOutlineReddit } from "react-icons/ai";
import SubtractBar from "./SubtractBar";
const Community = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: "Bold",
              color: "#fff",
              fontSize: { md: "36px", sm: "34px", xs: "30px" },
              wordSpacing: "6px",
              letterSpacing: "1.4px",
            }}
          >
            Join community of 100k+ Lucidians
          </Typography>
          <Typography
            sx={{
              fontFamily: "Light",
              color: "#B3B4BC",
              fontSize: { md: "14px", xs: "18px" },
              letterSpacing: "1px",
              mt: 1,
            }}
          >
            Fore more details about our progress and workflow be sure to follow
          </Typography>
          <Box
            mt={4}
            display="flex"
            gap={4}
            sx={{ color: "#fff", fontSize: "20px", flexWrap: { xs: "wrap" } }}
          >
            <PiTelegramLogo />
            <PiDiscordLogo />
            <PiTwitterLogo />
            <PiYoutubeLogo />
            <AiOutlineReddit />
            <PiInstagramLogo />
            <PiTiktokLogo />
          </Box>
        </Box>
      </Container>
      <SubtractBar />
    </Box>
  );
};

export default Community;
