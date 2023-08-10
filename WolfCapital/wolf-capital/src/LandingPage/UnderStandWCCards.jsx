import { Box, Grid, Typography } from "@mui/material";
import Frame8688 from "../assets/Frame8688.png";
import trade from "../assets/trade.png";
import Group237 from "../assets/Group237.png";

const cardsData = [
  {
    h: "Staking",
    p: "Earn up to 1.5% daily and an APR equivalent to 547%. Backed by external revenue, Wolf Capital offers unmatched earning potential. Stake $USDC and experience the future of DeFi.",
    logo: trade,
  },
  {
    h: "Wolfpacks",
    p: "Teamwork and collaboration is at the core of the Wolf Capital project. The concept of Wolf Packs elevates this by bringing users together in a  team-oriented environment where the power of unity can be harnessed. By joining a Wolf Pack, users not only benefit from the community and support, but also increase  their daily staking yield based on the level of their pack. ",
    logo: Frame8688,
  },
  {
    h: "Wolfpack Battles",
    p: "Join forces with your fellow Wolfpack members and reap the rewards of teamwork. At Wolf Capital, the team with the most deposits each week wins the weekly battle. This system not only incentivizes collaboration, but also adds an extra layer of excitement to your staking experience. ",
    logo: Group237,
  },
];
const UnderStandWCCards = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // mt: 20,
        // gap: 2,
        mb: 8,
      }}
    >
      <Grid container spacing={10}>
        {cardsData.map((data, i) => {
          return (
            <Grid item key={i} md={4} sm={12} xs={12}>
              <Box
                sx={{
                  width: { md: 300, sm: "100%", xs: "100%" },
                  height: 400,
                  background: "linear-gradient(45deg, #101010, #242424)",
                  border: "1.5px solid #3E3E3E",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  borderRadius: 2,
                  // justifyContent: "center",
                  // alignItems: "center",
                  p: 2,
                }}
              >
                <Box>
                  <Typography
                    // variant="h6"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: { md: "30px", sm: "32px", xs: "29px" },
                    }}
                  >
                    {data.h}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "16px", sm: "22px", xs: "20px" },

                      color: "#fff",
                      mt: 3,
                    }}
                  >
                    {data.p}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    position: "absolute",
                    bottom: 10,
                  }}
                >
                  <Box component="img" src={data.logo} />
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default UnderStandWCCards;
