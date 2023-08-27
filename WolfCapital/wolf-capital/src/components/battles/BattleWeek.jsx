import { Box, Container, Typography } from "@mui/material";
import { BsInfoLg } from "react-icons/bs";
import Group293 from "../../assets/Group293.png";
import Group402 from "../../assets/Group402.png";
import Group35019 from "../../assets/Group35019.png";
import Frame75 from "../../assets/Frame75.png";
import YourWolfPack from "../wolfpack/YourWolfPack";

const battleWeek = [
  {
    h: "Prize Pool",
    p: "$1,900",
    img: Frame75,
  },

  {
    h: "Prize ",
    p: "$10",
    img: Group35019,
  },
  {
    h: "Total Week Stake",
    p: "$22,900",
    img: Frame75,
  },
  {
    h: "Time Left",
    p: "7D00H00M",
    img: Group402,
  },
];
const BattleWeek = () => {
  return (
    <Box mt={4}>
      <Container>
        <Box
          sx={{
            background: "linear-gradient(45deg, #121212 30%, #242424 70%)",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" sx={{ color: "#fff" }}>
              Battle Week 10
            </Typography>
            <BsInfoLg
              style={{
                background: "transparent",
                border: "1px solid #6C6C6C",
                color: "#6C6C6C",
                fontSize: "20px",
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box
            mt={2}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {battleWeek.map((data, i) => {
              return (
                <Box key={i} display="flex" alignItems="center">
                  <Box component="img" src={data.img} />
                  <Box color="#fff">
                    <Typography> {data.h} </Typography>
                    <Typography> {data.p} </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BattleWeek;
