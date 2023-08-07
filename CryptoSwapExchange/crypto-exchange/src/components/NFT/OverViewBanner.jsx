import { Box, Typography } from "@mui/material";
import bgg from "../../assets/bgg.png";
import banl from "../../assets/banl.png";
import banr from "../../assets/banr.png";
import banlt from "../../assets/banlt.png";
import banrb from "../../assets/banrb.png";

// eslint-disable-next-line react/prop-types
const OverViewBanner = ({ index }) => {
  // console.log(index, "index");
  return (
    <Box
      mt={6}
      sx={{
        background: `url(${bgg}),
          linear-gradient(to right, #3D15A8, #A93EEB) !important`,
        // display: "flex",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box component="img" src={banl} width="20%" />
        <Box
          component="img"
          src={banlt}
          width={60}
          sx={{
            display: { md: "flex", sm: "flex", xs: "none" },
            position: "absolute",
            left: "20%",
          }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}
          >
            {index === 0
              ? "NFT Market"
              : index === 1
              ? "Top Collection"
              : "NFT Activity"}
          </Typography>
          <Typography sx={{ color: "#fff", textAlign: "center" }}>
            Buy and Sell NFTs on BNB Smart Chain
          </Typography>
        </Box>
        <Box
          component="img"
          src={banrb}
          width={60}
          sx={{
            display: { md: "flex", sm: "flex", xs: "none" },
            position: "absolute",
            bottom: 0,
            right: "17%",
          }}
        />
        <Box component="img" src={banr} width="20%" />
      </Box>
    </Box>
  );
};

export default OverViewBanner;
