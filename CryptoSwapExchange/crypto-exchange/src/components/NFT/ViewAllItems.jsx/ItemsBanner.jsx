import { Box, Container, Typography } from "@mui/material";
import { FiFilter } from "react-icons/fi";
import Button1 from "../../Button1";
import { RxCross1 } from "react-icons/rx";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const btnData = [
  {
    btn: "Bacground",
    selected: false,
  },
  {
    btn: "Bunny",
    selected: false,
  },
  {
    btn: "Clothes",
    selected: false,
  },
  {
    btn: "Ear",
    selected: false,
  },
  {
    btn: "Eyes",
    selected: false,
  },
  {
    btn: "Hat",
    selected: false,
  },
  {
    btn: "Mouth",
    selected: false,
  },
];
const ItemsBanner = () => {
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
    <Box>
      <Box
        mt={8}
        sx={{
          display: { md: "flex", sm: "none", xs: "none" },
          backgroundColor: "#222252",
          width: "100%",
          p: 2,
        }}
      >
        <Container>
          <Box
            display="flex"
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
                  <Button1 key={i} onClick={() => checkBtn(i)}>
                    {data.btn} {data.selected && <RxCross1 />}
                  </Button1>
                ))}
              </Box>
            </Box>
            <Box display="flex" gap={1} alignItems="center" color="#fff">
              <FaSortAmountDownAlt />
              <Button1>
                {" "}
                Lowest price
                <IoIosArrowDown />
              </Button1>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ItemsBanner;
