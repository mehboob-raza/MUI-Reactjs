import { Box, Button, Container, Grid, Typography } from "@mui/material";
import G1 from "../../../assets/G1.png";
import G4 from "../../../assets/G4.png";
import G2 from "../../../assets/G2.png";
import G3 from "../../../assets/G3.png";
import gicon from "../../../assets/gicon.png";
import Button1 from "../../Button1";
import NFTDetails from "../NFTDetails/NFTDetails";

const newColData = [
  {
    img: G1,
    left: "LilBulls",
    btn: "10 items",
  },
  {
    img: G4,
    left: "Liquid Monsters",
    btn: "6 items",
  },
  {
    img: G2,
    left: "WolfiLeague",
    btn: "25 items",
  },
  {
    img: G3,
    left: "Degen Ape Club",
    btn: "6 items",
  },
];

const NewCollections = () => {
  return (
    <Box mt={6}>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" mb={4}>
          <Box display="flex" gap={1} alignItems="center">
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {" "}
              Newest Collections{" "}
            </Typography>
            <Box component="img" src={gicon} width={30} height={30} />
          </Box>
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
            View All
          </Button>
        </Box>

        <Grid container spacing={2}>
          {newColData.map((data, i) => {
            return (
              <Grid item key={i} md={3} sm={6} xs={12}>
                <Box
                  sx={{
                    backgroundColor: "#222252",
                    borderRadius: "0px 0px 10px 10px",
                  }}
                >
                  <Box component="img" src={data.img} width="100%" />
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      // backgroundColor: "#222252",
                      alignItems: "center",
                      p: 1,
                    }}
                  >
                    <Typography sx={{ color: "#fff" }}>
                      {" "}
                      {data.left}{" "}
                    </Typography>
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
                      {" "}
                      {data.btn}{" "}
                    </Button>
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

export default NewCollections;
