import { Box, Container, Typography } from "@mui/material";

const cardsData = [
  {
    h: "Portfolio Balance",
    p: "$93,258.43",
  },
  {
    h: "Total Value Locked",
    p: "$0.0",
  },
  {
    h: "Total Investments",
    p: "$3,480,000",
  },
  {
    h: "Total Users",
    p: "445",
  },
];

const TopCards = () => {
  return (
    <Box>
      <Container>
        <Box display="flex" gap={2}>
          {cardsData.map((data, i) => {
            return (
              <Box
                key={i}
                sx={{
                  width: "25%" /* Adjust the width and height as needed */,
                  height: "100px",
                  background:
                    "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
                  display: "flex",
                  borderRadius: 2,
                  flexDirection: "column",
                  p: 1,
                  justifyContent: "center",
                  flexWrap: "wrap",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "gray" }}> {data.h} </Typography>
                <Typography sx={{ color: "#fff", fontWeight: "bold" }}>
                  {" "}
                  {data.p}{" "}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default TopCards;
