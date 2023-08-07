import { Box, Button, Container, Typography } from "@mui/material";
import { FiFilter } from "react-icons/fi";
import Button1 from "../../Button1";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const btnData = [
  {
    btn: "Collection",
    selected: false,
  },
  {
    btn: "Listed",
    selected: false,
  },
  {
    btn: "Delisted",
    selected: false,
  },
  {
    btn: "Modified",
    selected: false,
  },
  {
    btn: "Sold",
    selected: false,
  },
];

const AcivityBanner = () => {
  const [btnState, setBtnState] = useState(btnData);

  function checkBtn(i) {
    const updatedBtnState = btnState.map((item, index) => {
      if (index === i) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });
    setBtnState(updatedBtnState);
  }

  return (
    <Box
      mt={8}
      sx={{
        display: "flex",
        backgroundColor: "#222252",
        width: "100%",
        p: 2,
      }}
    >
      <Container>
        <Box
          sx={{
            display: { md: "flex", sm: "none", xs: "none" },
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center" gap={1}>
            <FiFilter style={{ color: "#fff" }} />
            <Typography sx={{ color: "#fff", textTransform: "uppercase" }}>
              Filter By
            </Typography>
            <Box display="flex" gap={2}>
              {btnState.map((data, i) => (
                <Button1 key={i} onClick={() => checkBtn(i)} height="0px">
                  {data.btn} {data.selected && <RxCross1 />}
                </Button1>
              ))}
            </Box>
          </Box>
          <Box display="flex" gap={1}>
            <Button
              sx={{
                color: "#EF682A",
              }}
            >
              Clear
            </Button>
            <Button1 height="40px">Refresh</Button1>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AcivityBanner;

// import { Box, Button, Container, Typography } from "@mui/material";
// import { FiFilter } from "react-icons/fi";
// import Button1 from "../../Button1";
// import { RxCross1 } from "react-icons/rx";
// import { useState } from "react";

// const btnData = [
//   {
//     btn: "Collection",
//     // logo: <RxCross1 />,
//   },
//   {
//     btn: "Listed",
//     // logo: <RxCross1 />,
//   },
//   {
//     btn: "Delisted",
//     // logo: <RxCross1 />,
//   },
//   {
//     btn: "Modified",
//     // logo: <RxCross1 />,
//   },
//   {
//     btn: "Sold",
//     // logo: ,
//   },
// ];
// const AcivityBanner = () => {
//   const [select, setSelect] = useState(false);

//   function checkBtn(i) {
//     setSelect(true);
//   }
//   return (
//     <Box
//       mt={8}
//       sx={{
//         display: "flex",
//         backgroundColor: "#222252",
//         width: "100%",
//         p: 2,
//       }}
//     >
//       <Container>
//         <Box display="flex" alignItems="center" justifyContent="space-between">
//           <Box display="flex" alignItems="center" gap={1}>
//             <FiFilter style={{ color: "#fff" }} />
//             <Typography sx={{ color: "#fff" }}>Filter By</Typography>
//             <Box display="flex" gap={2}>
//               {btnData.map((data, i) => {
//                 return (
//                   <Button1 key={i} onClick={() => checkBtn(i)}>
//                     {data.btn} <RxCross1 select={select} />
//                   </Button1>
//                 );
//               })}
//             </Box>
//           </Box>
//           <Button></Button>
//           <Button1>Refresh</Button1>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default AcivityBanner;
