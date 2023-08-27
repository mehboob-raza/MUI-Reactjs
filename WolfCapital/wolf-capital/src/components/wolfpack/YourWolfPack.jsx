import { Box, Button, Container, Grid, Typography } from "@mui/material";

const wolfpack = [
  {
    h: "Wolfpack Name",
    p: "DeFi Sniperz ",
  },
  {
    h: "Members",
    p: "123 ",
  },
  {
    h: "Total Staked",
    p: "$50,000 ",
  },
];
const YourWolfPack = () => {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Typography>Your WolfPack</Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {wolfpack.map((data, i) => {
              return (
                <Box key={i} mt={1}>
                  <Typography
                    sx={{
                      fontSize: "12px",
                    }}
                  >
                    {" "}
                    {data.h}{" "}
                  </Typography>
                  <Typography> {data.p} </Typography>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              background: "linear-gradient(45deg, #323232 30%, #212121 70%)",
              borderRadius: "30px",
              //   p: 1,
              mt: 2,
            }}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography ml={3}>Set a Wolfpack Name</Typography>
              <Button variant="contained" sx={{ borderRadius: "50px" }}>
                confirm
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default YourWolfPack;
