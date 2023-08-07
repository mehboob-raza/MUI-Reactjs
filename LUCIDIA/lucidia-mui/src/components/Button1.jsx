import { Box, Button } from "@mui/material";
import React from "react";
import btn1 from "../assets/btn1.png";
const Button1 = (props) => {
  return (
    <Button
      {...props}
      sx={{
        backgroundImage: `url(${btn1})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      {props.children}
    </Button>
  );
};

export default Button1;
