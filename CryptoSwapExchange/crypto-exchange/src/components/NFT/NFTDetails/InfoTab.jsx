import { Box, Container, Typography } from "@mui/material";
import Button1 from "../../Button1";
import na1 from "../../../assets/na1.png";

const InfoTab = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "#222252",
            borderRadius: "10px",
          }}
        >
          {/* {{ img, h, p, dp, pr }.map((item, i) => { */}
          {/* return ( */}

          <Box
            display="flex"
            p={4}
            mt={6}
            gap={4}
            sx={{
              color: "#fff",
              flexDirection: { md: "row", sm: "row", xs: "column" },
            }}
          >
            <Box component="img" src={na1} />
            <Box>
              <Typography> h </Typography>
              <Typography sx={{ color: "gray" }}> owned by B14484 </Typography>
              <Typography>
                {" "}
                What even is an NFT? NFT stands for non-fungible token, which
                basically means that its one-of-kind digital asset that belongs
                to you and you only. The most popular NFTs right now include
                artwork and music also include videos.{" "}
              </Typography>
              <Typography> Price </Typography>
              <Typography> pr </Typography>
              <Box display="flex" alignItems="center" textAlign="center">
                <Button1 width="100px">Buy</Button1>
              </Box>
            </Box>
          </Box>
          {/* ); */}
          {/* })} */}
        </Box>
      </Container>
    </Box>
  );
};

export default InfoTab;
