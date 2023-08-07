import { Box, Button } from "@mui/material";
import React from "react";
import btn from "../assets/btn.png";
const Buttonn = (props) => {
  return (
    <Button
      {...props}
      sx={{
        backgroundImage: `url(${btn})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {props.children}
    </Button>
  );
};

export default Buttonn;
