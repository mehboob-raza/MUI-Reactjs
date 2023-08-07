import { Box, Container, Grid, Typography } from "@mui/material";
import na1 from "../../../assets/na1.png";
import na2 from "../../../assets/na2.png";
import na3 from "../../../assets/na3.png";
import na4 from "../../../assets/na4.png";
import na5 from "../../../assets/na5.png";
import na6 from "../../../assets/na6.png";
import na7 from "../../../assets/na7.png";
import na8 from "../../../assets/na8.png";
import { Link } from "react-router-dom";

const newArrData = [
  {
    img: na1,
    h: "Monsta Party #7702",
    p: "Monsta Party",
    dp: "Asking price",
    pr: "($101.54)",
    eth: "0.245 ETH",
  },
  {
    img: na2,
    h: "Monsta Party #7702",
    p: "Monsta Party",
    dp: "Asking price",
    pr: "($101.54)",
    eth: "0.245 ETH",
  },
  {
    img: na3,
    h: "Monsta Party #7702",
    p: "Monsta Party",
    dp: "Asking price",
    pr: "($101.54)",
    eth: "0.245 ETH",
  },
  {
    img: na4,
    h: "Monsta Party #7702",
    p: "Monsta Party",
    dp: "Asking price",
    pr: "($101.54)",
    eth: "0.245 ETH",
  },
  {
    img: na5,
    h: "Monsta Party #7702",
    p: "Monsta Party",
    dp: "Asking price",
    pr: "($101.54)",
    eth: "0.245 ETH",
  },
  {
    img: na6,
    h: "Monsta Party #7702",
    p: "Monsta Party",
    dp: "Asking price",
    pr: "($101.54)",
    eth: "0.245 ETH",
  },
  {
    img: na7,
    h: "Monsta Party #7702",
    p: "Monsta Party",
    dp: "Asking price",
    pr: "($101.54)",
    eth: "0.245 ETH",
  },
  {
    img: na8,
    h: "Monsta Party #7702",
    p: "Monsta Party",
    dp: "Asking price",
    pr: "($101.54)",
    eth: "0.245 ETH",
  },
];
const NewestArrivals = () => {
  return (
    <Box mt={6}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {newArrData.map((data, i) => {
            return (
              <Grid item key={i} md={3} sm={6} xs={12}>
                <Link to="nft-details">
                  <Box
                    sx={{
                      backgroundColor: "#222252",
                      p: 2,
                      borderRadius: "10px 10px 0px 0px",
                      cursor: "pointer",
                    }}
                    // onClick={() => openNFTDetails(data)}
                  >
                    <Box component="img" src={data.img} width="100%" />
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          color: "#fff",
                          fontWeight: "bold",
                        }}
                      >
                        {data.h}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "12px",
                          color: "gray",
                        }}
                      >
                        {data.p}
                      </Typography>
                    </Box>
                  </Box>
                </Link>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
                    p: 1,
                    borderRadius: "0px 0px 10px 10px",
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ color: "#fff", fontSize: "12px" }}>
                    {" "}
                    {data.dp}{" "}
                  </Typography>
                  <Box display="flex" gap={1}>
                    <Typography sx={{ color: "gray", fontSize: "12px" }}>
                      {" "}
                      {data.pr}{" "}
                    </Typography>
                    <Typography sx={{ color: "#fff", fontSize: "12px" }}>
                      {data.eth}
                    </Typography>
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

export default NewestArrivals;
