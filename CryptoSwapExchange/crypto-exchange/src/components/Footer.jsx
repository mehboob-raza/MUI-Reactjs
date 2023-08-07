import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import Group from "../assets/Group.png";
import frame4 from "../assets/Frame4.png";
import imagetop from "../assets/imagetop.png";
import imagebtm from "../assets/imagebtm.png";
import imagelines from "../assets/imagelines.png";
import { BiNavigation } from "react-icons/bi";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram, BiLogoDiscordAlt } from "react-icons/bi";
import { GrReddit } from "react-icons/gr";
import { BsMedium } from "react-icons/bs";

const cardsData = [
  {
    h: "About",
    p1: "Contact",
    p2: "Brand",
    p3: "Blog",
    p4: "Community",
  },
  {
    h: "Help",
    p1: "Customer Support",
    p2: "Troubleshooting",
    p3: "Guides",
  },
  {
    h: "Developers",
    p1: "Github",
    p2: "Documentation",
    p3: "Bug Bounty",
    p4: "Audits",
    p5: "Careers",
  },
];

const Footer = () => {
  return (
    <Box
      sx={{
        // display: "flex",
        position: "relative",
        background: `url(${frame4})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box mt={16}>
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

        <Container maxWidth="lg">
          <Grid container spacing={8} p={8}>
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  //   justifyContent: "center",
                  gap: 1,
                }}
              >
                <Box
                  component="img"
                  width={40}
                  src={Group}
                  sx={{ background: "#fff", p: 1, borderRadius: "50%" }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  cryptoswap
                </Typography>
              </Box>
              <Typography mt={2} sx={{ color: "#fff", fontSize: "14px" }}>
                Fusce interdum ipsum egestas urna amet fringilla, et placerat ex
                venenatis. Aliquet luctus pharetra. Proin sed fringilla lectusar
                sit amet tellus in mollis.
              </Typography>
            </Grid>

            <Grid
              item
              md={5}
              sm={6}
              xs={12}
              sx={{
                display: "flex",
                gap: 4,
                flexWrap: { md: "nowrap", sm: "wrap", xs: "wrap" },
              }}
            >
              {cardsData.map((data, i) => {
                return (
                  <Box key={i}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#fff",
                        fontSize: "18px",
                        textTransform: "uppercase",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      {data.h}{" "}
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                      {" "}
                      {data.p1}{" "}
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                      {" "}
                      {data.p2}{" "}
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                      {" "}
                      {data.p3}{" "}
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                      {" "}
                      {data.p4}{" "}
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                      {" "}
                      {data.p5}{" "}
                    </Typography>
                  </Box>
                );
              })}
            </Grid>

            <Grid item md={3} sm={12} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: { md: "column", sm: "row", xs: "column" },
                  gap: 2,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    color: "#fff",
                    textAlign: "right",
                  }}
                >
                  subscribe us
                </Typography>
                <Box
                  mt={4}
                  sx={{
                    display: "flex",
                    //   alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      display: "inline",
                      border: "1px solid #fff",
                      p: 1.4,
                    }}
                  >
                    <TextField
                      sx={{
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:hover:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottom: "none",
                        },
                        "& .MuiInputBase-input": {
                          color: "#fff",
                        },
                      }}
                      // id="standard-search"
                      placeholder="Search field"
                      type="search"
                      variant="standard"
                    />
                  </Box>
                  <Box
                    sx={{
                      background: "#fff",
                      pt: 1,
                    }}
                  >
                    <IconButton>
                      <BiNavigation />
                    </IconButton>
                  </Box>
                </Box>
                <Box display="flex" gap={2} sx={{ color: "#fff" }} mt={4}>
                  <AiOutlineInstagram />
                  <AiOutlineTwitter />
                  <BiLogoTelegram />
                  <BiLogoDiscordAlt />
                  <GrReddit />
                  <BsMedium />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          component="img"
          src={imagebtm}
          sx={{
            width: { md: "3%", sm: "8%", xs: "10%" },
            display: "flex",
            position: "absolute",
            right: 0,
            bottom: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
