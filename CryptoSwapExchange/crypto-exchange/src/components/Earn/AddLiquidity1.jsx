import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { AiOutlineSetting } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import bnb from "../../assets/bnb.png";
import eth from "../../assets/eth.png";
import { IoIosArrowDown } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";

const swapData = [
  {
    id: 1,
    p: "Swap From",
    h: "ETH",
    logo: eth,
    dt: 0.0,
    blnc: "Balance:0",
    arrDown: <IoIosArrowDown />,
  },
  {
    id: 2,
    p: "Swap To",
    h: "BNB",
    logo: bnb,
    arrDown: <IoIosArrowDown />,
    dt: 0.0,
    blnc: "Balance:0",
  },
];

const poolShare = [
  {
    token: "Prices and pool share",
    price: "0.305155",
  },

  {
    token: "BNB Pre ETH ",
    price: "3.27703",
  },
  {
    token: "Share of Pool ",
    price: "76.35%",
  },
];
const AddLiquidity1 = ({ setOpen, handleClose }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // alignItems: "center",
          mb: 2,
        }}
      >
        <Box>
          <Box display="flex" alignItems="center" mt={2}>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: { md: "24px", sm: "20px", xs: "22px" },
              }}
            >
              Add Liquidity
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { md: "18px", sm: "22px", xs: "22px" },
            }}
          >
            Trade tokens in an instant
          </Typography>
        </Box>
      </Box>
      <Divider
        light
        sx={{
          borderColor: "#fff",
        }}
      />

      <Box
        mt={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {swapData.map((data, i) => {
          return (
            <Box key={i}>
              <Typography variant="v6" sx={{ color: "#fff" }}>
                {" "}
                {data.p} :{" "}
              </Typography>
              <Box
                mt={1}
                position="relative"
                sx={{
                  height: "134px",
                  width: { md: "100%", sm: "100%", xs: "100%" },
                  display: "flex",
                  backgroundColor: "#222252",
                  border: "1px solid #ffffff",
                  borderRadius: "10px",
                  p: 1,
                }}
              >
                <Box>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={() => setOpen(true)}
                    sx={{
                      fontSize: "14px",
                      color: "#fff",
                      backgroundColor: "#10102D",
                      border: "1px solid transparent",
                      borderRadius: "130px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        // p: 1,
                        ml: 1,
                      }}
                    >
                      <Box component="img" src={data.logo} width={18} />
                      <Typography> {data.h} </Typography>
                      <IconButton sx={{ color: "#fff" }}>
                        {data.arrDown}
                      </IconButton>
                    </Box>
                  </Button>
                  {/* <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem>ETH</MenuItem>
                        <MenuItem>BTC</MenuItem>
                        <MenuItem>ARB</MenuItem>
                      </Menu> */}
                </Box>
                <Box display="flex" sx={{ color: "#fff" }}>
                  <Typography
                    sx={{
                      display: "flex",
                      position: "absolute",
                      bottom: "10%",
                      left: "10%",
                    }}
                  >
                    {" "}
                    {data.dt}{" "}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      position: "absolute",
                      bottom: "10%",
                      right: "10%",
                    }}
                  >
                    {" "}
                    {data.blnc}{" "}
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

      <Box mt={8}>
        <Typography sx={{ color: "#fff" }}>Prices and pool share :</Typography>
        <Box
          mt={1}
          sx={{
            minHeight: "134px",
            width: { md: "100%", sm: "100%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#222252",
            border: "1px solid #ffffff",
            borderRadius: "10px",
            p: 1,
            gap: 2,
          }}
        >
          {poolShare.map((pool, i) => {
            return (
              <Box key={i} display="flex" justifyContent="space-between">
                <Typography sx={{ color: "#888E9E" }}>{pool.token}</Typography>
                <Typography sx={{ color: "#fff" }}> {pool.price} </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AddLiquidity1;
