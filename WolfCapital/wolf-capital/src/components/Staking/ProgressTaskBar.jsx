import React, { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

function SingleProgressBar() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Withdraw Request", "Processing", "Processed"];
  const totalSteps = steps.length - 1;

  const handleProgressBarClick = (event) => {
    const clickPosition = event.nativeEvent.offsetX;
    const progressBarWidth = event.currentTarget.clientWidth;
    const newStep = Math.floor((clickPosition / progressBarWidth) * totalSteps);
    setCurrentStep(newStep);
  };

  const progress = (currentStep / totalSteps) * 100;

  const avatarPositions = steps.map(
    (_, index) => `${(index / totalSteps) * 100}%`
  );

  return (
    <Box>
      <Container maxWidth="md">
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              color: "#fff",
            }}
          >
            {steps.map((step, index) => (
              <Typography key={index}>{step}</Typography>
            ))}
          </Box>
          <Box position="relative" mt={3}>
            <LinearProgress
              variant="determinate"
              value={progress}
              style={{ cursor: "pointer" }}
            />
            {avatarPositions.map((position, index) => (
              <Avatar
                key={index}
                style={{
                  position: "absolute",
                  left: `calc(${position} - 12px)`, // Adjust -12px to center the avatar
                  top: "-18px", // Adjust to position the avatar
                  backgroundColor: index <= currentStep ? "#2F78F2" : "#D3D3D3",
                }}
                onClick={handleProgressBarClick}
              >
                {index + 1}
              </Avatar>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default SingleProgressBar;
