import {
  Box,
  Container,
  Dialog,
  Divider,
  IconButton,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import tether from "../../assets/tether.png";
import dash from "../../assets/dash.png";
import ltc from "../../assets/ltc.png";
import etherium from "../../assets/etherium.png";
import btc from "../../assets/btc.png";
import binance from "../../assets/binance.png";
import { Link } from "react-router-dom";
import ManageTokenList from "./ManageTokenList";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "#222252", // Background color for the text field
    borderRadius: "113px", // Border radius
    minWidth: "400px", // Width of the text field
    height: "52px", // Height of the text field
    color: "#fff",
    border: "none", // Remove the border
    padding: "8px 12px", // Add padding for better appearance
    "&:hover": {
      backgroundColor: "#2a2a5a", // Background color on hover (optional)
    },
  },
  "& .MuiInputBase-input": {
    padding: "0", // Remove input padding (optional)
  },
  "& .MuiIconButton-root": {
    padding: "10px", // Adjust padding for the icon button (optional)
  },
});

const cardData = [
  {
    h: "USDT",
    p: "Tether USDT",
    img: tether,
  },
  {
    h: "BTC",
    p: "Bitcoin",
    img: btc,
  },
  {
    h: "BNB",
    p: "Binance Coin",
    img: binance,
  },
  {
    h: "ETH",
    p: "Etherium Coin",
    img: etherium,
  },
  {
    h: "LTC",
    p: "Lite Coin",
    img: ltc,
  },
  {
    h: "DASH",
    p: "Dash Coin",
    img: dash,
  },
];

const SelectToken = ({ setOpenConnect }) => {
  const [searchText, setSearchText] = useState("");
  const [selectTokenOpen, setSelectTokenOpen] = useState(false);
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };
  const handleSelecttClose = () => {
    setSelectTokenOpen(false);
  };
  const openSelect = () => {
    setOpenConnect(true);
    setSelectTokenOpen(true);
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle the search submission
    console.log("Search Text:", searchText);
  };

  return (
    <Box>
      <Dialog
        onClose={handleSelecttClose}
        open={selectTokenOpen}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <ManageTokenList />
      </Dialog>
      <Container maxWidth="md">
        <Box>
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
            <Typography sx={{ color: "#fff", textAlign: "center" }}>
              {" "}
              Select a Token{" "}
            </Typography>
            <Divider
              light
              sx={{
                mb: 2,
                mt: 2,
                backgroundColor: "#fff",
              }}
            />
            <Box
              sx={{
                display: "flex",
                width: "100%",
              }}
            >
              <form
                onSubmit={handleSearchSubmit}
                style={{
                  justifyContent: "space-between",
                }}
              >
                <CustomTextField
                  placeholder="Search Here"
                  variant="outlined"
                  value={searchText}
                  onChange={handleSearchChange}
                  InputProps={{
                    endAdornment: (
                      <IconButton type="submit" aria-label="search">
                        <AiOutlineSearch style={{ color: "#fff" }} />
                      </IconButton>
                    ),
                  }}
                />
              </form>
            </Box>

            <Box display="flex" gap={2} flexDirection="column">
              {cardData.map((data, i) => {
                return (
                  <Box key={i} display="flex" gap={2}>
                    <Box component="img" src={data.img} width={50} />
                    <Box
                      color="#fff"
                      sx={{
                        cursor: "pointer",
                      }}
                    >
                      <Typography> {data.h} </Typography>
                      <Typography> {data.p} </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>

            <Typography
              sx={{ cursor: "pointer", textAlign: "center", color: "#fff" }}
              onClick={() => openSelect()}
              //   setSelectTokenOpen={setSelectTokenOpen}
            >
              Manage Token Lists
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SelectToken;
