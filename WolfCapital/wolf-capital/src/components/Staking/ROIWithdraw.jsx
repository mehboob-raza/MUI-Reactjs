import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ProgressTaskBar from "./ProgressTaskBar";

const ROIWithdraw = () => {
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
          <Typography
            mb={4}
            variant="h4"
            sx={{
              color: "#fff",
            }}
          >
            {" "}
            ROI Withdrawal Request
          </Typography>

          <ProgressTaskBar />
          <Box
            mt={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              color: "#fff",
              gap: 2,
            }}
          >
            <Typography>Eligible ROI Amount</Typography>
            <Typography>$800.00</Typography>
            <Button
              variant="contained"
              sx={{
                background: "linear-gradient(90deg, #04B9FE 0%, #4E2EFF 100%)",
                color: "#fff",
                borderRadius: "30px",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #4E2EFF 0%, #04B9FE 100%)",
                },
              }}
            >
              Request Withdrawal
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ROIWithdraw;
