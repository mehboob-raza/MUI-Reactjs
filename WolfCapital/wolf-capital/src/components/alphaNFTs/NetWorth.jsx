import { Box, Container, Typography } from "@mui/material";

const NetWorth = () => {
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
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            color="#fff"
          >
            <Box sx={{ borderRight: "3px solid gray", paddingRight: "200px" }}>
              <Typography sx={{ fontSize: "30px" }}>$5,000</Typography>
              <Typography> Networth </Typography>
            </Box>

            <Box>
              <Typography sx={{ fontSize: "30px" }}>GOAL</Typography>
              <Typography> $1,130,464 </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NetWorth;
