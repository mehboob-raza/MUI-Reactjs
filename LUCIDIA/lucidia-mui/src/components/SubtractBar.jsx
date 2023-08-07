import React from "react";
import subtract from "../assets/Subtract.png";
import { Box } from "@mui/material";

const SubtractBar = () => {
  return (
    <div>
      <Box
        component="img"
        src={subtract}
        alt="line"
        width="100%"
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
        }}
      />
    </div>
  );
};

export default SubtractBar;
