import { Box, Button, Container, Typography } from "@mui/material";
import frame76 from "../../assets/Frame76.png";
import { BsInfoLg } from "react-icons/bs";

const legacyData = [
  {
    h: "Battle Week",
    h1: "Wolfpack",
    h2: "Defi Sniperz",
    h3: "Won Prize",
    p: "$5,000",
    p1: "$100",
    btn: (
      <Button
        variant="contained"
        sx={{ background: "#665BDB", color: "#ffff" }}
      >
        Claim
      </Button>
    ),
  },
  {
    h: "Battle Week",
    h1: "Wolfpack",
    h2: "Defi Sniperz",
    h3: "Won Prize",
    p: "$5,000",
  },
];
const BattlesLegacy = () => {
  return (
    <Box mt={4}>
      <Container>
        <Box
          sx={{
            background: "linear-gradient(45deg, #121212 30%, #242424 70%)",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ color: "#fff" }}>
              Battle Legacy
            </Typography>
            <BsInfoLg
              style={{
                background: "transparent",
                border: "1px solid #6C6C6C",
                color: "#6C6C6C",
                fontSize: "20px",
                borderRadius: "4px",
              }}
            />
          </Box>
          <Box
            display="flex"
            gap={2}
            sx={{
              flexDirection: { md: "row", sm: "row", xs: "column" },
            }}
          >
            {legacyData.map((data, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    background: `url(${frame76})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    width: "35%",
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      color: "#fff",
                      p: 2,
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Box>
                      <Typography> {data.h} </Typography>
                      <Typography sx={{ fontSize: "12px", mt: 1 }}>
                        {" "}
                        {data.h1}{" "}
                      </Typography>
                      <Typography> {data.h2} </Typography>
                      <Typography sx={{ fontSize: "12px", mt: 1 }}>
                        {" "}
                        {data.h3}{" "}
                      </Typography>
                      <Typography> {data.p} </Typography>
                    </Box>
                    <Box>
                      <Typography> {data.p1} </Typography>
                      {data.btn}
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BattlesLegacy;
