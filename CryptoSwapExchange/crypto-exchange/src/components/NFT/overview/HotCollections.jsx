import { Box, Button, Container, Grid, Typography } from "@mui/material";
import h1 from "../../../assets/h1.png";
import h2 from "../../../assets/h2.png";
import h3 from "../../../assets/h3.png";
import h4 from "../../../assets/h4.png";
import h5 from "../../../assets/h5.png";
import h6 from "../../../assets/h6.png";
import hoticon from "../../../assets/hoticon.png";
import bgg from "../../../assets/bgg.png";
import { ImSortAmountDesc } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import NFTDetails from "../NFTDetails/NFTDetails";

const hotColData = [
  {
    img: h1,
    p: "Deploy Abstract",
    btn: "10 items",
  },
  {
    img: h2,
    p: "Deploy Abstract",
    btn: "10 items",
  },
  {
    img: h3,
    p: "Deploy Abstract",
    btn: "10 items",
  },
  {
    img: h4,
    p: "Deploy Abstract",
    btn: "10 items",
  },
  {
    img: h5,
    p: "Deploy Abstract",
    btn: "10 items",
  },
  {
    img: h6,
    p: "Deploy Abstract",
    btn: "10 items",
  },
];

const HotCollections = ({ index }) => {
  return (
    <Box
      mt={6}
      sx={{
        display: "flex",
        width: "100%",
        background: `url(${bgg}),
          linear-gradient(to right, #3D15A8, #A93EEB) !important`,
        pb: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" mb={4} mt={4}>
          <Box display="flex" gap={1} alignItems="center">
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {" "}
              Hot Collections{" "}
            </Typography>
            <Box component="img" src={hoticon} width={30} height={30} />
          </Box>
          <Box display="flex" alignItems="center" gap={2}>
            {index === 0 ? "" : <ImSortAmountDesc style={{ color: "#fff" }} />}

            <Button
              sx={{
                borderRadius: "130px",
                border: "2px solid white",
                color: "#000",
                padding: "12px 24px", // Adjust the padding according to your needs
                background: "transparent",
                backgroundColor: "#fff",

                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              {index === 0 ? (
                "View All"
              ) : (
                <>
                  {" "}
                  Collection <IoIosArrowDown />{" "}
                </>
              )}
            </Button>
          </Box>
        </Box>

        <Grid container spacing={2}>
          {hotColData.map((data, i) => {
            return (
              <Grid item key={i} md={4} sm={6} xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#222252",
                    borderRadius: "10px",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      // backgroundColor: "#222252",
                      alignItems: "center",
                      p: 1,
                      cursor: "pointer",
                    }}
                  >
                    <Typography sx={{ color: "#fff" }}> {data.p} </Typography>
                    <Button
                      sx={{
                        borderRadius: "130px",
                        border: "2px solid white",
                        color: "#000",
                        padding: "12px 14px", // Adjust the padding according to your needs
                        background: "transparent",
                        backgroundColor: "#fff",

                        "&:hover": {
                          color: "#fff",
                        },
                      }}
                    >
                      {data.btn}
                    </Button>
                  </Box>
                  <Box>
                    <Box component="img" src={data.img} width="100%" sx={{}} />
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default HotCollections;
