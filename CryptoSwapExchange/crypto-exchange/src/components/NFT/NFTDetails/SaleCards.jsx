import { Box, Dialog, Divider, Typography } from "@mui/material";
import logoo from "../../../assets/logoo.png";
import image137 from "../../../assets/image137.png";
import { MdStorefront } from "react-icons/md";
import { BsArrowUp } from "react-icons/bs";
import Button1 from "../../Button1";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import BuyCard from "./BuyCard";
import React from "react";

const saleCards = [
  {
    logo: logoo,
    h: 0.025,
    p: "-6.75 USD",
    img: image137,
    h1: " Art Collection",
    p1: "0x92...a6ec",
  },
  {
    logo: logoo,
    h: 0.025,
    p: "-6.75 USD",
    img: image137,
    h1: " Art Collection",
    p1: "0x92...a6ec",
  },
  {
    logo: logoo,
    h: 0.025,
    p: "-6.75 USD",
    img: image137,
    h1: " Art Collection",
    p1: "0x92...a6ec",
  },
  {
    logo: logoo,
    h: 0.025,
    p: "-6.75 USD",
    img: image137,
    h1: " Art Collection",
    p1: "0x92...a6ec",
  },
  {
    logo: logoo,
    h: 0.025,
    p: "-6.75 USD",
    img: image137,
    h1: " Art Collection",
    p1: "0x92...a6ec",
  },
];

const SaleCards = () => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box mt={6}>
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
        <BuyCard handleClose={handleClose} />
      </Dialog>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
        }}
      >
        <Table
          sx={{
            background: "#222252",
            borderRadius: "10px",
          }}
        >
          <TableHead
            sx={{
              borderBottom: "1px solid #fff",
            }}
          >
            <TableRow
              sx={{
                borderBottom: "1px solid #fff",
              }}
            >
              <TableCell>
                <Box
                  display="flex"
                  gap={2}
                  alignItems="center"
                  color="#fff"
                  p={2}
                >
                  <MdStorefront />
                  <Typography> For Sale (1,030) </Typography>
                </Box>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Box display="flex" alignItems="center" color="#fff" p={2}>
                  <Typography>
                    {" "}
                    Price <BsArrowUp />{" "}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell>
                <Box display="flex" alignItems="center" color="#fff" p={2}>
                  <Typography> Owner </Typography>
                </Box>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {saleCards.map((data, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Box display="flex" gap={1}>
                    <Box
                      component="img"
                      src={data.logo}
                      width={20}
                      height={30}
                    />
                    <Box>
                      <Typography sx={{ color: "#fff" }}> {data.h} </Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        {" "}
                        ({data.p}){" "}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box display="flex" gap={1}>
                    <Box
                      component="img"
                      src={data.img}
                      width={30}
                      height={30}
                      mt={1}
                    />
                    <Box>
                      <Typography sx={{ color: "#fff" }}>
                        {" "}
                        {data.h1}{" "}
                      </Typography>
                      <Typography sx={{ fontSize: "12px", color: "gray" }}>
                        {" "}
                        {data.p1}{" "}
                      </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Button1 width="100px" onClick={handleClickOpen}>
                      Buy
                    </Button1>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

// const SaleCards = () => {
//   return (
//     <Box
//       mt={6}
//       sx={{
//         background: "#222252",
//         borderRadius: "10px",
//       }}
//     >
//       <Box>
//         <Box display="flex" gap={2} alignItems="center" color="#fff" p={2}>
//           <MdStorefront />
//           <Typography> For Sale (1,030) </Typography>
//         </Box>
//         <Divider />
//         <Box
//           display="flex"
//           //   justifyContent="space-between"
//           alignItems="center"
//           color="#fff"
//           p={2}
//         >
//           <Typography>
//             {" "}
//             Price <BsArrowUp />{" "}
//           </Typography>
//           <Typography> Owner </Typography>
//         </Box>
//         <Divider />

//         <Box>
//           {saleCards.map((data, i) => {
//             return (
//               <Box key={i} color="#fff">
//                 <Box
//                   display="flex"
//                   justifyContent="space-between"
//                   gap={2}
//                   p={1}
//                   alignItems="center"
//                 >
//                   <Box display="flex" gap={1}>
//                     <Box
//                       component="img"
//                       src={data.logo}
//                       width={20}
//                       height={30}
//                     />
//                     <Box>
//                       <Typography> {data.h} </Typography>
//                       <Typography sx={{ fontSize: "12px", color: "gray" }}>
//                         {" "}
//                         ({data.p}){" "}
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Box display="flex" gap={1}>
//                     <Box
//                       component="img"
//                       src={data.img}
//                       width={30}
//                       height={30}
//                       mt={1}
//                     />
//                     <Box>
//                       <Typography> {data.h1} </Typography>
//                       <Typography sx={{ fontSize: "12px", color: "gray" }}>
//                         {" "}
//                         {data.p1}{" "}
//                       </Typography>
//                     </Box>
//                   </Box>
//                   <Button1 textAlign="center" width="100px">
//                     Buy
//                   </Button1>
//                 </Box>
//                 <Divider />
//               </Box>
//             );
//           })}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

export default SaleCards;
