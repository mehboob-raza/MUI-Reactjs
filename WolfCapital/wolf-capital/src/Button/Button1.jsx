import { Box } from "@mui/material";

const Button1 = ({ children, ...props }) => {
  return (
    <Box>
      <Box
        {...props}
        sx={{
          color: props?.color ? props?.color : "#fff",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          border: props?.border ? props?.border : "1px solid #fff",
          height: props?.height ? props?.height : "60px",
          width: props?.width ? props?.width : "auto",
          p: 1,
          fontSize: { md: "16px", sm: "14px", xs: "12px" },
          borderRadius: props?.borderRadius ? props.borderRadius : "10px",
          background: props?.background ? props.background : "transparent",
          fontWeight: props?.fontWeight ? props.fontWeight : "bold",

          cursor: "pointer",
          "&:hover": {
            background: props?.background ? props.background : "transparent",
            transition: "0.3s linear",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Button1;
