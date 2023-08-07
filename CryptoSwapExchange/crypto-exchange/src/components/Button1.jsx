import { Box, Typography } from "@mui/material";

const Button1 = ({ children, ...props }) => {
  // console.log(props, "prop");
  return (
    <div>
      <Box
        {...props}
        sx={{
          color: "#fff",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          border: props?.border ? props?.border : "1px solid #fff",
          height: props?.height ? props?.height : "60px",

          p: 2,
          fontSize: { md: "16px", sm: "14px", xs: "12px" },
          borderRadius: "130px",
          cursor: "pointer",
          "&:hover": {
            background: "#EF682A",
            transition: "0.3s linear",
          },
        }}
      >
        {children}
      </Box>
    </div>
  );
};

export default Button1;
