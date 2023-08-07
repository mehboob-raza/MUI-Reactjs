import { Box, Typography } from "@mui/material";
import frame4 from "../assets/Frame4.png";
import frame1 from "../assets/frame1.png";
import Button1 from "./Button1";
import imagetop from "../assets/imagetop.png";
import imagelines from "../assets/imagelines.png";
import image112 from "../assets/image112.png";
import image111 from "../assets/image111.png";
import image110 from "../assets/image110.png";

const Trade = () => {
  return (
    <Box
      sx={{
        background: `url(${frame4})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          position: "relative",
          pt: 6,
          pb: 6,
        }}
      >
        <Box
          component="img"
          src={imagetop}
          sx={{
            ml: 4,
            width: { md: "3%", sm: "8%", xs: "10%" },
            display: "flex",
            position: "absolute",
            left: "2%",
            top: 0,
          }}
        />
        <Box
          component="img"
          src={image110}
          sx={{
            ml: 4,
            width: { md: "6%", sm: "8%", xs: "10%" },
            display: "flex",
            position: "absolute",
            right: 0,
            top: 0,
          }}
        />

        <Box
          component="img"
          src={imagelines}
          sx={{
            ml: 4,
            width: { md: "13%", sm: "8%", xs: 0 },
            display: "flex",
            position: "absolute",
            left: "2%",
            top: "10%",
            overflow: "hidden",
          }}
        />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            //   ml: "0 auto",
          }}
        >
          <Box component="img" src={frame1} width={200} />
          <Typography
            //   variant="h4"
            sx={{
              color: "#fff",
              textTransform: "uppercase",
              width: { md: "50%", sm: "100%", xs: "100%" },
              textAlign: "center",
              fontSize: { md: "34px", sm: "24px", xs: "20px" },
              fontWeight: "bold",
            }}
          >
            Trade anything. No registration, no hassle.
          </Typography>
          <Typography
            mt={2}
            mb={2}
            sx={{ color: "#fff", textAlign: { xs: "center" } }}
          >
            Trade any token on BNB Smart Chain in seconds, just by connecting
            your wallet.
          </Typography>
          <Button1>Trade Now</Button1>
        </Box>

        <Box
          component="img"
          src={image112}
          sx={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: { md: "10%", sm: "4%", xs: "10px" },
            width: { md: "6%", sm: "8%", xs: "10%" },
          }}
        />

        <Box
          component="img"
          src={image111}
          sx={{
            display: "flex",
            position: "absolute",
            bottom: "10%",
            right: { md: "10%", sm: "4%", xs: "10px" },
            width: { md: "6%", sm: "8%", xs: "10%" },
          }}
        />
      </Box>
    </Box>
  );
};

export default Trade;
