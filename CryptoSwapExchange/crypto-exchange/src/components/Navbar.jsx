import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Group from "../assets/Group.png";
import { CiWallet } from "react-icons/ci";
import logo from "../assets/logo.png";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import Button1 from "./Button1";
import { Link } from "react-router-dom";
import ConnectWallet from "./Trade/ConnectWallet";
import Drawer from "../Drawer";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [openConnect, setOpenConnect] = useState(false);

  const handleConnectClose = () => {
    setOpenConnect(false);
  };
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const matches = useMediaQuery("(max-width:1190px)");

  const CustomTextField = styled(TextField)({
    "& .MuiInputBase-root": {
      backgroundColor: "#222252", // Background color for the text field
      borderRadius: "113px", // Border radius
      width: "198px", // Width of the text field
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

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Add your logic here to handle the search submission
    console.log("Search Text:", searchText);
  };
  return (
    <Box
      sx={{
        backgroundColor: "#06060E",
        width: "100%",
        pt: 2,
        pb: 6,
      }}
    >
      <Dialog
        onClose={handleConnectClose}
        open={openConnect}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <ConnectWallet handleConnectClose={handleConnectClose} />
      </Dialog>

      <Container maxWidth="xl">
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={1}>
            <Box
              component="img"
              width={40}
              src={Group}
              sx={{ background: "#fff", p: 1, borderRadius: "50%" }}
            />
            <Link
              to="/"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontSize: { md: "34px", sm: "24px", xs: "16px" },
                }}
              >
                cryptoswap
              </Typography>
            </Link>
            <Box
              sx={{
                display: { md: "flex", sm: "none", xs: "none" },
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
            <Box
              sx={{
                display: { md: "flex", sm: "none", xs: "none" },
                gap: 2,
                alignItems: "center",
                color: "#fff",
              }}
            >
              <Box>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  sx={{ fontSize: "14px", color: "#fff" }}
                >
                  Trade
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <Link
                    to="swap"
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleClose}>Swap</MenuItem>
                  </Link>
                  <Link
                    to="limit"
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleClose}>Limit</MenuItem>
                  </Link>
                  <Link
                    to="add-liquidity"
                    style={{ color: "#000", textDecoration: "none" }}
                  >
                    <MenuItem onClick={handleClose}>Liquidity</MenuItem>
                  </Link>
                  <MenuItem onClick={handleClose}>perpetual</MenuItem>
                </Menu>
              </Box>
              <Link to="earn" style={{ textDecoration: "none", color: "#fff" }}>
                <Typography sx={{ fontSize: "14px" }}>Earn</Typography>
              </Link>
              <Link
                to="nft-main"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <Typography sx={{ fontSize: "14px" }}>NFT</Typography>
              </Link>
            </Box>
          </Box>

          <Box display="flex" alignItems="center" gap={2}>
            <Button1 onClick={() => setOpenConnect(true)}>
              <CiWallet />
              Connect Wallet
            </Button1>
            <Drawer style={{}} />

            <Box
              display="flex"
              sx={{
                gap: "10px",
                display: { md: "flex", sm: "none", xs: "none" },
              }}
            >
              <Box component="img" src={logo} />
              <Typography sx={{ color: "#fff" }}>$6.449</Typography>
            </Box>
            <Typography
              sx={{
                color: "#fff",
                display: matches ? "none" : "flex",
              }}
            >
              Dark Mode Activate
            </Typography>
            <Box
              sx={{
                // display: { md: "flex", sm: "flex", xs: "none" },
                display: matches ? "none" : "flex",

                gap: 2,
              }}
            >
              <MdOutlineLightMode
                style={{
                  // display: { md: "flex", sm: "flex", xs: "none" },
                  color: "#fff",
                  fontSize: "32px",
                  background: "#10102D",
                  cursor: "pointer",
                  borderRadius: "50%",
                  padding: "8px",
                  "&: hover": {
                    background: "#EF682A",
                    border: "1px solid #fff",
                  },
                }}
              />
              <MdOutlineDarkMode
                style={{
                  // display: { md: "flex", sm: "flex", xs: "none" },
                  color: "#fff",
                  fontSize: "32px",
                  background: "#EF682A",
                  cursor: "pointer",
                  borderRadius: "50%",
                  padding: "8px",
                  "&: hover": {
                    background: "#EF682A",
                    border: "1px solid #fff",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
