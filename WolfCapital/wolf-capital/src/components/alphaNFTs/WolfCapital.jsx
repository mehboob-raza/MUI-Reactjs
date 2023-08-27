import { Box, Container, Typography } from "@mui/material";
import image21 from "../../assets/image21.png";
import Button1 from "../../Button/Button1";
import { MdKeyboardArrowRight } from "react-icons/md";

const WolfCapital = () => {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: `url(${image21})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            p: 2,
            borderRadius: "10px 10px 0px 0px",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              width: { md: "80%", sm: "100%", xs: "100%" },
            }}
          >
            Wolf Capital NFT Collection: Limited Edition, Unlimited Potential
          </Typography>
          <Typography mt={2} sx={{ color: "#fff", fontSize: "16px" }}>
            This is your shot at the big leagues. Wolf Capital's NFT Collection
            - 500 pieces of pure power. Each NFT is a key, unlocking unique
            benefits like copy trading, extended yield accumulation, and shares
            in our upcoming WolfBets Casino. This isn't just an investment, it's
            a ticket to the top. The Alpha is calling. Are you ready to answer?
          </Typography>
          <Box display="flex">
            <Button1 border="none">
              READ MORE ON <span style={{ color: "#0094FF" }}> GITBOOK </span>{" "}
              <MdKeyboardArrowRight style={{ color: "#fff" }} />
            </Button1>
          </Box>
        </Box>
        <Box
          sx={{
            borderTop: "12px solid #fff",
            display: "flex",
            justifyContent: "space-around",
            color: "#fff",
            backgroundColor: "#242323",
            p: 2,
            borderRadius: "0px 0px 10px 10px",
          }}
        >
          <Typography>EXTENDED YIELD ACCUMULATION</Typography>
          <Typography>COPY TRADING </Typography>
          <Typography>CRYPTO OFF-RAMP</Typography>
          <Typography>CASINO SHARES </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default WolfCapital;
