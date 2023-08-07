import {
  Box,
  Button,
  Container,
  Dialog,
  IconButton,
  Switch,
  Tab,
  Tabs,
  TextField,
  Typography,
  styled,
} from "@mui/material";
import bgg from "../../assets/bgg.png";
import image121 from "../../assets/image121.png";
import banlt from "../../assets/banlt.png";
import banrb from "../../assets/banrb.png";
import { FaArrowRight } from "react-icons/fa";
import image1110 from "../../assets/image1110.png";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Button1 from "../Button1";
import ClaimBounty from "./ClaimBounty";

// eslint-disable-next-line react/prop-types
const EarnBanner = ({ index }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const [claimOpen, setClaimOpen] = useState(false);

  const label = { inputProps: { "aria-label": "Switch demo" } };
  const CustomTextField = styled(TextField)({
    "& .MuiInputBase-root": {
      backgroundColor: "#222252", // Background color for the text field
      borderRadius: "113px", // Border radius
      width: "238px", // Width of the text field
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

  const handleClaimButton = () => {
    if (index === 1) {
      setClaimOpen(true);
      // console.log("clickeddd");
      setOpen(true);
    }
  };
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  //   console.log(index, "index");
  return (
    <Box>
      <Dialog
        onClose={handleClose}
        open={open}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <ClaimBounty handleClose={handleClose} />
      </Dialog>
      <Box
        mt={6}
        sx={{
          background: `url(${bgg}),
          linear-gradient(to right, #3D15A8, #A93EEB) !important`,
          // display: "flex",
          position: "relative",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box component="img" src={image121} width="20%" />
          <Box
            component="img"
            src={banlt}
            width={60}
            sx={{
              display: { md: "flex", sm: "flex", xs: "none" },
              position: "absolute",
              left: "20%",
            }}
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h4"
              sx={{ textAlign: "center", color: "#fff", fontWeight: "bold" }}
            >
              {index === 0 ? "Farms" : "Syrup Pools"}
            </Typography>
            <Typography sx={{ color: "#fff", textAlign: "center" }}>
              {index === 0
                ? "Stake LP tokens to earn."
                : "Just stake some tokens to earn. High APR, low risk."}
            </Typography>
            <Box
              mt={2}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                sx={{
                  background: "#222252",
                  color: "#fff",
                  gap: 2,
                  mb: 3,
                  "&:hover": {
                    background: "#222252",
                  },
                }}
                onClick={handleClaimButton}
                // onClick={index === 1 ? {() => setClaimOpen(true)} : 'none'} }
              >
                {index === 0 ? "Cummunity Auctions" : "Claim"}
                <FaArrowRight />
              </Button>
            </Box>
          </Box>
          <Box
            component="img"
            src={image1110}
            width={60}
            sx={{
              display: { md: "flex", sm: "flex", xs: "none" },
              position: "absolute",
              top: 0,
              right: 0,
            }}
          />
          <Box
            component="img"
            src={banrb}
            width={60}
            sx={{
              display: { md: "flex", sm: "flex", xs: "none" },
              position: "absolute",
              bottom: 0,
              right: "17%",
            }}
          />
          <Box component="img" src="" width="20%" />
        </Box>
      </Box>
      <Container maxWidth="lg">
        <Box
          mt={4}
          display="flex"
          sx={{
            justifyContent: {
              md: "space-between",
              xs: "space-around",
              sm: "space-between",
            },
          }}
          alignItems="center"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <Typography sx={{ color: "#fff" }}> Staked only </Typography>
            <Switch {...label} defaultChecked color="secondary" sx={{}} />
            <Box
              sx={{
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                display: "flex",
              }}
            >
              <Tabs
                value={selectedTab}
                //   onChange={handleTabChange}
                sx={{
                  backgroundColor: "#222252",
                  width: "210px",
                  borderRadius: "130px",
                  p: 1,
                  ".MuiTabs-indicator": {
                    backgroundColor: "transparent",
                  },
                }}
              >
                <Tab
                  label="Live"
                  index={0}
                  // onClick={() => setIndex(0)}
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#EF682A",
                      textDecoration: "none", // Remove underline on hover
                    },
                    "&.Mui-selected": {
                      textDecoration: "none",
                      color: "#fff",
                      backgroundColor: "#EF682A",
                      borderRadius: "70px",
                    },
                  }}
                />
                <Tab
                  index={1}
                  label="Finished"
                  // onClick={() => setIndex(1)}
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      color: "#EF682A",
                      textDecoration: "none", // Remove underline on hover
                    },
                    "&.Mui-selected": {
                      textDecoration: "none",
                      color: "#fff",
                      backgroundColor: "#EF682A",
                      borderRadius: "70px",
                    },
                  }}
                />
              </Tabs>
            </Box>
          </Box>

          <Box
            sx={{
              display: { md: "flex", sm: "flex", xs: "none" },
            }}
            justifyContent="space-between"
            alignItems="center"
            gap={2}
          >
            <FaSortAmountDownAlt style={{ color: "#fff" }} />
            <Button1
              width="250px"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Hot
              <IoIosArrowDown />
            </Button1>
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
                  placeholder={index === 0 ? "Search Farms" : "Search Pools"}
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default EarnBanner;
