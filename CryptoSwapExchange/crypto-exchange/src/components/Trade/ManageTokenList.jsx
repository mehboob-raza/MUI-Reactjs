import {
  Box,
  Card,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { BiArrowBack } from "react-icons/bi";
import Button1 from "../Button1";

const ManageTokenList = () => {
  return (
    <Box>
      <Container maxWidth="md">
        <Box
          sx={{
            minWidth: "420px",
            background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
            p: 2,
            borderRadius: "20px",
            display: "flex",
            gap: 2,
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              color: "#fff",
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <BiArrowBack style={{ cursor: "pointer" }} />
            <Typography>Select a Token</Typography>
          </Box>
          <Divider sx={{ color: "#fff" }} />
          <Box
            display="flex"
            // width="350px"
            justifyContent="center"
            alignItems="center"
            textAlign="center"
            backgroundColor="#222252"
            borderRadius="130px"
          >
            <Button1 width="160px" justifyContent="center" border="none">
              Lists
            </Button1>
            <Button1 width="160px" justifyContent="center" border="none">
              Tokens
            </Button1>
          </Box>
          <TextField
            id="outlined-basic"
            placeholder="Ox..."
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                // border: "1px solid #000",
                backgroundColor: "#222252",
              },

              "& .MuiOutlinedInput-input": {
                color: "#fff", // Text color
              },
            }}
          />
          <Box
            sx={{
              backgroundColor: "#222252",
              width: "100%",
              p: 2,
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              placeholder="0 Custom Tokens "
              variant="standard"
              fullWidth
              InputProps={{
                disableUnderline: true, // Remove bottom border
              }}
              sx={{
                color: "#fff",
                "& .MuiOutlinedInput-input": {
                  color: "#fff", // Text color
                },
              }}
            />
            <Button1 width="90px" style={{ fontSize: "12px", height: "30px" }}>
              {" "}
              Clear All{" "}
            </Button1>
          </Box>

          <Typography
            sx={{
              mt: 16,
              textAlign: "center",
              color: "#fff",
            }}
          >
            Custom tokens are stored locally in your browser
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default ManageTokenList;
