import { Box, Container, Grid, Typography } from "@mui/material";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button1 from "../../Button/Button1";
import coinsBowl from "../../assets/coinsBowl.png";

const WBattels = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "linear-gradient(45deg, #1B1B1B 30%, #282828 70%)",
            borderRadius: "10px",
            p: 2,
            mt: 6,
            // minHeight: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Grid container>
            <Grid
              item
              md={7}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "28px",
                }}
              >
                Wolfpack Battles
              </Typography>
              <Box
                mt={4}
                sx={{
                  display: "flex",
                  flexDirection: {
                    md: "column",
                    sm: "column-reverse",
                    xs: "column-reverse",
                  },
                }}
              >
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    mt: { md: 0, sm: 2, xs: 3 },
                  }}
                >
                  <Box color="#fff">
                    <Typography> Prize Pool</Typography>
                    <Typography
                      sx={{
                        border: "1px solid #0094FF",
                        width: "120px",
                        p: 0.7,
                        borderRadius: "5px",
                      }}
                    >
                      $ 3,000
                    </Typography>
                  </Box>
                  <Box color="#fff">
                    <Typography>Time Left</Typography>
                    <Typography
                      sx={{
                        border: "1px solid #0094FF",
                        width: "120px",
                        p: 0.7,
                        borderRadius: "5px",
                      }}
                    >
                      6d 20h 50m
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: "#fff",
                    mt: 2,
                  }}
                >
                  Engage in our Weekly Wolfpack Battles by staking $USDC.
                  Compete alongside your pack for a share of the weekly prize
                  pool. Triumph brings rewarding yields for your entire team.
                  It's teamwork, the Wolf Capital way!
                </Typography>
                <Box
                  sx={{
                    display: { md: "flex", sm: "none", xs: "none" },
                  }}
                >
                  <Button1 border="none" color="#0094FF">
                    ENTER BATTLES{" "}
                    <MdKeyboardArrowRight style={{ color: "#0094FF" }} />{" "}
                  </Button1>
                </Box>
              </Box>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <Box component="img" src={coinsBowl} width="100%" />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WBattels;
