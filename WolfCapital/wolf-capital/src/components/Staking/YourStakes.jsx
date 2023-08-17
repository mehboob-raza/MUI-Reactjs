import {
  Box,
  Button,
  Container,
  Grid,
  Slider,
  Typography,
} from "@mui/material";
import Frame88 from "../../assets/Frame88.png";
import { makeStyles } from "@mui/styles";
import thumbImage from "../../assets/thumbImage.png";

const stakesData = [
  {
    h: "STAKE #2387",
    h1: "Staked Amount",
    p1: "$100,000",
    h2: "Claimable Profit",
    p2: "$100",
  },
  {
    h: "STAKE #2387",
    h1: "Staked Amount",
    p1: "$100,000",
    h2: "Claimable Profit",
    p2: "$100",
  },
  {
    h: "STAKE #2387",
    h1: "Staked Amount",
    p1: "$100,000",
    h2: "Claimable Profit",
    p2: "$100",
  },

  {
    h: "STAKE #2387",
    h1: "Staked Amount",
    p1: "$100,000",
    h2: "Claimable Profit",
    p2: "$100",
  },
  {
    h: "STAKE #2387",
    h1: "Staked Amount",
    p1: "$100,000",
    h2: "Claimable Profit",
    p2: "$100",
  },
  {
    h: "STAKE #2387",
    h1: "Staked Amount",
    p1: "$100,000",
    h2: "Claimable Profit",
    p2: "$100",
  },
];

const useStyles = makeStyles((theme) => ({
  customThumb: {
    width: 24,
    height: 24,
    borderRadius: "50%",
    backgroundColor: "transparent", // Set the background color of the thumb to transparent
    backgroundImage: `url(${thumbImage})`, // Set the image as the background image
    backgroundSize: "cover",
    cursor: "pointer",
    marginTop: 0, // Adjust the positioning to align the thumb with the track
  },
}));

const YourStakes = () => {
  const classes = useStyles();

  //   const marks = [
  //     { value: 0, label: "0%" },
  //     { value: 50, label: "50%" },
  //     { value: 100, label: "100%" },
  //   ];
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
          <Typography variant="h4" sx={{ color: "#fff" }}>
            Your Stakes
          </Typography>
          <Grid container spacing={8} mt={2}>
            {stakesData.map((data, i) => {
              return (
                <Grid
                  item
                  key={i}
                  md={4}
                  sm={6}
                  xs={12}
                  sx={{
                    display: "flex",
                    // gap: 2,
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: " #000 )",
                      p: 1,
                      color: "#fff",
                      borderRight: "6px solid gray",
                    }}
                  >
                    <Typography sx={{ fontSize: "12px" }}>
                      {" "}
                      {data.h}{" "}
                    </Typography>
                    <Typography mt={3} sx={{ fontSize: "12px" }}>
                      {" "}
                      {data.h1}{" "}
                    </Typography>
                    <Typography sx={{ fontSize: "20px" }}>
                      {" "}
                      {data.p1}
                    </Typography>
                    <Typography mt={3} sx={{ fontSize: "12px" }}>
                      {" "}
                      {data.h2}{" "}
                    </Typography>
                    <Typography sx={{ fontSize: "18px" }}>
                      {" "}
                      {data.p2}{" "}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      background: `url(${Frame88})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      //   widht: "900px",
                      p: 2,
                    }}
                  >
                    <Box
                      display="flex"
                      //   justifyContent="space-between"
                      //   alignItems="center"
                      color="#fff"
                      sx={{
                        gap: 4,
                      }}
                    >
                      <Typography sx={{ fontSize: "12px" }}>
                        Stake unlock
                      </Typography>
                      <Typography sx={{ fontSize: "12px" }}>60 Days</Typography>
                    </Box>
                    <Box
                      sx={{
                        background: "#242424",
                        // m: 1,
                        width: "100%",
                        borderRadius: "30px",
                        // ml: "2.5%",
                        mt: 1,
                      }}
                    >
                      <Slider
                        classes={{ thumb: classes.customThumb }} // Apply the custom thumb style
                        defaultValue={50}
                        valueLabelDisplay="auto"
                        aria-label="Custom slider"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        mt: 1,
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{
                          color: "#fff",
                          background: "transparent",
                        }}
                      >
                        Unstake
                      </Button>
                      <Button
                        variant="contained"
                        sx={{
                          color: "#fff",
                          mt: 1,
                          background: "transparent",
                        }}
                      >
                        claim
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default YourStakes;
