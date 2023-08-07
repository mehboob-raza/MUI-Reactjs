import {
  Card,
  CardContent,
  Typography,
  Divider,
  Checkbox,
  Box,
} from "@mui/material";
import Button1 from "../Button1";

// eslint-disable-next-line react/prop-types
const Welcome = ({ setIsLoading }) => {
  console.log(setIsLoading, "wlcm");
  const handleContinue = () => {
    setIsLoading(false); // Call the onClose function passed from ShowWelcome to close the dialog
  };

  return (
    <Box
      sx={{
        minWidth: "345px",
        background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
        p: 2,
        borderRadius: "20px",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h1"
          sx={{ color: "#fff", textAlign: "center" }}
        >
          Welcome!
        </Typography>
        <Divider light sx={{ borderColor: "#fff" }} />
        <Typography
          variant="subtitle1"
          sx={{
            mt: 2,
            color: "#fff",
            textAlign: "center",
          }}
        >
          I Acknowledge That:
        </Typography>
        <ul>
          {/* <li> */}
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: "12px",
            }}
          >
            <Checkbox
              color="default"
              sx={{
                color: "#fff", // Set the color for the checkbox itself
                "&.Mui-checked": {
                  color: "#fff", // Set the color for the checkbox when it is checked
                },
                "&.MuiCheckbox-colorDefault.Mui-checked:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.04)", // Set the color for the background when the checkbox is checked and hovered
                },
                "&.Mui-disabled": {
                  color: "#888", // Set the color for the checkbox when it is disabled
                },
                "&.Mui-disabled.Mui-checked": {
                  color: "#888", // Set the color for the checkbox when it is disabled and checked
                },
              }}
            />{" "}
            I understand that small orders are executed at higher execution
            price due to gas fees.
          </Typography>
          {/* </li> */}
          {/* <li> */}
          <Typography
            variant="body1"
            sx={{
              color: "#fff",
              fontSize: "12px",
            }}
          >
            <Checkbox
              color="default"
              sx={{
                color: "#fff", // Set the color for the checkbox itself
                "&.Mui-checked": {
                  color: "#fff", // Set the color for the checkbox when it is checked
                },
                "&.MuiCheckbox-colorDefault.Mui-checked:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.04)", // Set the color for the background when the checkbox is checked and hovered
                },
                "&.Mui-disabled": {
                  color: "#888", // Set the color for the checkbox when it is disabled
                },
                "&.Mui-disabled.Mui-checked": {
                  color: "#888", // Set the color for the checkbox when it is disabled and checked
                },
              }}
            />{" "}
            I understand that using taxed tokens on limit orders is highly
            discouraged and not recommended - Taxed tokens can be stuck in limit
            orders and lost forever because of the impossibility to execute an
            order for such tokens.
          </Typography>
          {/* </li> */}
        </ul>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button1 onClick={handleContinue}>Contunue</Button1>
        </Box>
      </CardContent>
    </Box>
  );
};

export default Welcome;
