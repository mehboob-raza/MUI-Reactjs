import {
  Box,
  Card,
  Container,
  Divider,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { RxCrossCircled } from "react-icons/rx";
import Button1 from "../Button1";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { useState } from "react";
import { LuArrowUpDown } from "react-icons/lu";

const ROI = ({ handleClose }) => {
  const [value, setValue] = useState("1D");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box>
      <Container>
        <Box
          sx={{
            minWidth: "345px",
            background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
            p: 2,
            borderRadius: "20px",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="#fff"
          >
            <Typography>ROI Calculator</Typography>
            <RxCrossCircled
              onClick={handleClose}
              style={{ cursor: "pointer" }}
            />
          </Box>
          <Divider light sx={{ background: "#fff", mt: 2, mb: 2 }} />
          <Typography sx={{ color: "#fff", fontSize: "16px" }}>
            Crypto Staked
          </Typography>
          <Box
            mt={1}
            sx={{
              backgroundColor: "#222252",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
              borderRadius: "10px",
            }}
          >
            <Box display="flex" gap={1}>
              <Typography sx={{ fontSize: "24px", color: "#fff" }}>
                0.00
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "gray", mt: 2 }}>
                Crypto Staked
              </Typography>
            </Box>
            <Typography sx={{ color: "gray" }}>
              USD <LuArrowUpDown />
            </Typography>
          </Box>

          <Box
            mt={3}
            mb={3}
            display="flex"
            gap={3}
            justifyContent="space-around"
            alignItems="center"
          >
            <Button1>$100</Button1>
            <Button1>$1000</Button1>
            <Button1>My Balance</Button1>
            <AiOutlineQuestionCircle
              style={{ color: "#fff", fontSize: "20px", fontWeight: "bold" }}
            />
          </Box>
          <Box
            sx={{
              background: "#10102D",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              position: "relative",
              // p: 1,
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              width="200px"
              sx={{
                display: { md: "flex", sm: "none", xs: "none" },

                color: "#fff",
                ".css-11yukd5-MuiTabs-indicator": {
                  color: "#fff",
                  backgroundColor: "transparent",
                },
                ".css-1sly79w-MuiButtonBase-root-MuiTab-root.Mui-selected": {
                  color: "#fff",
                },
                ".indicatorColor": {
                  color: "#fff",
                },
              }}
            >
              <Tab
                value="1D"
                label="1D"
                width="50px"
                sx={{
                  color: "#fff",
                  backgroundColor: value === "1D" ? "#EF682A" : "transparent", // Change background color when selected
                  borderRadius: "30px",
                }}
              />
              <Tab
                value="7D"
                label="7D"
                width="50px"
                sx={{
                  color: "#fff",
                  backgroundColor: value === "7D" ? "#EF682A" : "transparent", // Change background color when selected
                  borderRadius: "30px",
                }}
              />
              <Tab
                value="30D"
                label="30D"
                width="50px"
                sx={{
                  color: "#fff",
                  backgroundColor: value === "30D" ? "#EF682A" : "transparent", // Change background color when selected
                  borderRadius: "30px",
                }}
              />
              <Tab
                value="1Y"
                label="5Y"
                width="50px"
                sx={{
                  color: "#fff",
                  backgroundColor: value === "1Y" ? "#EF682A" : "transparent", // Change background color when selected
                  borderRadius: "30px",
                }}
              />
              <Tab
                value="5Y"
                label="5Y"
                width="50px"
                sx={{
                  color: "#fff",
                  backgroundColor: value === "5Y" ? "#EF682A" : "transparent", // Change background color when selected
                  borderRadius: "30px",
                }}
              />
            </Tabs>
          </Box>
          <Typography sx={{ mt: 2, color: "#fff" }}>
            Roi at Current Rates
          </Typography>
          <Box
            sx={{
              mt: 2,
              backgroundColor: "#222252",
              p: 2,
              display: "flex",
              flexDirection: "column",
              borderRadius: "10px",
            }}
          >
            <Typography sx={{ color: "#fff", fontSize: "24px" }}>
              $0.00
            </Typography>
            <Typography sx={{ color: "gray" }}>
              {" "}
              -0.00 Crypto(0.00%){" "}
            </Typography>
          </Box>
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="#fff"
          >
            <Typography>APR</Typography>
            <Typography>48.72%</Typography>
          </Box>
          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            color="#fff"
          >
            <Typography>APY(1x daily compound) </Typography>
            <Typography>60.72%</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ROI;
