import { Box, Container, Grid, Typography } from "@mui/material";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const cardsData = [
  {
    id: 1,
    h3: "44 million trades",
    p: "made in the last 30 days",
    img: image1,
  },
  {
    id: 2,
    h3: "3.1 million users",
    p: "made in the last 30 days",
    img: image2,
  },
  {
    id: 3,
    h3: "$12 billion staked",
    p: "made in the last 30 days",
    img: image3,
  },
];
const CryptoSwap = () => {
  return (
    <Box mb={2}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item md={6} sm={12} xs={12}>
            <Box
              display="flex"
              sx={{
                color: "#fff",
                flexDirection: { md: "row", sm: "row", xs: "column" },
                justifyContent: "space-around",
                alignItems: "center",
                gap: { xs: 4 },
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#222252",
                  minHeight: "178px",
                  borderRadius: "10px",
                  p: 2,
                }}
              >
                <Box component="img" src={image1} />
                <Typography
                  sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  44 million trades{" "}
                </Typography>
                <Typography> made in the last 30 days </Typography>
              </Box>

              <Box display="flex" flexDirection="column" gap={4}>
                <Box
                  sx={{
                    backgroundColor: "#222252",
                    minHeight: "178px",
                    p: 2,
                    borderRadius: "10px",
                  }}
                >
                  <Box component="img" src={image2} />
                  <Typography
                    sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                  >
                    {" "}
                    3.1 million users{" "}
                  </Typography>
                  <Typography> made in the last 30 days </Typography>
                </Box>

                <Box
                  sx={{
                    backgroundColor: "#222252",
                    p: 2,
                    borderRadius: "10px",
                    minHeight: "178px",
                  }}
                >
                  <Box component="img" src={image3} />
                  <Typography
                    sx={{ textTransform: "uppercase", fontWeight: "bold" }}
                  >
                    $12 billion staked{" "}
                  </Typography>
                  <Typography> made in the last 30 days </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                mt: { md: 0, sm: 4, xs: 6 },
              }}
            >
              <Box component="img" src={image4} />
              <Typography
                mt={4}
                variant="h5"
                sx={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Crypto swap
              </Typography>
              <Typography
                varaint="body1"
                sx={{
                  color: "#fff",
                }}
              >
                Used by millions.Trusted with billions.
              </Typography>
              <Typography
                mt={2}
                sx={{
                  fontSize: { md: "10px", sm: "14px", xs: "14px" },
                  color: "#fff",
                  width: { md: "50%", sm: "100%", xs: "100%" },
                  textAlign: { md: "start", sm: "center", xs: "center" },
                }}
              >
                Crypto Swap has the most users of any decentralized platform,
                ever. And those users are now entrusting the platform with over
                $12 billion in funds.
              </Typography>
              <Typography mt={2} variant="body1" sx={{ color: "#fff" }}>
                Will you join them?
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CryptoSwap;
