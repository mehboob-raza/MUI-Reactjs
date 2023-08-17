import {
  Box,
  Button,
  Container,
  Grid,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import { AiOutlineInfo } from "react-icons/ai";
import { IoLogoUsd, IoIosArrowDown } from "react-icons/io";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  track: {
    background:
      "linear-gradient(90deg, #F08AD3 20%, #9582E4 60%, #2F78F2 100%)",
  },
});
const MidCard = () => {
  const classes = useStyles();
  return (
    <Box mt={4}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item md={6} sm={12} xs={12}>
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
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  Stake
                </Typography>
                <AiOutlineInfo
                  style={{
                    border: "1px solid #6C6C6C",
                    color: "#6C6C6C",
                    background: "transparent",
                    borderRadius: "4px",
                    p: 1,
                    fontSize: "20px",
                  }}
                />
              </Box>
              <Typography mt={1} sx={{ color: "#fff", fontSize: "12px" }}>
                Amount to Stake
              </Typography>

              <Box
                sx={{
                  background: "linear-gradient(to right, #373737 , #282828 )",
                  p: 1,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: "50px",
                }}
              >
                <TextField
                  variant="standard"
                  defaultValue="100"
                  sx={{
                    color: "#fff",
                    flexGrow: 1,
                    ".MuiTextField-root": {
                      borderBottom: "none",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottom: "none",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottom: "none",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottom: "none",
                    },
                  }}
                />
                <IoLogoUsd
                  style={{
                    color: "#0094FF",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    background: "#0094FF",
                    color: "#fff",
                    borderRadius: "30px",
                  }}
                >
                  Deposit
                </Button>
              </Box>
            </Box>

            <Box
              mt={4}
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
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  Stake
                </Typography>
                <AiOutlineInfo
                  style={{
                    border: "1px solid #6C6C6C",
                    color: "#6C6C6C",
                    background: "transparent",
                    borderRadius: "4px",
                    p: 1,
                    fontSize: "20px",
                  }}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography mt={1} sx={{ color: "#fff", fontSize: "12px" }}>
                  Wolfpack Name
                </Typography>
                <Box>
                  <Typography mt={1} sx={{ color: "#fff", fontSize: "12px" }}>
                    Members
                  </Typography>
                  <Typography mt={1} sx={{ color: "#fff", fontSize: "12px" }}>
                    123
                  </Typography>
                </Box>
                <Box>
                  <Typography mt={1} sx={{ color: "#fff", fontSize: "12px" }}>
                    Total Staked
                  </Typography>
                  <Typography mt={1} sx={{ color: "#fff", fontSize: "12px" }}>
                    $50,580
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item md={6} sm={12} xs={12}>
            <Box
              // mt={4}
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
                <Typography
                  sx={{
                    color: "#fff",
                    fontSize: "20px",
                  }}
                >
                  Calculator
                </Typography>
                <AiOutlineInfo
                  style={{
                    border: "1px solid #6C6C6C",
                    color: "#6C6C6C",
                    background: "transparent",
                    borderRadius: "4px",
                    p: 1,
                    fontSize: "20px",
                  }}
                />
              </Box>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Typography sx={{ color: "#fff" }}>Staked Amount</Typography>

                  <Box
                    sx={{
                      background: "#2F3A3A",
                      p: 1,
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    <Typography>1,000</Typography>
                  </Box>
                </Box>
                <Box>
                  <Typography sx={{ color: "#fff" }}>Weekly %</Typography>

                  <Box
                    sx={{
                      background: "#2F3A3A",
                      p: 1,
                      display: "flex",
                      alignItems: "center",
                      color: "#fff",
                      borderRadius: "10px",
                    }}
                  >
                    <TextField
                      defaultValue="1"
                      variant="standard"
                      sx={{
                        color: "#fff",
                        flexGrow: 1,
                        ".MuiTextField-root": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:before": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:after": {
                          borderBottom: "none",
                        },
                        "& .MuiInput-underline:hover:before": {
                          borderBottom: "none",
                        },
                      }}
                    />
                    <IoIosArrowDown />
                  </Box>
                </Box>
              </Box>

              <Typography
                mt={2}
                sx={{
                  color: "#fff",
                  textAlign: "center",
                }}
              >
                Period: 10 Weeks
              </Typography>

              <Slider
                defaultValue={50}
                aria-label="Default"
                valueLabelDisplay="auto"
                classes={{ track: classes.track }}
              />

              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                color="#fff"
                mt={2}
              >
                <Box>
                  <Typography>Total Profit</Typography>
                  <Typography>$2,000</Typography>
                </Box>
                <Box>
                  <Typography>Weekly Profit</Typography>
                  <Typography>$20</Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MidCard;
