import {
  Box,
  Button,
  Link,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Group8 from "../../assets/Group8.png";
import eth from "../../assets/eth.png";
import bnb from "../../assets/bnb.png";
import { IoMdSwap } from "react-icons/io";
import { useEffect, useState } from "react";
import { AreaChart, Area, XAxis, Tooltip } from "recharts";

const Trades = () => {
  const [value, setValue] = useState("one");

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update the current date and time every second (1000ms)

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const data1 = [
    {
      name: "Jan",
      uv: 4000,
    },
    {
      name: "Feb",
      uv: 3000,
    },
    {
      name: "March",
      uv: 5000,
    },
    {
      name: "April",
      uv: 1500,
    },
    {
      name: "May",
      uv: 4540,
    },
    {
      name: "June",
      uv: 3600,
    },
    {
      name: "July",
      uv: 4590,
    },
    {
      name: "Aug",
      uv: 2690,
    },
    {
      name: "Sep",
      uv: 5090,
    },
    {
      name: "Oct",
      uv: 3000,
    },
    {
      name: "Nev",
      uv: 4000,
    },
    {
      name: "Dec",
      uv: 3270,
    },
  ];
  const matches = useMediaQuery("(min-width: 1150px)");
  const matches1 = useMediaQuery("(max-width: 900px)");
  const matches2 = useMediaQuery("(min-width: 820px)");

  return (
    <Box
      sx={{
        background: "#222252",
        p: 2,
        borderRadius: "20px",
      }}
    >
      <Box display="flex" justifyContent="space-between">
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Box component="img" src={eth} />
          <Box component="img" src={bnb} />
          <Typography sx={{ color: "#fff" }}> ETH/BNB </Typography>
          <IoMdSwap
            style={{ color: "#fff", fontWeight: "bold", fontSize: "16px" }}
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

              ".MuiTabs-indicator": {
                backgroundColor: "transparent",
              },
            }}
          >
            <Tab
              value="one"
              label="24H"
              width="50px"
              sx={{
                color: "#fff",
                backgroundColor: value === "one" ? "#EF682A" : "transparent", // Change background color when selected
                borderRadius: "30px",
                "&.Mui-selected": {
                  textDecoration: "none",
                  color: "#fff",
                  backgroundColor: "#EF682A",
                  borderRadius: "70px",
                },
              }}
            />
            <Tab
              value="two"
              label="1W"
              width="50px"
              sx={{
                color: "#fff",
                backgroundColor: value === "two" ? "#EF682A" : "transparent", // Change background color when selected
                borderRadius: "30px",
                "&.Mui-selected": {
                  textDecoration: "none",
                  color: "#fff",
                  backgroundColor: "#EF682A",
                  borderRadius: "70px",
                },
              }}
            />
            <Tab
              value="three"
              label="1M"
              width="50px"
              sx={{
                color: "#fff",
                backgroundColor: value === "three" ? "#EF682A" : "transparent", // Change background color when selected
                borderRadius: "30px",
                "&.Mui-selected": {
                  textDecoration: "none",
                  color: "#fff",
                  backgroundColor: "#EF682A",
                  borderRadius: "70px",
                },
              }}
            />
            <Tab
              value="four"
              label="1Y"
              width="50px"
              sx={{
                color: "#fff",
                backgroundColor: value === "four" ? "#EF682A" : "transparent", // Change background color when selected
                borderRadius: "30px",
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

      <Box>
        <Box display="flex" alignItems="center" gap={1} color="#fff">
          <Typography variant="h4">7.33</Typography>
          <Typography> ETH/BNB </Typography>
          <Typography> -0.099(-1.33%) </Typography>
        </Box>
        <Typography sx={{ color: "#fff" }}>
          {currentDateTime.toLocaleString()}
        </Typography>
      </Box>

      <AreaChart
        width={matches ? 600 : matches1 ? 300 : 500}
        height={matches ? 260 : 360}
        data={data1}
        margin={{
          top: 5,
          right: 0,
          left: 20,
          bottom: 0,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8955FF" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8955FF" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="uv"
          stroke="#8955FF"
          strokeWidth="2px"
          fill="url(#colorUv)"
        />
      </AreaChart>
    </Box>
  );
};

export default Trades;
