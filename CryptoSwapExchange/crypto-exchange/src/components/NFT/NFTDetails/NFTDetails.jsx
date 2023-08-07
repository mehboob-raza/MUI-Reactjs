import { Box, Container, Grid } from "@mui/material";
import InfoTab from "./InfoTab";
import DropDownCards from "./DropDownCards";
import SaleCards from "./SaleCards";

const NFTDetails = () => {
  return (
    <div>
      <InfoTab />
      <Container>
        <Grid container spacing={8}>
          <Grid item md={4} sm={12} xs={12}>
            <DropDownCards />
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <SaleCards />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default NFTDetails;
