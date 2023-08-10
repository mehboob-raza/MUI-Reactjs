import { Box, Container, Typography } from "@mui/material";
import Group8699 from "../assets/Group8699.png";
import Button1 from "../Button/Button1";
import { RiArrowRightSLine } from "react-icons/ri";

const AlphaNFT = () => {
  return (
    <Box mb={4}>
      <Container maxWidth="md">
        <Box>
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              textAlign: { md: "start", sm: "center", xs: "center" },
            }}
          >
            Alpha NFTs: Limited Collection, Unlimited Potential
          </Typography>
          <Box
            mt={1}
            display="flex"
            sx={{
              flexDirection: { md: "row", sm: "column", xs: "column" },
              textAlign: { md: "start", sm: "center", xs: "center" },
            }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: { md: "20px", sm: "16px" },
                lineHeight: "60px",
              }}
            >
              Step into the elite circle of Wolf Capital with our Exclusive NFT
              Collection. Limited to just 500 pieces, each NFT unlocks unique
              benefits like copy trading, extended yield accumulation, and a
              share in our upcoming WolfBets Casino.
            </Typography>
            <Box
              component="img"
              src={Group8699}
              //   width="50%"
              sx={{
                background: "transparent",
                width: { md: "50%", sm: "100%", xs: "100%" },
              }}
            />
          </Box>

          <Box
            display="flex"
            gap={2}
            alignItems="center"
            // mt={1}
            sx={{
              justifyContent: { md: "start", sm: "center", xs: "center" },
              mt: { md: 1, sm: 3 },
            }}
          >
            <Button1 height="50px" background="#fff" color="#000" width="160px">
              Buy NFT's
            </Button1>
            <Button1 height="50px" border="none">
              Learn more
              <RiArrowRightSLine />
            </Button1>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AlphaNFT;
