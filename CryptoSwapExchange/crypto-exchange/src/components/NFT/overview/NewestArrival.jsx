import { Box, Button, Container, Typography } from "@mui/material";
import hoticon from "../../../assets/hoticon.png";

import { Link } from "react-router-dom";
import NewestArrivals from "./NewestArrivals";

// function openNFTDetails(data) {
//   console.log("openNFTDetails", data);

//   <InfoTab data={data} />;
// }
const NewestArrival = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" mb={4} mt={4}>
          <Box display="flex" gap={1} alignItems="center">
            <Typography
              variant="h4"
              sx={{
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              Newest Arrivals
            </Typography>
            <Box component="img" src={hoticon} width={30} height={30} />
          </Box>
          <Link to="items" style={{ textDecoration: "none" }}>
            <Button
              sx={{
                borderRadius: "130px",
                border: "2px solid white",
                color: "#000",
                padding: "12px 24px", // Adjust the padding according to your needs
                background: "transparent",
                backgroundColor: "#fff",

                "&:hover": {
                  color: "#fff",
                },
              }}
            >
              View All
            </Button>
          </Link>
        </Box>
      </Container>
      <NewestArrivals />
    </Box>
  );
};

export default NewestArrival;
