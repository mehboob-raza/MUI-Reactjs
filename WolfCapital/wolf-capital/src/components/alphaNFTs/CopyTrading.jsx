import { Box, Container, Typography } from "@mui/material";
import { BsInfo } from "react-icons/bs";
import Button1 from "../../Button/Button1";

const CopyTrading = () => {
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
            borderRadius: "10px",
            p: 2,
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography></Typography>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                textAlign: "center",
              }}
            >
              Copy Trading Verification
            </Typography>

            <BsInfo
              style={{
                background: "transparent",
                border: "1px solid gray",
                fontSize: "20px",
                color: "gray",
                borderRadius: "4px",
              }}
            />
          </Box>

          <Box
            mt={2}
            sx={{
              background: "linear-gradient(45deg, #222222 30%, #141414 70%)",
              borderRadius: "40px",
              p: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography sx={{ color: "#fff" }}>
              ENTER BITGET UID HERE
            </Typography>
            <Box>
              <Button1
                // background="linear-gradient(to right , #0797CF 30%, #402DD0 100%"
                background="#402DD0"
                borderRadius="40px"
                width="100px"
                border="none"
              >
                VERIFY
              </Button1>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CopyTrading;
