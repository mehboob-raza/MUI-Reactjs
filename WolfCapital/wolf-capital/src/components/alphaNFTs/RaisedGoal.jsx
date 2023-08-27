import { Box, Container, Typography } from "@mui/material";
import React from "react";

const RaisedGoal = () => {
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
              <Typography sx={{ letterSpacing: "16px", fontSize: "30px" }}>
                RAISED
              </Typography>
              <Typography variant="h2"> $130,464 </Typography>
            </Box>

            <Box>
              <Typography sx={{ letterSpacing: "16px", fontSize: "30px" }}>
                GOAL
              </Typography>
              <Typography variant="h2"> $1,130,464 </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default RaisedGoal;
