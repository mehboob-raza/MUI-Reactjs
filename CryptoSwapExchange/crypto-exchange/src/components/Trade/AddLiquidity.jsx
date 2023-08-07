import { Box, Card, Container, Divider, Typography } from "@mui/material";
import Button1 from "../Button1";
import { RxCrossCircled } from "react-icons/rx";
import { GoHistory } from "react-icons/go";
import { Link } from "react-router-dom";
import { BsBox2Fill } from "react-icons/bs";

const AddLiquidity = () => {
  return (
    <Container maxWidth="md">
      <Box
        mt={8}
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "500px",
            background: "linear-gradient(to right, #3D15A8, #A93EEB) ",
            p: 2,
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              // alignItems: "center",
              mb: 2,
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#fff",
                  fontSize: { md: "30px", sm: "26px", xs: "28px" },
                }}
              >
                Your Liquidity
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: { md: "20px", sm: "22px", xs: "22px" },
                }}
              >
                Remove liquidity to receive tokens back
              </Typography>
            </Box>
            <Box
              sx={{
                color: "#fff",
                display: "flex",
                gap: 2,
                fontWeight: "bold",
              }}
            >
              <GoHistory
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              />
              <RxCrossCircled
                style={{
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              />
            </Box>
          </Box>
          <Divider
            light
            sx={{
              borderColor: "#fff",
            }}
          />

          <Box
            mt={2}
            sx={{
              color: "#fff",
            }}
          >
            <Typography>Connect to a wallet to view your liquidity.</Typography>
          </Box>

          <Box
            mt={2}
            mb={2}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Link to="liquidity" style={{ textDecoration: "none" }}>
              <Button1>Add Liquidity</Button1>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default AddLiquidity;
