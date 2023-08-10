import { Box, Container, Grid, Typography } from "@mui/material";
import Group377 from "../../assets/Group377.png";
import Button1 from "../../Button/Button1";

const AlphaaNFTs = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
            borderRadius: "10px",
            p: 2,
            mt: 6,
          }}
        >
          <Grid container>
            <Grid item md={7} sm={12} xs={12}>
              <Box color="#fff" mt={4}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    textAlign: { md: "start", sm: "center", xs: "center" },
                  }}
                >
                  Alpha NFTs: Limited Collection, Unlimited Potential
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    mt: 2,
                    mb: 4,
                    textAlign: { md: "start", sm: "center", xs: "center" },
                  }}
                >
                  Step into the elite circle of Wolf Capital with our Exclusive
                  NFT Collection. Limited to just 500 pieces, each NFT unlocks
                  unique benefits like copy trading, and a share in our upcoming
                  WolfBets Casino.
                </Typography>
                <Box
                  display="flex"
                  gap={2}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button1
                    background="linear-gradient(45deg, #1B1B1B 30%, #282828 70%)"
                    width="160px"
                  >
                    Buy NFT
                  </Button1>
                  <Button1
                    background="#202020"
                    border="1px solid gray"
                    width="160px"
                  >
                    Learn More
                  </Button1>
                </Box>
              </Box>
            </Grid>

            <Grid item md={5} sm={12} xs={12}>
              <Box component="img" src={Group377} width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AlphaaNFTs;
