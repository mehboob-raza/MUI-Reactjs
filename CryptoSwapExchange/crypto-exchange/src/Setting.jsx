import {
  Box,
  Button,
  Container,
  Divider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { RxCrossCircled } from "react-icons/rx";
import { AiOutlineInfoCircle } from "react-icons/ai";
// import Button1 from "./components/Button1";

const data = [
  {
    h: "Toggle Expert Mode",
    logo: <AiOutlineInfoCircle />,
  },
  {
    h: "Disable Multihops",
    logo: <AiOutlineInfoCircle />,
  },
  {
    h: "OpenMEV Gas Refunder",
    logo: <AiOutlineInfoCircle />,
  },
];
const Setting = ({ handleCloseSetting }) => {
  return (
    <Box>
      <Box
        sx={{
          // minWidth: "380px",
          background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
          // p: 2,
          borderRadius: "20px",
          display: "flex",

          flexDirection: "column",
        }}
      >
        <Container maxWidth="sm">
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              gap: 2,
              alignItems: "center",
              justifyContent: "space-between",
              mt: 2,
            }}
          >
            <Typography>Settings</Typography>
            <RxCrossCircled
              onClick={handleCloseSetting}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Typography mt={2} sx={{ color: "#fff", mb: 1 }}>
            Transaction Settings
          </Typography>
          <Divider sx={{ background: "#fff" }} />

          <Box
            display="flex"
            alignItems="center"
            gap={1}
            color="#fff"
            mt={2}
            mb={2}
          >
            <Typography>Slippage tolerance</Typography>
            <AiOutlineInfoCircle />
          </Box>
          <Box display="flex" alignItems="center" gap={2} mt={2}>
            <TextField
              id="outlined-basic"
              placeholder="Ox..."
              variant="outlined"
              size="medium"
              sx={{
                "& .MuiOutlinedInput-root": {
                  border: "1px solid #fff",
                  // width: "300px",
                  backgroundColor: "#222252",
                },

                "& .MuiOutlinedInput-input": {
                  color: "#fff", // Text color
                },
                "&:hover": {
                  border: "none",
                },
              }}
            />
            <Button
              sx={{
                height: "57px",
                // width: "60px",
                background: "#EF682A",
                color: "#fff",
                "&:hover": {
                  background: "#EF682A",
                },
              }}
            >
              Auto
            </Button>
          </Box>
          <Box display="flex" alignItems="center" gap={2} color="#fff" mt={2}>
            <Typography>Slippage Tolerance</Typography>
            <AiOutlineInfoCircle />
          </Box>
          <Box display="flex" alignItems="center" gap={2} mt={1}>
            <TextField
              id="outlined-basic"
              placeholder="30"
              variant="outlined"
              size="small"
              sx={{
                // width: "200px",
                "& .MuiOutlinedInput-root": {
                  border: "1px solid #fff",
                  backgroundColor: "#222252",
                },

                "& .MuiOutlinedInput-input": {
                  color: "#fff", // Text color
                },
              }}
            />
            <Typography
              sx={{
                color: "#fff",
              }}
            >
              Minutes
            </Typography>
          </Box>

          <Typography
            mt={2}
            sx={{
              color: "#fff",
            }}
          >
            Interface Settings
          </Typography>
          <Box
            // display="flex"
            // flexDirection="column"
            // alignItems="center"
            gap={2}
            mt={1}
            sx={{
              backgroundColor: "#222252",
              p: 2,
              borderRadius: 2,
              mb: 4,
            }}
          >
            {data.map((dt, i) => {
              return (
                <Box
                  key={i}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      display: "flex",
                      gap: 0.5,
                      alignItems: "center",
                    }}
                  >
                    {dt.h} {dt.logo}
                  </Typography>
                  <Switch color="secondary" />
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Setting;
