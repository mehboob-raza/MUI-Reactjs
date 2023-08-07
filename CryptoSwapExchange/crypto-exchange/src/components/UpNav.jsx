import {
  Box,
  Button,
  Container,
  Dialog,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { MdLanguage } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import {
  AiOutlineSetting,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoTelegram, BiLogoDiscordAlt } from "react-icons/bi";
import { GrReddit } from "react-icons/gr";
import { BsMedium } from "react-icons/bs";
import Setting from "../Setting";

const UpNav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // English is selected by default
  const [open, setOpen] = useState(false);

  const handleCloseSetting = () => {
    setOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language) => {
    // Add your logic to handle language change here.
    console.log("Selected language:", language);
    setSelectedLanguage(language); // Update the selected language state

    // Close the menu after selecting the language
    handleClose();
  };
  return (
    <Box
      p={2}
      sx={{
        display: { md: "flex", sm: "none", xs: "none" },
      }}
    >
      <Dialog
        onClose={handleCloseSetting}
        open={open}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Setting handleCloseSetting={handleCloseSetting} />
      </Dialog>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between">
          <Box display="flex" gap={2}>
            <Box>
              <Button
                onClick={handleClick}
                color="inherit"
                sx={{
                  color: "#fff",
                  backgroundColor: "#222252",
                  fontSize: "14px",
                  "&:hover": {
                    backgroundColor: "#222252",
                  },
                }}
                startIcon={<MdLanguage />}
                endIcon={<IoIosArrowDown />}
              >
                {selectedLanguage === "en" ? "English" : "Español"}{" "}
                {/* Display the selected language */}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                keepMounted
              >
                <MenuItem onClick={() => handleLanguageChange("en")}>
                  <ListItemIcon>
                    <MdLanguage fontSize="small" />
                  </ListItemIcon>
                  English
                </MenuItem>
                <MenuItem onClick={() => handleLanguageChange("es")}>
                  <ListItemIcon>
                    <MdLanguage fontSize="small" />
                  </ListItemIcon>
                  Español
                </MenuItem>
                {/* Add more menu items for other languages as needed */}
              </Menu>
            </Box>

            <Button
              color="inherit"
              sx={{
                color: "#fff",
                fontSize: "14px",
                backgroundColor: "#222252",
                "&:hover": {
                  backgroundColor: "#222252",
                },
              }}
              onClick={() => setOpen(true)}
              startIcon={<AiOutlineSetting />}
            >
              Setting
            </Button>
          </Box>

          <Box display="flex" gap={2} sx={{ color: "#fff" }}>
            <AiOutlineInstagram />
            <AiOutlineTwitter />
            <BiLogoTelegram />
            <BiLogoDiscordAlt />
            <GrReddit />
            <BsMedium />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UpNav;
