import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
  Box,
  Dialog,
  Typography,
} from "@mui/material";
import { AiTwotoneCalculator, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import bnd_tth from "../../assets/bnd-tth.png";
import ROI from "./ROI";
import ManageLiquidity from "./ManageLiquidity";

const data = [
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },

  {
    farm: "ETH/BNB",
    earned: "0.00",
    apr: "34.38",
    liquidity: "$236,298,670",
    multiplier: "40x",
    details: "Details",
  },
];

const Forms = () => {
  const [open, setOpen] = useState(false);
  const [openLiq, setOpenLiq] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseLiq = () => {
    setOpenLiq(false);
  };

  return (
    <Box mt={8}>
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
        <ROI handleClose={handleClose} />
      </Dialog>
      <Dialog
        onClose={handleCloseLiq}
        open={openLiq}
        sx={{
          ".MuiDialog-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <ManageLiquidity handleClose={handleCloseLiq} />
      </Dialog>
      <Container maxWidth="lg">
        <TableContainer
          component={Paper}
          sx={{
            backgroundColor: "transparent",
          }}
        >
          <Table>
            <TableHead
              sx={{
                background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
                "& th:first-child": {
                  borderTopLeftRadius: "20px",
                  // borderBottomLeftRadius: '30px',
                },
                "& th:last-child": {
                  borderTopRightRadius: "20px",
                  // borderBottomRightRadius: '30px',
                },
              }}
            >
              <TableRow
                sx={{
                  borderBottom: "2px solid #3D15A8",
                }}
              >
                <TableCell sx={{ color: "#fff" }}>Farm</TableCell>
                <TableCell sx={{ color: "#fff" }}>Earned</TableCell>
                <TableCell sx={{ color: "#fff" }}>APR</TableCell>
                <TableCell sx={{ color: "#fff" }}>Liquidity</TableCell>
                <TableCell sx={{ color: "#fff" }}>Multiplier</TableCell>
                <TableCell sx={{ color: "#fff" }}>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              sx={{
                background: "#222252",
              }}
            >
              {data.map((row, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: "#fff" }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Box component="img" src={bnd_tth} width={30} mt={1} />
                      <Typography>{row.farm}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>{row.earned}</TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography>{row.apr}</Typography>
                      <AiTwotoneCalculator
                        onClick={() => setOpen(true)}
                        style={{
                          color: "#EF682A",
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography>{row.liquidity}</Typography>
                      <AiOutlineQuestionCircle
                        style={{
                          color: "#EF682A",
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                        onClick={() => setOpenLiq(true)}
                      />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography>{row.multiplier}</Typography>
                      <AiOutlineQuestionCircle
                        style={{
                          color: "#EF682A",
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ color: "#EF682A" }}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography>{row.details}</Typography>
                      <MdOutlineKeyboardArrowDown
                        style={{
                          color: "#EF682A",
                          cursor: "pointer",
                          fontSize: "18px",
                        }}
                      />
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </Box>
  );
};

export default Forms;
